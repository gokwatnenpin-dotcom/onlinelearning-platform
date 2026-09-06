import { fmtNum } from "../data/courses";

export function Stars({ rating, size = 13 }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span
      className="text-amber-600 leading-none"
      style={{ fontSize: size }}
      aria-label={`${rating} out of 5 stars`}
    >
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

export function Badge({ text, color }) {
  return (
    <span
      className="rounded px-2 py-[3px] text-[10px] font-bold tracking-[0.4px] text-white"
      style={{ background: color }}
    >
      {text}
    </span>
  );
}

export { fmtNum };
