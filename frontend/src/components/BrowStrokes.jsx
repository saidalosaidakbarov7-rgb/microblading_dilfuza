// Signature element: a small cluster of tapered curved lines that echo the
// hair-stroke technique of microblading itself. Used as a section marker,
// underline and divider throughout the site instead of generic icons/numbers.

export default function BrowStrokes({ className = "", color = "#B08D57", animate = true }) {
  return (
    <svg
      className={`${animate ? "stroke-draw" : ""} ${className}`}
      width="72"
      height="20"
      viewBox="0 0 72 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 16C10 8 14 6 20 4" stroke={color} strokeWidth="1.4" strokeLinecap="round" pathLength="1" />
      <path d="M14 18C22 10 27 7 34 4" stroke={color} strokeWidth="1.4" strokeLinecap="round" pathLength="1" />
      <path d="M28 17C37 9 43 6 51 3" stroke={color} strokeWidth="1.4" strokeLinecap="round" pathLength="1" />
      <path d="M44 18C52 11 58 8 70 5" stroke={color} strokeWidth="1.4" strokeLinecap="round" pathLength="1" />
    </svg>
  );
}
