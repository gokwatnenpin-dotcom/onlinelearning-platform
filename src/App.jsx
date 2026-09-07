import { useEffect, useMemo, useState } from "react";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CATEGORIES, COURSES } from "./data/courses";
import CourseDetailPage from "./pages/CourseDetailPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import MyLearningPage from "./pages/MyLearningPage";

export default function App() {
  const getRoute = () => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/home";
    const detail = path.match(/^\/courses\/(\d+)$/);
    if (detail) return { page: "detail", courseId: Number(detail[1]) };
    if (path === "/courses") return { page: "courses" };
    if (path === "/learning") return { page: "learning" };
    return { page: "home" };
  };
  const [route, setRoute] = useState(getRoute);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [enrolled, setEnrolled] = useState(new Set());
  const [wishlist, setWishlist] = useState(new Set());
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("learnhub-user")); } catch { return null; }
  });
  const [authMode, setAuthMode] = useState(null);
  const page = route.page;
  const selectedCourse = route.courseId
    ? COURSES.find((course) => course.id === route.courseId) || null
    : null;

  useEffect(() => {
    if (user) localStorage.setItem("learnhub-user", JSON.stringify(user));
    else localStorage.removeItem("learnhub-user");
  }, [user]);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute());
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchCat = category === "All" || c.category === category;
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase()) ||
        c.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [category, search]);

  const handleEnroll = (id) =>
    setEnrolled((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });

  const handleWishlist = (id) =>
    setWishlist((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });

  const viewCourse = (course) => {
    navigate(`/courses/${course.id}`);
  };

  const navToPage = (p) => {
    const paths = { home: "/home", courses: "/courses", learning: "/learning" };
    navigate(paths[p] || "/home");
  };

  const navigate = (path, replace = false) => {
    window.history[replace ? "replaceState" : "pushState"](null, "", path);
    setRoute(getRoute());
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-body">
      <Navbar
        page={page}
        setPage={navToPage}
        enrolled={enrolled}
        search={search}
        setSearch={setSearch}
        user={user}
        onAuth={setAuthMode}
        onSignOut={() => { setUser(null); navToPage("home"); }}
      />
      {page === "home" && (
        <HomePage
          courses={COURSES}
          onView={viewCourse}
          onEnroll={handleEnroll}
          enrolled={enrolled}
          onWishlist={handleWishlist}
          wishlist={wishlist}
          setPage={navToPage}
          setCategory={setCategory}
        />
      )}
      {page === "courses" && (
        <CoursesPage
          filtered={filtered}
          categories={CATEGORIES}
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
          onView={viewCourse}
          onEnroll={handleEnroll}
          enrolled={enrolled}
          onWishlist={handleWishlist}
          wishlist={wishlist}
        />
      )}
      {page === "detail" && (
        <CourseDetailPage
          course={selectedCourse}
          onEnroll={handleEnroll}
          enrolled={enrolled}
          onBack={() => navToPage("courses")}
        />
      )}
      {page === "learning" && user && (
        <MyLearningPage courses={COURSES} enrolled={enrolled} wishlist={wishlist} onView={viewCourse} onEnroll={handleEnroll} onWishlist={handleWishlist} user={user} />
      )}
      {page === "learning" && !user && <HomePage courses={COURSES} onView={viewCourse} onEnroll={handleEnroll} enrolled={enrolled} onWishlist={handleWishlist} wishlist={wishlist} setPage={navToPage} setCategory={setCategory} />}
      <Footer />
      {authMode && <AuthModal key={authMode} mode={authMode} onClose={() => setAuthMode(null)} onModeChange={setAuthMode} onSubmit={(account) => { setUser(account); setAuthMode(null); navToPage("learning"); }} />}
    </div>
  );
}
