import { useState } from "react";
import { IconBolt, IconBook, IconMenu, IconSearch } from "./icons";

export default function Navbar({ page, setPage, enrolled, search, setSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[200] border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-5 sm:px-6">
        {/* Logo */}
        <div
          onClick={() => {
            setPage("home");
            setMobileOpen(false);
          }}
          className="flex shrink-0 cursor-pointer items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
            <IconBolt size={16} />
          </div>
          <span className="font-display text-xl font-bold text-slate-900">
            LearnHub
          </span>
        </div>

        {/* Search - desktop */}
        <div className="relative hidden max-w-[500px] flex-1 md:block">
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
            <IconSearch size={15} />
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setPage("courses")}
            placeholder="Search courses, topics, instructors..."
            className="w-full rounded-lg border border-slate-300 bg-white py-2 pr-4 pl-9 font-body text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Links - desktop */}
        <div className="ml-auto hidden items-center gap-1 md:flex">
          {[
            ["home", "Home"],
            ["courses", "Courses"],
          ].map(([p, label]) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`cursor-pointer rounded-lg px-3 py-2 font-body text-sm ${
                page === p
                  ? "bg-slate-100 font-medium text-slate-900"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          ))}
          {enrolled.size > 0 && (
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-[13px] font-medium text-slate-700">
              <IconBook size={13} /> {enrolled.size} Enrolled
            </div>
          )}
          <button className="cursor-pointer rounded-lg bg-slate-900 px-4 py-2 font-body text-sm font-medium text-white hover:bg-slate-800">
            Sign Up Free
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="ml-auto flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-slate-900 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <IconMenu size={18} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pt-3 pb-4 md:hidden">
          <div className="relative mb-3">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
              <IconSearch size={15} />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setPage("courses");
                  setMobileOpen(false);
                }
              }}
              placeholder="Search courses, topics, instructors..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pr-4 pl-9 font-body text-sm outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            {[
              ["home", "Home"],
              ["courses", "Courses"],
            ].map(([p, label]) => (
              <button
                key={p}
                onClick={() => {
                  setPage(p);
                  setMobileOpen(false);
                }}
                className={`flex-1 rounded-lg px-3 py-2 font-body text-sm ${
                  page === p
                    ? "bg-slate-100 font-medium text-slate-900"
                    : "bg-slate-50 text-slate-500"
                }`}
              >
                {label}
              </button>
            ))}
            <button className="flex-1 rounded-lg bg-slate-900 px-4 py-2 font-body text-sm font-medium text-white">
              Sign Up Free
            </button>
          </div>
          {enrolled.size > 0 && (
            <div className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-center text-[13px] font-medium text-slate-700">
              <IconBook size={13} /> {enrolled.size} Enrolled
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
