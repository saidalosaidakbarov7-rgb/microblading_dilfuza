import { useState } from "react";
import { ImageIcon } from "lucide-react";

// Drop-in image component. Point `src` at a file under /public/images/.
// Until that file exists, a clean labeled placeholder is shown instead of a
// broken image icon, and the expected filename is printed so it's obvious
// what to add. Once the real photo is placed at that path, it renders
// automatically -- no code changes needed.
export default function ImageSlot({ src, alt = "", className = "", rounded = "rounded-2xl" }) {
  const [failed, setFailed] = useState(false);
  const filename = src?.split("/").pop();

  if (failed) {
    return (
      <div
        className={`${className} ${rounded} flex flex-col items-center justify-center gap-2 bg-beige/60 border border-line text-clay/70 text-center px-4`}
      >
        <ImageIcon size={28} strokeWidth={1.3} />
        <span className="font-body text-[11px] tracking-wide uppercase text-clay/60">
          {filename || "rasm"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${className} ${rounded} object-cover`}
      onError={() => setFailed(true)}
    />
  );
}
