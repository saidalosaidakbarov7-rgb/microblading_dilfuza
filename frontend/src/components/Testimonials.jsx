import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import BrowStrokes from "./BrowStrokes";

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-clay mb-4">{t.testimonials.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">{t.testimonials.title}</h2>
          <BrowStrokes className="mt-5" />
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.testimonials.items.map((item) => (
            <article key={item.name} className="bg-white rounded-2xl border border-line p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-beige flex items-center justify-center font-display text-ink text-sm">
                  {initials(item.name)}
                </div>
                <div>
                  <p className="font-display text-base text-ink leading-tight">{item.name}</p>
                  <div className="flex gap-0.5 mt-1" aria-label={`${item.rating}/5`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 font-body text-sm text-espresso/75 leading-relaxed flex-1">“{item.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
