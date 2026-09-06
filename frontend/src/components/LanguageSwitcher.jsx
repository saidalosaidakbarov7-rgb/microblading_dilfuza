import { useLanguage } from "../context/LanguageContext";
import { availableLanguages } from "../data/translations";

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-white/60 p-0.5 ${
        compact ? "text-[11px]" : "text-xs"
      }`}
      role="group"
      aria-label="Til tanlash"
    >
      {availableLanguages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          className={`px-3 py-1 rounded-full font-semibold tracking-wide transition-colors ${
            lang === l.code ? "bg-ink text-ivory" : "text-espresso/70 hover:text-ink"
          }`}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
