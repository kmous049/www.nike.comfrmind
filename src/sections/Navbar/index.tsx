import { useState, useEffect } from "react";
import { TopNav } from "@/sections/Navbar/components/TopNav";
import { Logo } from "@/components/Logo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { SearchAndActions } from "@/sections/Navbar/components/SearchAndActions";

type NavbarProps = {
  onNavigateMind?: () => void;
};

export const Navbar = ({ onNavigateMind }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileLinks = [
    { href: "#nouveau", label: "Nouveau" },
    { href: "#homme", label: "Homme" },
    { href: "#femme", label: "Femme" },
    { href: "#enfant", label: "Enfant" },
    { href: "#sport", label: "Sport" },
    { href: "#nikeskims", label: "NikeSKIMS" },
  ];

  const handleMindClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigateMind?.();
  };

  return (
    <div
      className={`bg-neutral-800 box-border caret-transparent sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.5)]" : ""}`}
    >
      <div className="relative box-border caret-transparent z-20">
        <nav
          aria-label="Navigation générale"
          className="box-border caret-transparent h-[60px] m-auto md:h-24"
        >
          <a
            href="#skip-to-content"
            className="absolute text-sm font-medium bg-neutral-800 box-border caret-transparent block h-[26px] leading-[26px] min-h-[26px] translate-x-[-20185.9px] z-10 ml-2.5 mt-[5px] px-2.5 left-0 font-helvetica_now_text_medium"
          >
            Passer au contenu principal
          </a>
          <TopNav />

          {/* Main nav bar */}
          <header className="relative bg-neutral-800 box-border caret-transparent z-[2] animate-slide-down">
            <div className="relative box-border caret-transparent">
              <div className="items-center box-border caret-transparent grid grid-cols-[repeat(12,minmax(0px,1fr))] max-w-[1920px] mx-auto px-6 md:px-12">
                <Logo />
                  <div className="box-border caret-transparent col-start-[span_1] h-[60px] min-h-[auto] min-w-[auto] md:col-start-[span_7]">
                  <DesktopMenu onNavigateMind={onNavigateMind} />
                </div>
                <div className="box-border caret-transparent col-start-[span_6] min-h-[auto] min-w-[auto] md:col-start-[span_3] flex items-center justify-end">
                  <SearchAndActions />
                  {/* Mobile hamburger */}
                  <button
                    className="md:hidden ml-2 flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none transition-opacity hover:opacity-70"
                    aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    <span
                      className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                    />
                    <span
                      className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
                    />
                    <span
                      className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </header>
        </nav>

        {/* Mobile menu drawer */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-[100] md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <nav
              className="absolute top-0 right-0 w-72 h-full bg-neutral-900 flex flex-col py-8 px-6 animate-mobile-menu-in shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:opacity-70 transition-opacity"
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="mb-8 mt-4">
                <img
                  src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-5.svg"
                  alt="Nike"
                  className="w-12 h-12"
                />
              </div>
              <ul className="flex flex-col gap-1">
                {mobileLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-2 text-white font-medium text-lg font-helvetica_now_text_medium border-b border-neutral-800 hover:text-neutral-300 transition-colors duration-200 link-hover"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    onClick={handleMindClick}
                    className="block py-3 px-2 text-orange-400 font-medium text-lg font-helvetica_now_text_medium border-b border-neutral-800 hover:text-orange-300 transition-colors duration-200"
                    style={{ animationDelay: `${mobileLinks.length * 50}ms` }}
                  >
                    Mind Game ✦
                  </a>
                </li>
              </ul>
              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a href="#" className="text-neutral-400 text-sm hover:text-white transition-colors">S'identifier</a>
                <a href="#" className="text-neutral-400 text-sm hover:text-white transition-colors">Rejoins-nous</a>
                <a href="#" className="text-neutral-400 text-sm hover:text-white transition-colors">Trouver un magasin</a>
              </div>
            </nav>
          </div>
        )}

        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
      </div>
    </div>
  );
};
