import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import config from "../data/config";
import BrowStrokes from "./BrowStrokes";
import InstagramGlyph from "./icons/InstagramGlyph";

export default function Instagram() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="rounded-[2rem] bg-ink text-ivory px-8 py-14 sm:px-16 sm:py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:20px_20px]" />

          <InstagramGlyph size={30} className="mx-auto text-gold" />
          <p className="mt-5 font-body text-xs tracking-[0.3em] uppercase text-gold/90">{t.instagram.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">{t.instagram.title}</h2>
          <BrowStrokes className="mt-4 mx-auto" color="#B08D57" />
          <p className="mt-5 font-body text-ivory/75 max-w-md mx-auto leading-relaxed">{t.instagram.text}</p>

          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory text-ink px-6 py-3 text-sm font-semibold tracking-wide hover:bg-gold hover:text-ivory transition-colors"
          >
            {t.instagram.cta}
            <ArrowUpRight size={16} />
          </a>
          <p className="mt-4 font-body text-sm text-ivory/60">{t.instagram.handle}</p>
        </div>
      </div>
    </section>
  );
}
