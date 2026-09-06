import { Phone, Send, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import config from "../data/config";
import InstagramGlyph from "./icons/InstagramGlyph";

const NAV_ITEMS = [
  ["home", "#top"],
  ["about", "#about"],
  ["services", "#services"],
  ["pricing", "#pricing"],
  ["gallery", "#gallery"],
  ["faq", "#faq"],
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink text-ivory">
      <div className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl">{t.footer.brand}</p>
          <p className="mt-3 font-body text-sm text-ivory/65 leading-relaxed max-w-xs">{t.footer.description}</p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-ivory/25 flex items-center justify-center hover:bg-ivory/10 transition-colors"
            >
              <InstagramGlyph size={16} />
            </a>
            <a
              href={config.telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-full border border-ivory/25 flex items-center justify-center hover:bg-ivory/10 transition-colors"
            >
              <Send size={15} />
            </a>
            <a
              href={`tel:${config.phoneHref}`}
              aria-label={t.footer.phoneLabel}
              className="w-9 h-9 rounded-full border border-ivory/25 flex items-center justify-center hover:bg-ivory/10 transition-colors"
            >
              <Phone size={15} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory/50 mb-5">{t.footer.linksTitle}</p>
          <ul className="space-y-2.5 font-body text-sm text-ivory/75">
            {NAV_ITEMS.map(([key, href]) => (
              <li key={key}>
                <a href={href} className="hover:text-ivory transition-colors">
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory/50 mb-5">{t.footer.contactTitle}</p>
          <ul className="space-y-3 font-body text-sm text-ivory/75">
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-gold shrink-0" />
              <a href={`tel:${config.phoneHref}`} className="hover:text-ivory transition-colors">
                {t.footer.phoneValue}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Send size={15} className="text-gold shrink-0" />
              <a href={config.telegramUrl} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">
                {t.footer.telegramValue}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <InstagramGlyph size={15} className="text-gold shrink-0" />
              <a href={config.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">
                {t.footer.instagramValue}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
              <span>{t.footer.addressValue}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={15} className="text-gold shrink-0 mt-0.5" />
              <span>{t.footer.hoursValue}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-ivory/45">
            © {year} {t.footer.brand}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
