import { fmtNum } from "../data/courses";
import { Badge, Stars } from "./ui";

export default function CourseCard({
  course,
  onView,
  onEnroll,
  enrolled,
  onWishlist,
  wishlist,
}) {
  const isE = enrolled.has(course.id);
  const isW = wishlist.has(course.id);

  return (
    <div className="flex cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-200 bg-white hover:shadow-md">
      {/* Thumbnail */}
      <div
        className="relative aspect-video overflow-hidden"
        onClick={() => onView(course)}
      >
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2.5 left-2.5">
          <Badge text={course.badge} color={course.badgeColor} />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlist(course.id);
          }}
          aria-label="Toggle wishlist"
          className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-base shadow-sm"
        >
          {isW ? "❤️" : "🤍"}
        </button>
        <div className="absolute bottom-2.5 left-3 flex gap-1.5">
          <span className="rounded bg-slate-900 px-2 py-[2px] text-[11px] text-white">
            ⏱ {course.duration}
          </span>
          <span className="rounded bg-slate-900 px-2 py-[2px] text-[11px] text-white">
            {course.level}
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        className="flex flex-1 flex-col p-4"
        onClick={() => onView(course)}
      >
        <div className="mb-1 text-[11px] font-semibold tracking-wide text-violet-700 uppercase">
          {course.category}
        </div>
        <h3 className="mb-2 flex-1 font-display text-[15px] leading-snug font-bold text-slate-900">
          {course.title}
        </h3>
        <p className="mb-2 text-xs text-slate-500">
          {course.instructor} ·{" "}
          <span className="text-slate-600">{course.institution}</span>
        </p>
        <div className="mb-2 flex items-center gap-1.5">
          <Stars rating={course.rating} />
          <span className="text-[13px] font-bold text-slate-900">
            {course.rating}
          </span>
          <span className="text-xs text-slate-400">
            ({fmtNum(course.reviews)} reviews)
          </span>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
          <span>📚 {course.lessons} lessons</span>
          {course.certificate && <span>🏅 Certificate</span>}
          <span>👥 {fmtNum(course.enrolled)}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
        {course.free ? (
          <span className="font-display text-lg font-bold text-emerald-600">
            FREE
          </span>
        ) : (
          <span className="font-display text-lg font-bold text-slate-900">
            ${course.price}
          </span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEnroll(course.id);
          }}
          className={`rounded-lg px-4 py-2 text-[13px] font-medium text-white ${
            isE
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-violet-700 hover:bg-violet-800"
          }`}
        >
          {isE ? "✓ Enrolled" : "Enroll Now"}
        </button>
      </div>
    </div>
  );
}
