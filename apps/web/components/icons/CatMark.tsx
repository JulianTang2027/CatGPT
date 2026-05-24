import type { SVGProps } from "react";

export function CatMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M4 5l4 4h8l4-4v9a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7V5z" />
      <circle cx="9" cy="13" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 16l-1.2 1.2M12 16l1.2 1.2" />
    </svg>
  );
}
