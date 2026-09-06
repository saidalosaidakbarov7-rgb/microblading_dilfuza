import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = [
  ["home", "#top"],
  ["about", "#about"],
  ["services", "#services"],
  ["pricing", "#pricing"],
  ["gallery", "#gallery"],
  ["faq", "#faq"],
  ["contact", "#contact"],
];

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        id="top"
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#3B2A20]/10 bg-[#FAF6F0]/90 shadow-[0_8px_30px_rgba(59,42,32,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-[82px] items-center justify-between">

          {/* LOGO */}
          <a
            href="#top"
            className="group relative flex flex-col leading-none"
            onClick={closeMenu}
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.42em] text-[#9A7650] transition-colors group-hover:text-[#B08D57]">
              {t.header.brandTop}
            </span>

            <span className="mt-1 font-display text-[21px] font-semibold tracking-tight text-[#3B2A20]">
              {t.header.brandBottom}
            </span>

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#B08D57] transition-all duration-300 group-hover:w-full" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="group relative py-2 text-[12px] font-medium tracking-wide text-[#5D493C]/75 transition-colors hover:text-[#3B2A20]"
              >
                {t.nav[key]}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B08D57] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />

            <a
              href="#booking"
              className="group flex items-center gap-2 rounded-full bg-[#3B2A20] px-5 py-3 text-[12px] font-semibold tracking-wide text-[#FAF6F0] shadow-md shadow-[#3B2A20]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#513B2D] hover:shadow-lg"
            >
              {t.nav.book}

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3B2A20]/10 bg-white/50 text-[#3B2A20] backdrop-blur-md transition hover:bg-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
          >
            {open ? <X size={21} strokeWidth={1.7} /> : <Menu size={21} strokeWidth={1.7} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden border-t border-[#3B2A20]/10 bg-[#FAF6F0]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container-page flex flex-col py-5">
            {NAV_ITEMS.map(([key, href], index) => (
              <a
                key={key}
                href={href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#3B2A20]/8 py-4 text-[14px] text-[#3B2A20]"
              >
                <span>{t.nav[key]}</span>

                <ArrowUpRight
                  size={15}
                  className="text-[#9A7650]"
                />
              </a>
            ))}

            <div className="flex items-center justify-between pt-5">
              <LanguageSwitcher />

              <a
                href="#booking"
                onClick={closeMenu}
                className="rounded-full bg-[#3B2A20] px-5 py-3 text-[12px] font-semibold text-[#FAF6F0]"
              >
                {t.nav.book}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}