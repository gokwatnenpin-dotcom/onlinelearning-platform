import { fmtNum } from "../data/courses";
import { IconStar } from "./icons";

export function Stars({ rating, size = 13 }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < full) {
      stars.push(<IconStar key={i} size={size} filled />);
    } else if (i === full && half) {
      // Half star: gray outline with black left half
      stars.push(
        <span
          key={i}
          className="relative inline-block"
          style={{ width: size, height: size }}
        >
          <span className="absolute inset-0 text-slate-300">
            <IconStar size={size} filled={false} />
          </span>
          <span
            className="absolute inset-0 overflow-hidden text-slate-900"
            style={{ width: "50%" }}
          >
            <IconStar size={size} filled />
          </span>
        </span>,
      );
    } else {
      stars.push(
        <span key={i} className="text-slate-300">
          <IconStar size={size} filled={false} />
        </span>,
      );
    }
  }
  return (
    <span
      className="inline-flex items-center gap-[2px] text-slate-900"
      aria-label={`${rating} out of 5 stars`}
    >
      {stars}
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
