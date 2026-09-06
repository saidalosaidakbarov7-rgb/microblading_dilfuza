import { Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import BrowStrokes from "./BrowStrokes";

export default function Services() {
  const { t } = useLanguage();
  const { chooseService } = useBooking();

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-clay mb-4">{t.services.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">{t.services.title}</h2>
          <BrowStrokes className="mt-5" />
          <p className="mt-5 font-body text-espresso/75 leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item) => (
            <article
              key={item.id}
              className="group relative bg-white rounded-2xl border border-line p-7 flex flex-col hover:shadow-[0_20px_45px_-30px_rgba(59,42,32,0.45)] hover:border-gold/50 transition-all duration-300"
            >
              <h3 className="font-display text-2xl text-ink">{item.name}</h3>
              <p className="mt-3 font-body text-sm text-espresso/70 leading-relaxed flex-1">{item.description}</p>

              <div className="mt-6 flex items-center gap-2 text-espresso/55 text-xs font-body">
                <Clock size={14} strokeWidth={1.5} />
                <span>{item.duration}</span>
              </div>

              <div className="mt-5 flex items-center justify-between pt-5 border-t border-line">
                <span className="font-display text-xl text-clay">{item.priceLabel}</span>
                <button
                  type="button"
                  onClick={() => chooseService(item.id)}
                  className="text-xs font-semibold tracking-wide text-ink border-b border-transparent hover:border-ink transition-colors"
                >
                  {t.services.bookBtn}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
