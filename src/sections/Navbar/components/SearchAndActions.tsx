import { useState } from "react";

export const SearchAndActions = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="box-border caret-transparent col-start-[span_6] min-h-[auto] min-w-[auto] md:col-start-[span_3]">
      <div className="box-border caret-transparent gap-x-1 flex shrink-0 float-right gap-y-1 items-center">
        <div
          aria-label="Rechercher des articles Nike et Jordan"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto] z-[1]"
        >
          <form className="box-border caret-transparent">
            <div className={`items-center box-border caret-transparent grid justify-end top-0 transition-all duration-300 ${searchFocused ? "grid-cols-[0px_200px_0px]" : "grid-cols-[0px_36px_0px]"} md:grid-cols-[0px_180px_0px] md:top-9`}>
              <div className="box-border caret-transparent col-start-2 min-h-[auto] min-w-[auto]">
                <div className="box-border caret-transparent gap-x-3 flex">
                  <div className={`box-border caret-transparent flex min-h-[auto] min-w-[auto] w-[180px] rounded-3xl transition-colors duration-200 ${searchFocused ? "bg-neutral-700" : "bg-neutral-900"}`}>
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                      <button
                        aria-label="Rechercher"
                        type="button"
                        className="relative appearance-none font-medium items-center bg-neutral-800 caret-transparent flex shrink-0 justify-center leading-6 min-w-9 text-center overflow-hidden py-1.5 rounded-[30px] font-helvetica_now_text_medium md:bg-neutral-900 transition-opacity duration-200 hover:opacity-70 before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border before:rounded-[30px] before:border-separate before:border-solid before:border-transparent before:inset-0 before:font-helvetica_now_text_medium"
                      >
                        <img
                          src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-7.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-6 align-baseline w-6"
                        />
                      </button>
                    </div>
                    <input
                      type="search"
                      placeholder="Rechercher"
                      aria-label="Rechercher des produits"
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      className="appearance-none font-medium bg-neutral-900 box-border caret-white block h-9 leading-6 min-h-[auto] min-w-[auto] invisible w-0 p-0 rounded-3xl font-helvetica_now_text_medium text-white placeholder-neutral-500 focus:outline-none transition-all duration-300 md:visible md:w-full md:pl-0.5 md:pt-[7px] md:pb-[9px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <a
          aria-label="Favoris"
          href="#"
          title="Favoris"
          className="relative font-medium items-center box-border caret-transparent hidden shrink-0 justify-center leading-6 min-h-0 min-w-9 text-center overflow-hidden p-1.5 rounded-[30px] font-helvetica_now_text_medium md:flex md:min-h-[auto] transition-opacity duration-200 hover:opacity-70 before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:rounded-[30px] before:border-separate before:inset-0 before:font-helvetica_now_text_medium"
        >
          <img
            src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-9.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-6 align-baseline w-6 md:block md:h-auto md:w-auto"
          />
        </a>
        <a
          aria-label="Articles du panier: 0"
          href="#"
          title="Articles du panier: 0"
          className="relative font-medium items-center box-border caret-transparent flex shrink-0 justify-center leading-6 min-h-[auto] min-w-9 text-center overflow-hidden p-1.5 rounded-[30px] font-helvetica_now_text_medium transition-opacity duration-200 hover:opacity-70 before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:rounded-[30px] before:border-separate before:inset-0 before:font-helvetica_now_text_medium"
        >
          <div className="box-border caret-transparent h-6 leading-7 min-h-[auto] min-w-[auto] w-6 font-helvetica_neue">
            <img
              src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-10.svg"
              alt="Icon"
              className="box-border caret-transparent inline h-6 align-baseline w-6 md:h-auto md:w-auto"
            />
            <p className="relative text-[9px] box-border caret-transparent h-6 leading-[15.75px] top-[-26px] w-6 left-0"></p>
          </div>
        </a>
      </div>
    </div>
  );
};
