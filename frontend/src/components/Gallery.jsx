import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import BrowStrokes from "./BrowStrokes";
import ImageSlot from "./ImageSlot";

export default function Gallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-clay mb-4">{t.gallery.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">{t.gallery.title}</h2>
          <BrowStrokes className="mt-5" />
          <p className="mt-5 font-body text-espresso/75 leading-relaxed">{t.gallery.subtitle}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.gallery.items.map((item, i) => {
            const n = i + 1;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className="group relative rounded-2xl overflow-hidden border border-line text-left focus-visible:outline-2"
              >
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square overflow-hidden">
                    <ImageSlot
                      src={`/images/gallery-${n}-before.jpg`}
                      alt={`${item.alt} — ${t.gallery.beforeLabel}`}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      rounded="rounded-none"
                    />
                    <span className="absolute bottom-2 left-2 bg-ink/80 text-ivory text-[10px] tracking-widest uppercase px-2 py-1 rounded-full">
                      {t.gallery.beforeLabel}
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <ImageSlot
                      src={`/images/gallery-${n}-after.jpg`}
                      alt={`${item.alt} — ${t.gallery.afterLabel}`}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      rounded="rounded-none"
                    />
                    <span className="absolute bottom-2 right-2 bg-gold/90 text-ivory text-[10px] tracking-widest uppercase px-2 py-1 rounded-full">
                      {t.gallery.afterLabel}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-ivory/90 hover:text-ivory"
            onClick={() => setActive(null)}
            aria-label="Yopish"
          >
            <X size={28} />
          </button>
          <div
            className="grid grid-cols-2 gap-3 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {["before", "after"].map((k) => {
              const idx = t.gallery.items.findIndex((g) => g.id === active.id) + 1;
              return (
                <div key={k} className="relative rounded-xl overflow-hidden">
                  <ImageSlot
                    src={`/images/gallery-${idx}-${k}.jpg`}
                    alt={`${active.alt} — ${k}`}
                    className="w-full aspect-square"
                    rounded="rounded-xl"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 text-ink text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full">
                    {k === "before" ? t.gallery.beforeLabel : t.gallery.afterLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
