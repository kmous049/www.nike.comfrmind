import { useEffect, useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { HeroCarousel } from "@/sections/HeroCarousel";
import { Footer } from "@/sections/Footer";
import { MindProductsPage } from "@/pages/MindProductsPage";

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export const App = () => {
  useScrollReveal();
  const [page, setPage] = useState<"home" | "mind-products">("home");

  return (
    <body className="text-white text-base not-italic normal-nums font-normal accent-auto bg-neutral-900 box-border caret-transparent block tracking-[normal] leading-7 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible overflow-auto border-separate top-0 inset-x-0 font-helvetica_now_text">
      <iframe
        src="https://www.nike.com/static/uxf/guest-session-html/index.html"
        title="Guest Session"
        className="box-border caret-transparent hidden align-baseline border-zinc-100"
      ></iframe>
      <Navbar onNavigateMind={() => setPage("mind-products")} />
      {page === "home" ? (
        <>
          <HeroCarousel onShopMind={() => setPage("mind-products")} />
          <div className="bg-neutral-800 box-border caret-transparent">
            <div className="box-border caret-transparent">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <MindProductsPage onBack={() => setPage("home")} />
          <div className="bg-neutral-800 box-border caret-transparent">
            <div className="box-border caret-transparent">
              <Footer />
            </div>
          </div>
        </>
      )}
    </body>
  );
};
