import { useState } from "react";
import { Plus } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import BrowStrokes from "./BrowStrokes";

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg sm:text-xl text-ink">{q}</span>
        <Plus
          size={20}
          strokeWidth={1.5}
          className={`shrink-0 text-clay transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="font-body text-espresso/75 leading-relaxed pb-5 pr-8">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-beige/40">
      <div className="container-page grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-clay mb-4">{t.faq.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">{t.faq.title}</h2>
          <BrowStrokes className="mt-5" />
        </div>

        <div>
          {t.faq.items.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
