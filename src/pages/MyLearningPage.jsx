import CourseCard from "../components/CourseCard";
import { IconBook, IconHeart } from "../components/icons";

export default function MyLearningPage({ courses, enrolled, wishlist, onView, onEnroll, onWishlist, user }) {
  const myCourses = courses.filter((course) => enrolled.has(course.id));
  const savedCourses = courses.filter((course) => wishlist.has(course.id));

  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-sm font-medium text-slate-500">Your space</p>
          <h1 className="font-display text-3xl font-bold text-slate-900">Keep learning, {user.name.split(" ")[0]}</h1>
        </div>
        <div className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">{myCourses.length} enrolled course{myCourses.length !== 1 ? "s" : ""}</div>
      </div>

      <section className="mb-12">
        <div className="mb-5 flex items-center gap-2"><IconBook size={18} /><h2 className="font-display text-xl font-bold text-slate-900">My courses</h2></div>
        {myCourses.length ? <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{myCourses.map((course, index) => <div key={course.id} className="relative"><CourseCard course={course} onView={onView} onEnroll={onEnroll} enrolled={enrolled} onWishlist={onWishlist} wishlist={wishlist} /><div className="absolute right-4 bottom-[62px] left-4"><div className="mb-1 flex justify-between text-[11px] font-medium text-slate-500"><span>Progress</span><span>{Math.min(20 + index * 25, 85)}%</span></div><div className="h-1.5 overflow-hidden rounded bg-slate-100"><div className="h-full rounded bg-emerald-500" style={{ width: `${Math.min(20 + index * 25, 85)}%` }} /></div></div></div>)}</div> : <Empty title="No courses yet" body="Explore the catalog and enroll in a course to begin building your learning path." />}
      </section>

      <section>
        <div className="mb-5 flex items-center gap-2"><IconHeart size={18} /><h2 className="font-display text-xl font-bold text-slate-900">Saved for later</h2></div>
        {savedCourses.length ? <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{savedCourses.map((course) => <CourseCard key={course.id} course={course} onView={onView} onEnroll={onEnroll} enrolled={enrolled} onWishlist={onWishlist} wishlist={wishlist} />)}</div> : <Empty title="Your saved list is empty" body="Tap the heart on any course to keep it handy for later." />}
      </section>
    </main>
  );
}

function Empty({ title, body }) {
  return <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-10 text-center"><h3 className="font-display text-lg font-bold text-slate-900">{title}</h3><p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-500">{body}</p></div>;
}
