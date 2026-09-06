import { useMemo, useState } from "react";
import { CAT_ICON, COURSES } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function CoursesPage({
  filtered,
  categories,
  category,
  setCategory,
  search,
  setSearch,
  onView,
  onEnroll,
  enrolled,
  onWishlist,
  wishlist,
}) {
  const [level, setLevel] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [mobileFilters, setMobileFilters] = useState(false);

  const finalCourses = useMemo(() => {
    return filtered.filter((c) => {
      const matchLevel = level === "All" || c.level === level;
      const matchPrice =
        priceFilter === "All" ||
        (priceFilter === "Free" ? c.free : !c.free);
      return matchLevel && matchPrice;
    });
  }, [filtered, level, priceFilter]);

  const filterPanel = (
    <div className="lg:sticky lg:top-20">
      <h3 className="mb-4 font-display text-base font-bold text-slate-800">
        Filter Courses
      </h3>

      {/* Category */}
      <div className="mb-7">
        <div className="mb-2.5 text-xs font-semibold tracking-[0.8px] text-slate-400 uppercase">
          Topic
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`flex w-full cursor-pointer items-center justify-between rounded-lg border-none px-2.5 py-2 text-left font-body text-sm ${
              category === cat
                ? "bg-slate-900 font-medium text-white"
                : "font-normal text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>
              {CAT_ICON[cat]} {cat}
            </span>
            <span className="text-[11px] text-slate-400">
              {cat === "All"
                ? COURSES.length
                : COURSES.filter((c) => c.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Level */}
      <div className="mb-7">
        <div className="mb-2.5 text-xs font-semibold tracking-[0.8px] text-slate-400 uppercase">
          Level
        </div>
        {["All", "Beginner", "Intermediate", "Advanced"].map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`block w-full cursor-pointer rounded-lg border-none px-2.5 py-2 text-left font-body text-sm ${
              level === l
                ? "bg-slate-900 font-medium text-white"
                : "font-normal text-slate-600 hover:bg-slate-100"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Price */}
      <div>
        <div className="mb-2.5 text-xs font-semibold tracking-[0.8px] text-slate-400 uppercase">
          Price
        </div>
        {["All", "Free", "Paid"].map((p) => (
          <button
            key={p}
            onClick={() => setPriceFilter(p)}
            className={`block w-full cursor-pointer rounded-lg border-none px-2.5 py-2 text-left font-body text-sm ${
              priceFilter === p
                ? "bg-slate-900 font-medium text-white"
                : "font-normal text-slate-600 hover:bg-slate-100"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex gap-8">
        {/* SIDEBAR - desktop */}
        <aside className="hidden w-60 shrink-0 lg:block">{filterPanel}</aside>

        {/* MAIN */}
        <div className="min-w-0 flex-1">
          {/* Header */}
          <div className="mb-6">
            <h1 className="mb-1.5 font-display text-[26px] font-extrabold text-slate-800">
              {category === "All" ? "All Courses" : category}
            </h1>
            <p className="font-body text-sm text-slate-500">
              {finalCourses.length} course
              {finalCourses.length !== 1 ? "s" : ""} found
              {search && ` for "${search}"`}
            </p>
          </div>

          {/* Search inline + mobile filter toggle */}
          <div className="mb-6 flex max-w-[480px] gap-2">
            <div className="relative flex-1">
              <span className="absolute top-1/2 left-[13px] -translate-y-1/2 text-[15px] text-slate-400">
                🔍
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search within courses…"
                className="w-full rounded-[10px] border-[1.5px] border-slate-200 bg-slate-50 py-[11px] pr-4 pl-10 font-body text-sm outline-none"
              />
            </div>
            <button
              onClick={() => setMobileFilters((v) => !v)}
              className="shrink-0 cursor-pointer rounded-[10px] border-[1.5px] border-slate-200 bg-white px-4 py-2 font-body text-sm font-semibold text-slate-600 lg:hidden"
            >
              ☰ Filters
            </button>
          </div>

          {/* Mobile filters collapsible */}
          {mobileFilters && (
            <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 lg:hidden">
              {filterPanel}
            </div>
          )}

          {/* Grid */}
          {finalCourses.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <div className="mb-4 text-5xl">🔍</div>
              <h3 className="mb-2 font-display text-xl text-slate-800">
                No courses found
              </h3>
              <p className="mb-5 font-body text-slate-500">
                Try adjusting your filters or search term
              </p>
              <button
                onClick={() => {
                  setCategory("All");
                  setSearch("");
                  setLevel("All");
                  setPriceFilter("All");
                }}
                className="cursor-pointer rounded-[9px] border-none bg-violet-700 px-6 py-2.5 font-body text-sm font-semibold text-white hover:bg-violet-800"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {finalCourses.map((c) => (
                <CourseCard
                  key={c.id}
                  course={c}
                  onView={onView}
                  onEnroll={onEnroll}
                  enrolled={enrolled}
                  onWishlist={onWishlist}
                  wishlist={wishlist}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
