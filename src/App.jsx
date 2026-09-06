import { useMemo, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CATEGORIES, COURSES } from "./data/courses";
import CourseDetailPage from "./pages/CourseDetailPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [enrolled, setEnrolled] = useState(new Set());
  const [wishlist, setWishlist] = useState(new Set());

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
    setSelectedCourse(course);
    setPage("detail");
    window.scrollTo({ top: 0 });
  };

  const navToPage = (p) => {
    setPage(p);
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
          onBack={() => setPage("courses")}
        />
      )}
      <Footer />
    </div>
  );
}
