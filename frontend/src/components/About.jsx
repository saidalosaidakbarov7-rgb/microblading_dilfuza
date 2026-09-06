import { useLanguage } from "../context/LanguageContext";
import BrowStrokes from "./BrowStrokes";
import ImageSlot from "./ImageSlot";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F2E9DE] py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#D8C2A8]/25 blur-3xl" />

      <div className="container-page relative">

        {/* Top label */}
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-12 bg-[#B08D57]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9A7650]">
            {t.about.eyebrow}
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* IMAGE */}
          <div className="relative mx-auto w-full max-w-[500px]">

            {/* Decorative outer frame */}
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] border border-[#B08D57]/40" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#DCCAB6] shadow-[0_35px_70px_-30px_rgba(59,42,32,0.4)]">
              <ImageSlot
                src="/images/about.jpg"
                alt={t.about.title}
                className="aspect-[4/5] w-full"
                rounded="rounded-[2.5rem]"
              />

              {/* Image gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B1E17]/65 to-transparent p-7 pt-32">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                  Microblading Artist
                </p>

                <p className="mt-1 font-display text-3xl text-white">
                  Dilfuza
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-[#E2D4C3] bg-[#FAF6F0]/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8D8C3] text-[#9A7650]">
                  <Sparkles size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9A7650]">
                    Beauty Artist
                  </p>

                  <p className="mt-0.5 font-display text-lg text-[#3B2A20]">
                    Natural Beauty
                  </p>
                </div>
              </div>
            </div>

            {/* Small vertical text */}
            <div className="absolute -left-12 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#9A7650]/70">
                Microblading Dilfuza
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9A7650]">
              About the artist
            </p>

            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] tracking-tight text-[#3B2A20] sm:text-6xl">
              {t.about.title}
            </h2>

            <BrowStrokes className="mt-6" />

            {/* Paragraphs */}
            <div className="mt-7 max-w-xl space-y-4">
              {t.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-7 text-[#5D493C]/80"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* VALUES */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {t.about.points.slice(0, 3).map((point, index) => (
                <div
                  key={point.title}
                  className="group border-t border-[#3B2A20]/15 pt-4 transition-colors hover:border-[#B08D57]"
                >
                  <span className="font-display text-sm text-[#B08D57]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 font-display text-xl text-[#3B2A20]">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#5D493C]/65">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 rounded-full bg-[#3B2A20] px-6 py-3.5 text-sm font-semibold text-[#FAF6F0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#513B2D] hover:shadow-lg"
              >
                {t.nav.book}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#gallery"
                className="text-sm font-medium text-[#5D493C] underline decoration-[#B08D57]/50 underline-offset-4 transition-colors hover:text-[#9A7650]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}