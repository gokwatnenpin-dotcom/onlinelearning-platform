import { fmtNum } from "../data/courses";
import { Badge, Stars } from "../components/ui";
import {
  IconBook,
  IconBuilding,
  IconCheck,
  IconClock,
  IconDownload,
  IconInfinity,
  IconMedal,
  IconMobile,
  IconUser,
} from "../components/icons";

export default function CourseDetailPage({
  course,
  onEnroll,
  enrolled,
  onBack,
}) {
  if (!course) return null;
  const isE = enrolled.has(course.id);

  return (
    <div>
      {/* Hero - plain, no color */}
      <div className="border-b border-slate-200 bg-white px-6 pt-10">
        <div className="mx-auto max-w-[1100px]">
          <button
            onClick={onBack}
            className="mb-6 cursor-pointer rounded-md border border-slate-300 bg-white px-4 py-2 font-body text-[13px] text-slate-600 hover:bg-slate-50"
          >
            ← Back to Courses
          </button>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px]">
            {/* Left */}
            <div className="pb-10">
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge text={course.badge} color={course.badgeColor} />
                <Badge text={course.category} color="#475569" />
                <Badge text={course.level} color="#334155" />
              </div>
              <h1 className="mb-3 font-display text-3xl leading-tight font-bold text-slate-900">
                {course.title}
              </h1>
              <p className="mb-5 font-body text-sm leading-relaxed text-slate-600">
                {course.description}
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Stars rating={course.rating} size={14} />
                  <span className="text-sm font-bold text-slate-900">
                    {course.rating}
                  </span>
                  <span className="font-body text-xs text-slate-500">
                    ({fmtNum(course.reviews)} reviews)
                  </span>
                </div>
                <span className="font-body text-xs text-slate-500">
                  · {fmtNum(course.enrolled)} students
                </span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 font-body text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <IconBook size={13} /> {course.lessons} lessons
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconClock size={13} /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconUser size={13} /> {course.instructor}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconBuilding size={13} /> {course.institution}
                </span>
                {course.certificate && (
                  <span className="inline-flex items-center gap-1.5">
                    <IconMedal size={13} /> Certificate of completion
                  </span>
                )}
              </div>
            </div>

            {/* Card - simple */}
            <div className="overflow-hidden rounded-md border border-slate-200 bg-white lg:-mb-10">
              <img
                src={course.image}
                alt={course.title}
                className="aspect-video w-full object-cover"
              />
              <div className="p-5">
                {course.free ? (
                  <div className="mb-3 font-display text-3xl font-bold text-emerald-600">
                    FREE
                  </div>
                ) : (
                  <div className="mb-3 font-display text-3xl font-bold text-slate-900">
                    ${course.price}
                  </div>
                )}
                <button
                  onClick={() => onEnroll(course.id)}
                  className={`mb-2 w-full cursor-pointer rounded-md px-4 py-3 font-body text-sm font-medium text-white ${
                    isE
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  {isE
                    ? "✓ Enrolled — Continue Learning"
                    : course.free
                      ? "Enroll for Free"
                      : "Enroll Now"}
                </button>
                <p className="mb-4 text-center font-body text-xs text-slate-400">
                  30-day money-back guarantee
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: <IconMobile size={14} />, text: "Access on mobile and desktop" },
                    { icon: <IconInfinity size={14} />, text: "Full lifetime access" },
                    { icon: <IconDownload size={14} />, text: "Downloadable resources" },
                    ...(course.certificate
                      ? [{ icon: <IconMedal size={14} />, text: "Certificate of completion" }]
                      : []),
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 font-body text-[13px] text-slate-600"
                    >
                      <span className="text-slate-900">{f.icon}</span>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-slate-50 px-6 pt-14 pb-12">
        <div className="mx-auto max-w-[720px]">
          {/* What you'll learn */}
          <section className="mb-4 rounded-md border border-slate-200 bg-white p-6">
            <h2 className="mb-3 font-display text-xl font-bold text-slate-900">
              What you&apos;ll learn
            </h2>
            <p className="font-body text-sm leading-relaxed text-slate-600">
              {course.what}
            </p>
          </section>

          {/* Topics */}
          <section className="mb-4 rounded-md border border-slate-200 bg-white p-6">
            <h2 className="mb-3 font-display text-xl font-bold text-slate-900">
              Topics Covered
            </h2>
            <div className="flex flex-wrap gap-2">
              {course.topics.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-100 px-3 py-1.5 font-body text-xs font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Requirements */}
          <section className="mb-4 rounded-md border border-slate-200 bg-white p-6">
            <h2 className="mb-3 font-display text-xl font-bold text-slate-900">
              Requirements
            </h2>
            <ul className="list-none">
              {course.requirements.map((r) => (
                <li
                  key={r}
                  className="mb-2 flex gap-2 font-body text-sm text-slate-600"
                >
                  <span className="mt-0.5 shrink-0 text-slate-900">
                    <IconCheck size={14} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </section>

          {/* Instructor */}
          <section className="rounded-md border border-slate-200 bg-white p-6">
            <h2 className="mb-3 font-display text-xl font-bold text-slate-900">
              Your Instructor
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-slate-900 font-display text-xl font-bold text-white">
                {course.instructor[0]}
              </div>
              <div>
                <div className="font-display text-base font-bold text-slate-900">
                  {course.instructor}
                </div>
                <div className="mt-0.5 font-body text-sm text-slate-500">
                  {course.institution}
                </div>
                <div className="mt-1 font-body text-xs text-slate-500">
                  Expert instructor · {fmtNum(course.reviews)} student reviews ·{" "}
                  {course.rating} avg rating
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
