import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import BrowStrokes from "./BrowStrokes";

export default function Pricing() {
  const { t } = useLanguage();
  const [active, setActive] = useState("all");

  const items = t.pricing.items.filter((i) => active === "all" || i.category === active);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-beige/40">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-clay mb-4">{t.pricing.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">{t.pricing.title}</h2>
          <BrowStrokes className="mt-5" />
          <p className="mt-5 font-body text-espresso/75 leading-relaxed">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {t.pricing.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium border transition-colors ${
                active === f.id
                  ? "bg-ink text-ivory border-ink"
                  : "bg-transparent text-espresso/75 border-line hover:border-espresso/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-line overflow-hidden">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center justify-between gap-4 px-6 py-5 ${
                idx !== items.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="font-body text-espresso/85">{item.name}</span>
              <span className="font-display text-lg text-clay whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 font-body text-xs text-espresso/55">{t.pricing.note}</p>
      </div>
    </section>
  );
}
