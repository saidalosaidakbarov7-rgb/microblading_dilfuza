import { useLanguage } from "../context/LanguageContext";
import BrowStrokes from "./BrowStrokes";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FAF6F0] pt-28 pb-16 md:pt-32 md:pb-20"
    >
      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#E8D8C3]/40 blur-3xl" />
      <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-[#D9C2A7]/20 blur-3xl" />

      <div className="container-page relative grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

        {/* LEFT */}
        <div className="relative z-10 animate-fadeUp">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B08D57]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9A7650]">
              {t.hero.eyebrow}
            </p>
          </div>

          <h1 className="font-display text-[3.2rem] leading-[0.95] tracking-[-0.02em] text-[#3B2A20] sm:text-6xl lg:text-[5.2rem]">
            {t.hero.title}
            <br />
            <span className="italic font-normal text-[#9A7650]">
              {t.hero.titleAccent}
            </span>
          </h1>

          <BrowStrokes className="mt-7" />

          <p className="mt-7 max-w-lg text-[15px] leading-7 text-[#5D493C]/80 sm:text-base">
            {t.hero.subtitle}
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3B2A20] px-7 py-4 text-sm font-semibold tracking-wide text-[#FAF6F0] shadow-lg shadow-[#3B2A20]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#513B2D] hover:shadow-xl"
            >
              {t.hero.ctaPrimary}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-[#3B2A20]/20 bg-white/40 px-7 py-4 text-sm font-semibold tracking-wide text-[#3B2A20] backdrop-blur-sm transition-all duration-300 hover:border-[#B08D57] hover:bg-white"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex max-w-lg border-t border-[#3B2A20]/10 pt-7">
            {t.hero.stats.map((s, index) => (
              <div
                key={s.label}
                className={`flex-1 ${
                  index !== 0 ? "border-l border-[#3B2A20]/10 pl-5" : ""
                }`}
              >
                <dt className="font-display text-3xl text-[#3B2A20]">
                  {s.value}
                </dt>
                <dd className="mt-1 max-w-[100px] text-[10px] uppercase tracking-wider leading-4 text-[#5D493C]/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[560px] animate-fadeUp [animation-delay:150ms]">

          {/* Decorative frame */}
          <div className="absolute -right-3 -top-3 h-full w-full rounded-[2.5rem] border border-[#B08D57]/40" />

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#E7D7C4] shadow-[0_35px_80px_-30px_rgba(59,42,32,0.45)]">
            <ImageSlot
              src="/images/hero.jpg"
              alt={t.hero.title}
              className="aspect-[4/5] w-full"
              rounded="rounded-[2.5rem]"
            />

            {/* Image overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B1E17]/70 via-[#2B1E17]/10 to-transparent p-7 pt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                {t.hero.imageCaption}
              </p>

              <p className="mt-1 font-display text-2xl text-white">
                Microblading Dilfuza
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#E4D7C8] bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E6D8] text-[#9A7650]">
                ✦
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9A7650]">
                  Premium Beauty
                </p>
                <p className="mt-0.5 font-display text-lg text-[#3B2A20]">
                  Natural Results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#3B2A20]/40 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-8 w-px bg-[#3B2A20]/20" />
      </a>
    </section>
  );
}