import { useState, useEffect, useRef } from "react";
import { CarouselSlide } from "@/sections/HeroCarousel/components/CarouselSlide";

const slides = [
  {
    title: "LA CHAUSSURE QUI ÉVEILLE TA CONSCIENCE",
    subtitle: "Nike Mind",
    description: "Stimule tes sens et optimise ta routine avant chaque compétition.",
    ctaLabel: "Acheter",
    ctaHref: "#",
  },
  {
    title: "CONNECTE LE CORPS ET LE CERVEAU",
    subtitle: "Nike Mind",
    description: "Une nouvelle façon de connecter le corps et le cerveau dans les moments les plus importants.",
    ctaLabel: "Découvrir",
    ctaHref: "#",
  },
  {
    title: "AMPLIFIE TES SENSATIONS",
    subtitle: "Nike Mind",
    description: "Les autres chaussures atténuent les sensations. La technologie Nike Mind les amplifie.",
    ctaLabel: "En savoir plus",
    ctaHref: "#",
  },
];

type HeroCarouselProps = {
  onShopMind?: () => void;
};

export const HeroCarousel = ({ onShopMind }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [currentSlide]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5500);
  };

  const handlePrev = () => { prevSlide(); resetInterval(); };
  const handleNext = () => { nextSlide(); resetInterval(); };

  return (
    <div className="bg-neutral-800 box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="bg-neutral-800 box-border caret-transparent pb-5 md:pb-14">
          <div className="box-border caret-transparent"></div>
          <div role="main" className="box-border caret-transparent">

            {/* Announcement bar */}
            <div
              className={`relative bg-neutral-900 shadow-[rgb(57,57,59)_0px_-1px_0px_0px_inset] box-border caret-transparent min-h-[58px] text-nowrap overflow-hidden pt-2.5 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
            >
              <div className="box-border caret-transparent text-nowrap">
                <div className="box-border caret-transparent inline-block text-center align-middle w-full">
                  <span className="font-medium box-border caret-transparent block leading-4 align-middle">
                    Voir toutes les nouveautés
                  </span>
                  <div className="text-xs box-border caret-transparent inline-block leading-6">
                    <p className="box-border caret-transparent">
                      <a
                        href="#"
                        className="font-medium box-border caret-transparent underline font-helvetica_now_text_medium link-hover hover:text-neutral-300 transition-colors duration-200"
                      >
                        Acheter
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main hero: CarouselSlide (video) */}
            <div className="relative box-border caret-transparent overflow-x-clip">
              <div className="text-[0px] box-border caret-transparent leading-[0px]">
                <CarouselSlide />
              </div>
            </div>

            {/* Hero text + CTA */}
            <div
              ref={heroRef}
              className={`relative box-border caret-transparent max-w-[1824px] mt-6 md:mt-12 mx-4 md:mx-12 transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                  <div className="relative box-border caret-transparent flex flex-col justify-end text-center">
                    <p
                      className={`font-medium box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] mb-1.5 text-sm md:text-base font-helvetica_now_text_medium transition-all duration-500 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      {slides[currentSlide].subtitle}
                    </p>
                    <h1
                      className={`text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] font-medium box-border caret-transparent min-h-[auto] min-w-[auto] uppercase font-nike_futura_nd md:text-[76px] md:leading-[95px] transition-all duration-600 delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                      key={currentSlide}
                      style={{ animation: "fade-in-up 0.6s ease-out both" }}
                    >
                      {slides[currentSlide].title}
                    </h1>
                    <div
                      className={`text-sm md:text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] mt-2 md:text-xl md:leading-[30px] transition-all duration-500 delay-500 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <p className="text-sm md:text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                        {slides[currentSlide].description}
                      </p>
                    </div>
                    <div
                      className={`box-border caret-transparent min-h-[auto] min-w-[auto] mt-4 flex items-center justify-center gap-3 transition-all duration-500 delay-600 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <button
                        onClick={() => onShopMind?.()}
                        aria-label={slides[currentSlide].ctaLabel}
                        className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent inline-flex justify-center leading-6 max-w-full min-h-[34px] align-top z-[1] overflow-hidden mr-1.5 mt-1.5 px-4 py-1.5 rounded-[30px] font-helvetica_now_text_medium btn-press transition-all duration-200 hover:bg-neutral-100 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:rounded-[30px] before:border-separate before:inset-0 before:font-helvetica_now_text_medium"
                      >
                        {slides[currentSlide].ctaLabel}
                      </button>
                    </div>
                    {/* Carousel dots */}
                    <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { goToSlide(i); resetInterval(); }}
                          aria-label={`Slide ${i + 1}`}
                          className={`rounded-full transition-all duration-300 ${i === currentSlide ? "w-6 h-2 bg-white" : "w-2 h-2 bg-neutral-500 hover:bg-neutral-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second video section */}
            <div className="relative box-border caret-transparent max-w-[1824px] mt-8 md:mt-12 mx-4 md:mx-12">
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                  <div className="relative box-border caret-transparent h-full">
                    <div className="relative box-border caret-transparent grow h-full max-w-full w-full">
                      <div className="relative aspect-[9/16] sm:aspect-[3/4] bg-black box-border caret-transparent w-full overflow-hidden md:aspect-[2.688_/_1]">
                        <div className="absolute box-border caret-transparent h-full w-full flex items-center justify-center">
                          <div className="box-border caret-transparent h-full w-full flex items-center justify-center">
                            <div
                              role="region"
                              aria-label="Lecteur vidéo"
                              className="relative box-border caret-transparent h-full leading-4 max-w-full align-top w-full font-helvetica_neue flex items-center justify-center"
                            >
                              <img
                                src="https://c.animaapp.com/mmmpddetmw6vVN/img/uploaded-asset-1773280186400-0.png"
                                alt="Nike Mind"
                                className="absolute box-border caret-transparent h-full w-full object-cover align-baseline left-0 top-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature cards - mobile */}
            <div className="relative box-border caret-transparent block max-w-[1824px] mt-8 md:mt-12 mx-0 md:hidden md:mx-12 reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                  <div className="box-border caret-transparent w-full">
                    <section className="relative text-transparent box-border">
                      <div className="text-white items-center box-border caret-transparent flex justify-between mb-6 pt-0.5 px-6 md:px-12">
                        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"></div>
                      </div>
                      <ul className="box-border flex list-none overflow-auto pl-4 pb-6 snap-x snap-mandatory scroll-px-4 md:pl-12 md:scroll-px-12 stagger-children gap-3">
                        {[
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/img/uploaded-asset-1773280186400-0.png", text: "Les autres chaussures atténuent les sensations. La technologie Nike Mind les amplifie." },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-2.jpg", text: "En sollicitant les milliers de mécanorécepteurs présents sous les pieds, elle stimule la zone sensorielle du cerveau." },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-3.jpg", text: "Nike Mind : une nouvelle façon de connecter le corps et le cerveau dans les moments les plus importants." },
                        ].map((item, i) => (
                          <li key={i} className="text-white box-border caret-transparent basis-[calc(80vw_-_32px)] flex-col shrink-0 min-h-[auto] min-w-[auto] snap-start md:basis-[calc(33.3333%_-_24px)] md:min-h-0 md:min-w-0">
                            <figure className="relative box-border caret-transparent">
                              <div className="relative aspect-[4/5] box-border caret-transparent w-full overflow-hidden bg-neutral-900 img-zoom-container rounded-sm">
                                <div className="absolute box-border caret-transparent h-full w-full">
                                  <div className="box-border caret-transparent h-full w-full">
                                    <img alt={`Nike Mind slide ${i + 1}`} src={item.src} className="box-border caret-transparent h-full max-w-full object-cover align-baseline w-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="relative box-border caret-transparent text-left mt-3 px-1">
                                <div className="text-sm font-medium box-border caret-transparent leading-5 break-words font-helvetica_now_text_medium">{item.text}</div>
                              </div>
                            </figure>
                          </li>
                        ))}
                        <li className="basis-4 shrink-0" />
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature cards - desktop */}
            <div className="relative box-border caret-transparent hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12 reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                  <div className="box-border caret-transparent w-full">
                    <section className="relative text-transparent box-border">
                      <ul className="box-border flex list-none overflow-auto pl-6 pb-[30px] scroll-px-6 scroll-py-0 md:pl-12 md:scroll-px-12 stagger-children">
                        {[
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/img/uploaded-asset-1773280186400-0.png", text: "Les autres chaussures atténuent les sensations. La technologie Nike Mind les amplifie." },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-2.jpg", text: "En sollicitant les milliers de mécanorécepteurs présents sous les pieds, elle stimule la zone sensorielle du cerveau." },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-3.jpg", text: "Nike Mind : une nouvelle façon de connecter le corps et le cerveau dans les moments les plus importants." },
                        ].map((item, i) => (
                          <li key={i} className="text-white box-border caret-transparent basis-[calc(75%_-_20px)] flex-col shrink-0 min-h-0 min-w-0 snap-start mr-3 md:basis-[calc(33.3333%_-_24px)] md:min-h-[auto] md:min-w-[auto] reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                            <figure className="relative box-border caret-transparent min-w-[300px]">
                              <div className="relative aspect-[0.8_/_1] box-border caret-transparent min-h-[300px] w-full overflow-hidden img-zoom-container">
                                <div className="absolute box-border caret-transparent h-full w-full">
                                  <div className="box-border caret-transparent h-full w-full">
                                    <img alt={`Nike Mind slide ${i + 1}`} src={item.src} className="box-border caret-transparent h-full max-w-full min-h-[300px] object-cover align-baseline w-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="relative box-border caret-transparent flex flex-col h-[calc(100%_-_48px)] justify-start break-words pointer-events-none text-left w-full mt-6 left-0 top-0 md:h-[calc(100%_-_96px)] md:mt-9">
                                <div className="box-border caret-transparent min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]">
                                  <div className="font-medium box-border caret-transparent leading-6 break-words font-helvetica_now_text_medium">{item.text}</div>
                                </div>
                              </div>
                            </figure>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            {/* Second large video section */}
            <div className="relative box-border caret-transparent overflow-x-clip w-full mt-12 reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px]">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
                  <div className="relative box-border caret-transparent h-full">
                    <div className="relative box-border caret-transparent grow h-full max-w-full w-full">
                      <div className="relative aspect-[0.732_/_1] bg-neutral-900 box-border caret-transparent w-full overflow-hidden md:aspect-[2.05714_/_1] img-zoom-container">
                        <div className="absolute box-border caret-transparent h-full w-full">
                          <div className="box-border caret-transparent h-full w-full">
                            <div
                              role="region"
                              aria-label="Lecteur vidéo"
                              className="relative box-border caret-transparent h-full leading-4 max-w-full align-top w-full font-helvetica_neue"
                            >
                              <img
                                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-10.jpg"
                                alt="Nike Mind"
                                className="absolute box-border caret-transparent h-full object-cover align-baseline w-full left-0 top-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Watch button overlay */}
                      <div className="static box-content caret-black h-auto w-auto left-auto top-auto md:absolute md:h-full md:w-full md:left-0 md:top-0">
                        <div className="static box-content caret-black block flex-row h-auto justify-normal pointer-events-auto text-start w-auto left-auto top-auto md:absolute md:flex md:flex-col md:h-[33.3333%] md:justify-end md:break-words md:pointer-events-none md:text-left md:top-[calc(66.6667%_-_48px)] md:w-[calc(100%_-_48px)] md:left-12">
                          <div className="box-content caret-black min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] md:break-words">
                            <div className="static box-content caret-black block pointer-events-auto z-auto md:relative md:inline-block md:break-words md:z-[2]">
                              <button
                                aria-label="Regarder"
                                type="button"
                                className="static text-black font-normal bg-zinc-100 caret-black inline-block text-center mr-0 mt-0 px-1.5 py-px rounded-none font-arial md:relative md:appearance-none md:text-neutral-900 md:font-medium md:items-center md:bg-white md:caret-transparent md:inline-flex md:justify-center md:leading-6 md:max-w-full md:min-h-[34px] md:break-words md:align-top md:z-[1] md:overflow-hidden md:mr-1.5 md:mt-1.5 md:px-4 md:py-1.5 md:rounded-[30px] md:font-helvetica_now_text_medium btn-press transition-all duration-200 hover:bg-neutral-200 md:hover:bg-neutral-100 before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-neutral-900 before:md:block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-medium before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:break-words before:md:pointer-events-auto before:md:absolute before:md:text-center before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:rounded-[30px] before:md:border-separate before:md:inset-0 before:md:font-helvetica_now_text_medium"
                              >
                                Regarder
                                <span className="box-content caret-black inline h-auto min-h-0 min-w-0 w-auto ml-0 md:block md:h-6 md:min-h-[auto] md:min-w-[auto] md:w-5 md:ml-1">
                                  <img
                                    src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-16.svg"
                                    alt="Icon"
                                    className="box-content caret-black block h-auto align-middle w-auto md:inline md:h-6 md:align-baseline md:w-6"
                                  />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide section - desktop */}
            <div className="relative box-border caret-transparent hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12 reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full ml-0 px-1.5 md:w-[66.6667%] md:ml-[16.6667%]">
                  <div className="relative box-border caret-transparent flex flex-col justify-end text-center w-auto mx-0 md:w-9/12 md:mx-auto">
                    <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] min-h-0 min-w-0 font-helvetica_now_display_medium md:min-h-[auto] md:min-w-[auto]">
                      Guide d&#39;utilisation Nike Mind
                    </h2>
                    <div className="text-base box-border caret-transparent leading-6 min-h-0 min-w-0 mt-2 md:text-xl md:leading-[30px] md:min-h-[auto] md:min-w-[auto]">
                      <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                        Les effets secondaires comprennent, sans s&#39;y limiter : clarté d&#39;esprit, actions plus instinctives et disparition totale de l&#39;hésitation.
                      </p>
                    </div>
                    <div className="box-border caret-transparent min-h-0 min-w-0 mt-[18px] md:min-h-[auto] md:min-w-[auto]">
                      <button
                        onClick={() => onShopMind?.()}
                        aria-label="Acheter"
                        className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent inline-flex justify-center leading-6 max-w-full min-h-[34px] align-top z-[1] overflow-hidden mr-1.5 mt-1.5 px-4 py-1.5 rounded-[30px] font-helvetica_now_text_medium btn-press transition-all duration-200 hover:bg-neutral-100 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:rounded-[30px] before:border-separate before:inset-0 before:font-helvetica_now_text_medium"
                      >
                        Acheter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide section - mobile */}
            <div className="relative box-border caret-transparent block max-w-[1824px] mt-8 mx-4 md:hidden md:mx-12 reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                  <div className="relative box-border caret-transparent flex flex-col justify-end text-center">
                    <h2 className="text-2xl font-medium box-border caret-transparent leading-[32.4px] min-h-[auto] min-w-[auto] font-helvetica_now_display_medium md:min-h-0 md:min-w-0">
                      Guide d&#39;utilisation Nike Mind
                    </h2>
                    <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] mt-2 md:text-xl md:leading-[30px] md:min-h-0 md:min-w-0">
                      <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                        Les effets secondaires comprennent, sans s&#39;y limiter : clarté d&#39;esprit, actions plus instinctives et disparition totale de l&#39;hésitation.
                      </p>
                    </div>
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mt-[18px] md:min-h-0 md:min-w-0">
                      <button
                        onClick={() => onShopMind?.()}
                        aria-label="Acheter"
                        className="relative text-neutral-900 font-medium items-center bg-white box-border caret-transparent inline-flex justify-center leading-6 max-w-full min-h-[34px] align-top z-[1] overflow-hidden mr-1.5 mt-1.5 px-4 py-1.5 rounded-[30px] font-helvetica_now_text_medium btn-press transition-all duration-200 hover:bg-neutral-100 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:rounded-[30px] before:border-separate before:inset-0 before:font-helvetica_now_text_medium"
                      >
                        Acheter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nike Mind in nature - mobile */}
            <div className="relative box-border caret-transparent block overflow-x-clip w-full mt-8 md:hidden reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px]">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
                  <div className="box-border caret-transparent w-full">
                    <section className="relative text-transparent box-border">
                      <div className="text-white items-center box-border caret-transparent flex justify-between mb-6 pt-0.5 px-6 md:mb-3 md:px-12">
                        <div className="items-baseline box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] w-full md:flex-row md:min-h-0 md:min-w-0">
                          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0">
                            <h2 className="text-2xl font-medium box-border caret-transparent leading-[32.4px] text-left mx-6 font-helvetica_now_display_medium md:mx-12">
                              Nike Mind dans la nature
                            </h2>
                          </div>
                        </div>
                      </div>
                      <ul className="box-border flex list-none overflow-auto pl-4 pb-6 snap-x snap-mandatory scroll-px-4 md:pl-12 md:scroll-px-12 stagger-children gap-3">
                        {[
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-4.jpg", text: "Georgia Hunter Bell, running" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-5.jpg", text: "Sifan Hassan, running" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-6.jpg", text: "Keely Hodgkinson, running" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-7.jpg", text: "Eduardo Camavinga, football" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-8.jpg", text: "Saquon Barkley, football américain" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-9.jpg", text: "Erling Haaland, football" },
                        ].map((item, i) => (
                          <li key={i} className="text-white box-border caret-transparent basis-[calc(70vw_-_24px)] flex-col shrink-0 min-h-[auto] min-w-[auto] snap-start md:basis-[calc(33.3333%_-_24px)] md:min-h-0 md:min-w-0">
                            <figure className="relative box-border caret-transparent">
                              <div className="relative aspect-[3/4] box-border caret-transparent w-full overflow-hidden bg-neutral-900 img-zoom-container rounded-sm">
                                <img alt={item.text} src={item.src} className="box-border caret-transparent h-full max-w-full object-cover align-baseline w-full" />
                              </div>
                              <div className="relative box-border caret-transparent text-left mt-3 px-1">
                                <div className="text-sm font-medium box-border caret-transparent leading-5 break-words font-helvetica_now_display_medium">{item.text}</div>
                              </div>
                            </figure>
                          </li>
                        ))}
                        <li className="basis-4 shrink-0"></li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            {/* Nike Mind in nature - desktop */}
            <div className="relative box-border caret-transparent hidden overflow-x-clip w-full mt-[84px] md:block reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px]">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
                  <div className="box-border caret-transparent w-full">
                    <section className="relative text-transparent box-border">
                      <div className="text-white items-center box-border caret-transparent flex justify-between mb-6 pt-0.5 px-6 md:mb-3 md:px-12">
                        <div className="items-baseline box-border caret-transparent flex flex-col justify-between min-h-0 min-w-0 w-full md:flex-row md:min-h-[auto] md:min-w-[auto]">
                          <div className="box-border caret-transparent min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
                            <h2 className="text-2xl font-medium box-border caret-transparent leading-[32.4px] text-left mx-6 font-helvetica_now_display_medium md:mx-12">
                              Nike Mind dans la nature
                            </h2>
                          </div>
                        </div>
                      </div>
                      <ul className="box-border flex list-none overflow-auto pl-6 pb-[30px] scroll-px-6 scroll-py-0 md:pl-12 md:scroll-px-12 stagger-children">
                        {[
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-4.jpg", text: "Georgia Hunter Bell, running" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-5.jpg", text: "Sifan Hassan, running" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-6.jpg", text: "Keely Hodgkinson, running" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-7.jpg", text: "Eduardo Camavinga, football" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-8.jpg", text: "Saquon Barkley, football américain" },
                          { src: "https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-9.jpg", text: "Erling Haaland, football" },
                        ].map((item, i) => (
                          <li key={i} className="text-white box-border caret-transparent basis-[calc(75%_-_20px)] flex-col shrink-0 min-h-0 min-w-0 snap-start mr-3 md:basis-[calc(33.3333%_-_24px)] md:min-h-[auto] md:min-w-[auto]" style={{ transitionDelay: `${i * 80}ms` }}>
                            <figure className="relative box-border caret-transparent min-w-[300px]">
                              <div className="relative aspect-[0.8_/_1] box-border caret-transparent min-h-[300px] w-full overflow-hidden img-zoom-container">
                                <div className="absolute box-border caret-transparent h-full w-full">
                                  <div className="box-border caret-transparent h-full w-full">
                                    <img alt={item.text} src={item.src} className="box-border caret-transparent h-full max-w-full min-h-[300px] object-cover align-baseline w-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="relative box-border caret-transparent flex flex-col h-[calc(100%_-_48px)] justify-start break-words pointer-events-none text-left w-[calc(100%_-_48px)] mt-6 left-6 top-0 md:h-[calc(100%_-_96px)] md:mt-9 md:left-12">
                                <div className="box-border caret-transparent min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]">
                                  <div className="text-xl font-medium box-border caret-transparent leading-[30px] break-words font-helvetica_now_display_medium">{item.text}</div>
                                </div>
                              </div>
                            </figure>
                          </li>
                        ))}
                        <li className="text-white box-border caret-transparent basis-6 flex-col shrink-0 min-h-0 min-w-0 snap-start md:basis-12 md:min-h-[auto] md:min-w-[auto]"></li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            {/* Athlete quote section - desktop */}
            <div className="relative box-border caret-transparent hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12 reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full ml-0 px-1.5 md:w-[66.6667%] md:ml-[16.6667%]">
                  <div className="relative box-border caret-transparent flex flex-col justify-end text-center w-auto mx-0 md:w-9/12 md:mx-auto">
                    <h2 className="text-[32px] font-medium box-border caret-transparent leading-[38.4px] min-h-0 min-w-0 font-helvetica_now_display_medium md:min-h-[auto] md:min-w-[auto]">
                      Partie intégrante d&#39;une routine équilibrée avant chaque compétition
                    </h2>
                    <div className="text-base box-border caret-transparent leading-6 min-h-0 min-w-0 mt-2 md:text-xl md:leading-[30px] md:min-h-[auto] md:min-w-[auto]">
                      <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                        Sollicite tes sens avec Nike Mind. Cette innovation t&#39;aide à faire le vide dans ta tête, à te connecter à ce qui t&#39;entoure et à t&#39;ancrer dans l&#39;instant présent.
                        <br /><br />
                        Ce que les athlètes en disent :
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Large athlete image - Haaland desktop */}
            <div className="relative box-border caret-transparent hidden overflow-x-clip w-full mt-[84px] md:block reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px]">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
                  <figure className="relative box-border caret-transparent">
                    <div className="relative aspect-[1.6_/_1] box-border caret-transparent leading-[0px] min-h-[300px] w-full overflow-hidden img-zoom-container">
                      <div className="absolute box-border caret-transparent h-full w-full">
                        <img alt="Nike Mind" src="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-10.jpg" className="box-border caret-transparent h-full max-w-full min-h-[300px] object-cover align-baseline w-full" />
                      </div>
                    </div>
                    <figcaption className="absolute box-border caret-transparent flex flex-col h-[33.3333%] justify-end break-words pointer-events-none text-right top-[calc(66.6667%_-_24px)] w-[calc(100%_-_48px)] inset-x-6 md:top-[calc(66.6667%_-_48px)] md:left-auto md:right-12">
                      <div className="box-border caret-transparent min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]">
                        <h3 className="text-xl font-medium box-border caret-transparent leading-[30px] break-words font-helvetica_now_display_medium">
                          « Au foot, tout est une question de concentration et d&#39;état d&#39;esprit. »
                        </h3>
                        <p className="box-border caret-transparent leading-6 break-words mt-2">Erling Haaland, footballeur</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* Athlete quotes - mobile */}
            <div className="reveal block md:hidden">
              <div className="relative box-border caret-transparent block max-w-[1824px] mt-8 mx-4 md:hidden md:mx-12">
                <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                  <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                    <div className="relative box-border caret-transparent flex flex-col justify-end text-center">
                      <h2 className="text-2xl font-medium box-border caret-transparent leading-[32.4px] min-h-[auto] min-w-[auto] font-helvetica_now_display_medium md:min-h-0 md:min-w-0">
                        Partie intégrante d&#39;une routine équilibrée avant chaque compétition
                      </h2>
                      <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] mt-2 md:text-xl md:leading-[30px] md:min-h-0 md:min-w-0">
                        <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                          Sollicite tes sens avec Nike Mind. Cette innovation t&#39;aide à faire le vide dans ta tête.
                          <br /><br />
                          Ce que les athlètes en disent :
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {[
                { text: "« Au foot, tout est une question de concentration et d'état d'esprit. »", author: "Erling Haaland", role: "Footballeur" },
                { text: "« Le mental, c'est ce qui te fait gagner le match avant même d'entrer sur le terrain ou sur le ring. »", author: "Claire Prince", role: "Runneuse, boxeuse, coach Nike" },
                { text: "« Il faut maintenir une concentration et une discipline totales pendant les matchs. »", author: "Shubman Gill", role: "Joueur de cricket" },
              ].map((quote, i) => (
                <div key={i} className="relative box-border caret-transparent block max-w-[1824px] mt-8 mx-4 md:hidden md:mx-12 reveal">
                  <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                    <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                      <div className="relative box-border caret-transparent flex flex-col justify-end text-center">
                        <h2 className="text-xl font-medium box-border caret-transparent leading-[28px] min-h-[auto] min-w-[auto] font-helvetica_now_display_medium md:min-h-0 md:min-w-0">{quote.text}</h2>
                        <div className="text-neutral-500 box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] mt-2 md:min-h-0 md:min-w-0">
                          <p className="box-border caret-transparent">{quote.author}<br />{quote.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Claire Prince image - desktop */}
            <div className="relative box-border caret-transparent hidden max-w-[1824px] mt-[84px] mx-6 md:block md:mx-12 reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px] -mx-1.5">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full px-1.5">
                  <figure className="relative box-border caret-transparent">
                    <div className="relative aspect-[2.20517_/_1] box-border caret-transparent leading-[0px] min-h-[300px] w-full overflow-hidden img-zoom-container">
                      <div className="absolute box-border caret-transparent h-full w-full">
                        <img alt="Nike Mind" src="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-11.jpg" className="box-border caret-transparent h-full max-w-full min-h-[300px] object-cover align-baseline w-full" />
                      </div>
                    </div>
                    <figcaption className="absolute box-border caret-transparent flex flex-col h-[calc(100%_-_48px)] justify-start break-words pointer-events-none text-left w-9/12 left-6 top-6 md:h-[calc(100%_-_96px)] md:left-12 md:top-12">
                      <div className="box-border caret-transparent min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]">
                        <h3 className="text-xl font-medium box-border caret-transparent leading-[30px] break-words font-helvetica_now_display_medium">
                          « Le mental, c&#39;est ce qui te fait gagner le match avant même d&#39;entrer sur le terrain ou sur le ring. »
                        </h3>
                        <p className="box-border caret-transparent leading-6 break-words mt-2">Claire Prince, runneuse, boxeuse, coach Nike</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* Shubman image - desktop */}
            <div className="relative box-border caret-transparent hidden overflow-x-clip w-full mt-[84px] md:block reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px]">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
                  <figure className="relative box-border caret-transparent">
                    <div className="relative aspect-[1.6_/_1] box-border caret-transparent leading-[0px] min-h-[300px] w-full overflow-hidden img-zoom-container">
                      <div className="absolute box-border caret-transparent h-full w-full">
                        <img alt="Nike Mind" src="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind-12.jpg" className="box-border caret-transparent h-full max-w-full min-h-[300px] object-cover align-baseline w-full" />
                      </div>
                    </div>
                    <figcaption className="absolute box-border caret-transparent flex flex-col h-[calc(100%_-_48px)] justify-start break-words pointer-events-none text-right w-[calc(100%_-_48px)] top-6 inset-x-6 md:h-[calc(100%_-_96px)] md:left-auto md:right-12 md:top-12">
                      <div className="box-border caret-transparent min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]">
                        <h3 className="text-xl font-medium box-border caret-transparent leading-[30px] break-words font-helvetica_now_display_medium">
                          « Il faut maintenir une concentration et une discipline totales pendant les matchs. »
                        </h3>
                        <p className="box-border caret-transparent leading-6 break-words mt-2">Shubman Gill, joueur de cricket</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* GIF / final video */}
            <div className="relative box-border caret-transparent overflow-x-clip w-full mt-[84px] reveal">
              <div className="text-[0px] box-border caret-transparent leading-[0px]">
                <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
                  <figure className="relative box-border caret-transparent">
                    <div className="relative aspect-[1.02693_/_1] box-border caret-transparent leading-[0px] min-h-[300px] w-full overflow-hidden md:aspect-[7.2_/_1]">
                      <div className="absolute box-border caret-transparent h-full w-full">
                        <div className="box-border caret-transparent h-full w-full">
                          <video
                            autoPlay
                            loop
                            playsInline
                            src="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind.gif"
                            className="box-border caret-transparent h-full min-h-[300px] object-cover align-baseline w-full"
                          ></video>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

          </div>
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
