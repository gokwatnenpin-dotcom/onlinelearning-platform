// Monochrome (black) SVG icon set — no emojis, no color.
// All icons use currentColor so callers control black/white via text color.
function base({ size = 16, children, filled = false, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSearch({ size = 16, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
      </>
    ),
  });
}

export function IconClock({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 13.5" />
      </>
    ),
  });
}

export function IconBook({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  });
}

export function IconMedal({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <circle cx="12" cy="14" r="4" />
        <path d="M9 10 6 2h4l2 4 2-4h4l-3 8" />
      </>
    ),
  });
}

export function IconUsers({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  });
}

export function IconUser({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  });
}

export function IconBuilding({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <line x1="9" y1="6" x2="10" y2="6" />
        <line x1="14" y1="6" x2="15" y2="6" />
        <line x1="9" y1="10" x2="10" y2="10" />
        <line x1="14" y1="10" x2="15" y2="10" />
        <line x1="9" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="15" y2="14" />
        <line x1="10" y1="22" x2="10" y2="18" />
        <line x1="14" y1="22" x2="14" y2="18" />
      </>
    ),
  });
}

export function IconHeart({ size = 16, filled = false, ...props }) {
  if (filled) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        <path d="M12 21s-7.5-4.9-10-9.5C.4 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.3 2.6h4c.9-1.5 2.3-2.6 4.3-2.6 3.4 0 5.3 3.6 3.7 6.5C19.5 16.1 12 21 12 21z" transform="scale(0.95) translate(0.6,0.5)" />
      </svg>
    );
  }
  return base({
    size,
    ...props,
    children: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    ),
  });
}

export function IconMenu({ size = 20, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    ),
  });
}

export function IconBolt({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

export function IconStar({ size = 13, filled = true, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
    </svg>
  );
}

export function IconCheck({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: <polyline points="20 6 9 17 4 12" />,
  });
}

export function IconMobile({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </>
    ),
  });
}

export function IconInfinity({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <path d="M18.2 8.5a3.5 3.5 0 0 1 0 7c-2.8 0-4.1-3.5-6.2-3.5s-3.4 3.5-6.2 3.5a3.5 3.5 0 0 1 0-7c2.8 0 4.1 3.5 6.2 3.5s3.4-3.5 6.2-3.5z" />
    ),
  });
}

export function IconDownload({ size = 14, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </>
    ),
  });
}

// Category icons (all monochrome)
export function IconGrid({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </>
    ),
  });
}

export function IconMonitor({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  });
}

export function IconPalette({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="8.5" cy="10.5" r="1" />
        <circle cx="12" cy="7.5" r="1" />
        <circle cx="15.5" cy="10.5" r="1" />
        <path d="M12 21a9 9 0 0 1 0-18 9 9 0 0 1 9 9c0 2-1.5 3-3 3h-2a2 2 0 0 0-1.5 3.3c.5.6.2 2.7-2.5 2.7z" />
      </>
    ),
  });
}

export function IconGear({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </>
    ),
  });
}

export function IconGlobe({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
      </>
    ),
  });
}

export function IconLayers({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
      </>
    ),
  });
}

export function IconChart({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </>
    ),
  });
}

export function IconWrench({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  });
}

export function IconCpu({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9.5" y="9.5" width="5" height="5" />
        <line x1="9" y1="2" x2="9" y2="5" />
        <line x1="15" y1="2" x2="15" y2="5" />
        <line x1="9" y1="19" x2="9" y2="22" />
        <line x1="15" y1="19" x2="15" y2="22" />
        <line x1="2" y1="9" x2="5" y2="9" />
        <line x1="2" y1="15" x2="5" y2="15" />
        <line x1="19" y1="9" x2="22" y2="9" />
        <line x1="19" y1="15" x2="22" y2="15" />
      </>
    ),
  });
}

export function IconCloud({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <path d="M18 10h-1.3A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    ),
  });
}

export function IconTool({ size = 26, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <path d="M4 17l6-6-1-4-4-1-1 4-2 2v5h2z" />
        <path d="M12 5l3 3 5-5-3-1-5 3z" />
        <line x1="11" y1="12" x2="20" y2="21" />
      </>
    ),
  });
}

// Maps a category name to its monochrome icon
export function CategoryIcon({ category, size = 26, className = "" }) {
  const cls = `text-slate-900 ${className}`;
  switch (category) {
    case "All":
      return (
        <span className={cls}>
          <IconGrid size={size} />
        </span>
      );
    case "Computer Science":
      return (
        <span className={cls}>
          <IconMonitor size={size} />
        </span>
      );
    case "Frontend":
      return (
        <span className={cls}>
          <IconPalette size={size} />
        </span>
      );
    case "Backend":
      return (
        <span className={cls}>
          <IconGear size={size} />
        </span>
      );
    case "Full Stack":
      return (
        <span className={cls}>
          <IconGlobe size={size} />
        </span>
      );
    case "System Design":
      return (
        <span className={cls}>
          <IconLayers size={size} />
        </span>
      );
    case "DSA":
      return (
        <span className={cls}>
          <IconChart size={size} />
        </span>
      );
    case "DevOps":
      return (
        <span className={cls}>
          <IconWrench size={size} />
        </span>
      );
    case "AI & ML":
      return (
        <span className={cls}>
          <IconCpu size={size} />
        </span>
      );
    case "Cloud":
      return (
        <span className={cls}>
          <IconCloud size={size} />
        </span>
      );
    case "Tools":
      return (
        <span className={cls}>
          <IconTool size={size} />
        </span>
      );
    default:
      return (
        <span className={cls}>
          <IconGrid size={size} />
        </span>
      );
  }
}

// Social icons (monochrome)
export function IconXLogo({ size = 15, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.9L18.9 2zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20z" />
    </svg>
  );
}

export function IconLinkedin({ size = 15, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4z" />
    </svg>
  );
}

export function IconWeb({ size = 15, ...props }) {
  return base({
    size,
    ...props,
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
      </>
    ),
  });
}
