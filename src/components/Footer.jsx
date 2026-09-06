export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 pt-12 pb-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-700 text-base text-white">
                ⚡
              </div>
              <span className="font-display text-lg font-bold">
                Learn<span className="text-slate-300">Hub</span>
              </span>
            </div>
            <p className="mb-4 max-w-[280px] font-body text-sm leading-relaxed text-slate-400">
              The fastest path from beginner to professional software
              engineer. Learn from the world&apos;s best instructors.
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "◉"].map((s) => (
                <div
                  key={s}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-800 text-sm text-slate-400 hover:bg-slate-700 hover:text-white"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            ["Platform", ["Home", "Courses", "Instructors", "Pricing", "Blog"]],
            ["Topics", ["Frontend", "Backend", "DevOps", "AI & ML", "Cloud"]],
            [
              "Company",
              ["About Us", "Careers", "Privacy Policy", "Terms", "Help Center"],
            ],
          ].map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 font-display text-sm font-bold">{title}</h4>
              {links.map((l) => (
                <div
                  key={l}
                  className="mb-2 cursor-pointer font-body text-sm text-slate-400 hover:text-white"
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">
          <div className="font-body text-xs text-slate-500">
            © 2026 LearnHub. All rights reserved.
          </div>
          <div className="flex gap-2">
            {["Frontend", "Backend", "DevOps", "DSA"].map((t) => (
              <span
                key={t}
                className="rounded-md bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
