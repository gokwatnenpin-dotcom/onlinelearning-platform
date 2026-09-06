import { CATEGORIES, CAT_ICON, COURSES } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function HomePage({
  courses,
  onView,
  onEnroll,
  enrolled,
  onWishlist,
  wishlist,
  setPage,
  setCategory,
}) {
  const featured = courses.slice(0, 6);

  return (
    <div>
      {/* HERO - simple solid */}
      <section className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-body text-xs font-medium text-slate-300">
              Software Engineering · 500K+ students enrolled
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4 max-w-[720px] font-display text-[clamp(32px,5vw,56px)] leading-tight font-extrabold text-white">
            Master Software Engineering — Ship Real Products
          </h1>

          <p className="mb-8 max-w-[540px] font-body text-base leading-relaxed text-slate-400">
            Learn from instructors at Harvard, Udemy, and top tech
            institutions. Real projects, real skills, industry-recognized
            certificates.
          </p>

          {/* Search */}
          <div className="mb-6 flex max-w-[540px] flex-col gap-2 sm:flex-row">
            <input
              onKeyDown={(e) => e.key === "Enter" && setPage("courses")}
              placeholder="e.g. React, Node.js, Machine Learning…"
              className="w-full flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 font-body text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              onClick={() => setPage("courses")}
              className="shrink-0 cursor-pointer rounded-lg bg-violet-700 px-6 py-3 font-body text-sm font-semibold whitespace-nowrap text-white hover:bg-violet-800"
            >
              Find Courses
            </button>
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-body text-[13px] text-slate-500">
              Jump to:
            </span>
            {[
              "Frontend",
              "Backend",
              "AI & ML",
              "DevOps",
              "System Design",
              "Cloud",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setPage("courses");
                }}
                className="cursor-pointer rounded-full border border-slate-700 bg-slate-800 px-3.5 py-1.5 font-body text-[13px] text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-[640px] grid-cols-2 gap-6 border-t border-slate-800 pt-8 sm:grid-cols-4">
            {[
              ["12", "Core Courses"],
              ["500K+", "Students Enrolled"],
              ["4.8★", "Avg Rating"],
              ["3 FREE", "Courses Available"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-white">
                  {n}
                </div>
                <div className="mt-1 font-body text-xs text-slate-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Browse by Topic
              </h2>
              <p className="mt-1 font-body text-sm text-slate-500">
                Pick a discipline and start building skills today
              </p>
            </div>
            <button
              onClick={() => setPage("courses")}
              className="w-fit cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 font-body text-[13px] font-medium text-slate-700 hover:bg-slate-50"
            >
              View All Courses →
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.filter((c) => c !== "All").map((cat) => {
              const count = COURSES.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setPage("courses");
                  }}
                  className="cursor-pointer rounded-lg border border-slate-200 bg-slate-50 p-4 text-left hover:border-slate-300 hover:bg-slate-100"
                >
                  <div className="mb-2 text-2xl">{CAT_ICON[cat]}</div>
                  <div className="mb-1 font-display text-sm font-bold text-slate-900">
                    {cat}
                  </div>
                  <div className="font-body text-xs text-slate-500">
                    {count} course{count !== 1 ? "s" : ""}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Featured Courses
              </h2>
              <p className="mt-1 font-body text-sm text-slate-500">
                Handpicked courses from the world&apos;s best instructors
              </p>
            </div>
            <button
              onClick={() => setPage("courses")}
              className="w-fit cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 font-body text-[13px] font-medium text-slate-700 hover:bg-slate-50"
            >
              See All 12 →
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
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
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-2 font-display text-2xl font-bold text-slate-900">
            Start Learning in 3 Steps
          </h2>
          <p className="mb-10 font-body text-sm text-slate-500">
            No complicated setup. Just pick a course and start.
          </p>
          <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            {[
              {
                icon: "🔍",
                title: "Browse Courses",
                body: "Filter by topic, level, or price. Read reviews from real students before enrolling.",
              },
              {
                icon: "📚",
                title: "Enroll & Learn",
                body: "Watch lessons at your own pace. Complete projects and get personalized feedback.",
              },
              {
                icon: "🏅",
                title: "Earn Your Certificate",
                body: "Finish the course, pass assessments, and earn a shareable certificate for your portfolio.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <div className="mb-3 text-3xl">{s.icon}</div>
                <div className="mb-2 font-display text-base font-bold text-slate-900">
                  {s.title}
                </div>
                <p className="font-body text-sm leading-relaxed text-slate-500">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BANNER - simple solid */}
      <section className="bg-violet-700 px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            { n: "500K+", l: "Students Enrolled" },
            { n: "200+", l: "Expert Instructors" },
            { n: "12", l: "SE Courses" },
            { n: "98%", l: "Satisfaction Rate" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-white">
                {s.n}
              </div>
              <div className="mt-1 font-body text-sm text-violet-100">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-1 font-display text-2xl font-bold text-slate-900">
            What Our Students Say
          </h2>
          <p className="mb-8 font-body text-sm text-slate-500">
            Real feedback from learners who changed their careers
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Emeka Okonkwo",
                role: "Frontend Dev @ Flutterwave",
                img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&q=80&fit=crop&crop=face",
                quote:
                  "LearnHub's React course was everything. I went from zero to landing a job at a fintech startup in 5 months. The projects actually challenged me.",
              },
              {
                name: "Amara Diallo",
                role: "Backend Engineer @ Andela",
                img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&fit=crop&crop=face",
                quote:
                  "The Node.js bootcamp is incredibly detailed. Jonas covers everything from basics to production deployment. Worth every naira spent.",
              },
              {
                name: "David Mensah",
                role: "SRE @ Paystack",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face",
                quote:
                  "Docker and Kubernetes felt scary until I took the course here. Now I manage deployments daily. The practical examples made all the difference.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <span className="text-sm text-amber-600">★★★★★</span>
                <p className="my-3 font-body text-sm leading-relaxed text-slate-600 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-display text-sm font-bold text-slate-900">
                      {t.name}
                    </div>
                    <div className="font-body text-xs text-slate-500">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP - simple solid */}
      <section className="bg-slate-900 px-6 py-14 text-center">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-3 font-display text-3xl font-bold text-white">
            Ready to level up?
          </h2>
          <p className="mb-6 font-body text-sm text-slate-400">
            Join 500,000 students already building their software engineering
            careers on LearnHub.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setPage("courses")}
              className="cursor-pointer rounded-lg bg-violet-700 px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-800"
            >
              Browse All Courses
            </button>
            <button
              onClick={() => {
                setCategory("All");
                setPage("courses");
              }}
              className="cursor-pointer rounded-lg border border-slate-600 bg-transparent px-6 py-3 font-body text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Start with Free Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
