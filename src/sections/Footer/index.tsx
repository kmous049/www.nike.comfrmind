import { FooterAccordion } from "@/sections/Footer/components/FooterAccordion";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-neutral-800 box-border caret-transparent max-w-[1920px] min-h-[300px] w-full m-auto px-6 py-12 md:px-12"
    >
      <div className="bg-neutral-700 box-border caret-transparent shrink-0 h-px mb-9 md:mb-[60px]"></div>
      <div className="items-start self-stretch box-border caret-transparent gap-x-[normal] flex flex-col gap-y-[normal] md:self-auto md:gap-x-3 md:flex-row md:gap-y-3">
        <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0 md:w-auto">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <FooterAccordion
                title="Ressources"
                iconUrl="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-20.svg"
                iconClassName="-scale-100 md:transform-none"
                contentClassName="pb-[30px]"
                links={[
                  {
                    href: "https://www.nike.com/fr/cartes-cadeaux",
                    text: "Cartes cadeaux",
                  },
                  {
                    href: "https://nikegiftcardsforbusiness.com/",
                    text: "Cartes cadeaux d'entreprise",
                  },
                  {
                    href: "https://www.nike.com/fr/retail/",
                    text: "Trouver un magasin",
                  },
                  {
                    href: "https://www.nike.com/fr/articles",
                    text: "Nike Journal",
                  },
                  {
                    href: "https://www.nike.com/fr/adhesion",
                    text: "Devenir membre",
                  },
                  { href: "#site-feedback", text: "Commentaires" },
                  {
                    href: "https://www.nike.com/fr/code-promo",
                    text: "Codes promo",
                  },
                  {
                    href: "https://www.nike.com/fr/conseil-produit",
                    text: "Conseil produit",
                  },
                  {
                    href: "https://www.nike.com/fr/running/recherche-de-chaussures",
                    text: "Running Shoe Finder",
                  },
                ]}
              />
              <FooterAccordion
                title="Aide"
                iconUrl="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-21.svg"
                links={[
                  { href: "https://www.nike.com/fr/help", text: "Aide" },
                  {
                    href: "https://www.nike.com/fr/orders/details",
                    text: "Statut de la commande",
                  },
                  {
                    href: "https://www.nike.com/fr/help/a/expedition-livraison-ue",
                    text: "Expédition et livraison",
                  },
                  {
                    href: "https://www.nike.com/fr/help/a/conditions-de-retour-ue",
                    text: "Retours",
                  },
                  {
                    href: "https://www.nike.com/fr/help/a/modes-de-paiement-ue",
                    text: "Modes de paiement",
                  },
                  {
                    href: "https://www.nike.com/fr/help/#contact",
                    text: "Nous contacter",
                  },
                  { href: "https://www.nike.com/fr/help/a/avis", text: "Avis" },
                  {
                    href: "https://www.nike.com/fr/help/a/appliquer-promo-ue",
                    text: "Aide - Codes promo Nike",
                  },
                ]}
              />
              <FooterAccordion
                title="Entreprise"
                iconUrl="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-21.svg"
                links={[
                  { href: "https://about.nike.com/", text: "À propos de Nike" },
                  { href: "https://news.nike.com/", text: "Actualités" },
                  { href: "https://jobs.nike.com/", text: "Carrières" },
                  {
                    href: "https://investors.nike.com/",
                    text: "Investisseurs",
                  },
                  {
                    href: "https://www.nike.com/fr/developpement-durable",
                    text: "Développement durable",
                  },
                  {
                    href: "https://www.nike.com/fr/accessibility/statement",
                    text: "Accessibilité: partiellement conforme",
                  },
                  { href: "https://www.nike.com/fr/mission", text: "Mission" },
                  {
                    href: "https://www.nike.com/fr/coaching",
                    text: "Nike Coaching",
                  },
                  {
                    href: "https://secure.ethicspoint.com/domain/media/fr/gui/56821/index.html",
                    text: "Signaler un problème",
                  },
                ]}
              />
              <FooterAccordion
                title="Promotions liées à la communauté"
                iconUrl="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-21.svg"
                links={[
                  {
                    href: "https://services.sheerid.com/verify/68d15e386bcf0b059b3b1708/?locale=fr",
                    text: "Étudiant·e",
                  },
                  {
                    href: "https://urldefense.com/v3/__https://services.sheerid.com/verify/68dcfa47c3f2fd1cd3069a9c/?locale=fr__;!!KLCbKzk!nTvDkRbY-BbSpoWsFhAQdmMrehEzU3loDux4_exRVjO9--Ik_EbQNJ3bX2gkEwR7F9cVVROFKqLxE4B8uW6bnx7H5y7HwQ$",
                    text: "Prof",
                  },
                  {
                    href: "https://urldefense.com/v3/__https://services.sheerid.com/verify/68d55da9273c5b3a03a5aa8e/?locale=fr__;!!KLCbKzk!nTvDkRbY-BbSpoWsFhAQdmMrehEzU3loDux4_exRVjO9--Ik_EbQNJ3bX2gkEwR7F9cVVROFKqLxE4B8uW6bnx4xlR3fpQ$",
                    text: " Urgentiste",
                  },
                  {
                    href: "https://urldefense.com/v3/__https://services.sheerid.com/verify/68d55e0d273c5b3a03a5b0ac/?locale=fr__;!!KLCbKzk!nTvDkRbY-BbSpoWsFhAQdmMrehEzU3loDux4_exRVjO9--Ik_EbQNJ3bX2gkEwR7F9cVVROFKqLxE4B8uW6bnx7lcibT-w$",
                    text: "Pro de santé",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <FooterLinks
          title="Ressources"
          links={[
            {
              href: "https://www.nike.com/fr/help",
              text: "Ressources",
              isFirstLink: true,
            },
            {
              href: "https://www.nike.com/fr/cartes-cadeaux",
              text: "Cartes cadeaux",
            },
            {
              href: "https://nikegiftcardsforbusiness.com/",
              text: "Cartes cadeaux d'entreprise",
            },
            {
              href: "https://www.nike.com/fr/retail/",
              text: "Trouver un magasin",
            },
            { href: "https://www.nike.com/fr/articles", text: "Nike Journal" },
            {
              href: "https://www.nike.com/fr/adhesion",
              text: "Devenir membre",
            },
            { href: "#site-feedback", text: "Commentaires" },
            { href: "https://www.nike.com/fr/code-promo", text: "Codes promo" },
            {
              href: "https://www.nike.com/fr/conseil-produit",
              text: "Conseil produit",
            },
            {
              href: "https://www.nike.com/fr/running/recherche-de-chaussures",
              text: "Running Shoe Finder",
            },
          ]}
        />
        <FooterLinks
          title="Aide"
          links={[
            {
              href: "https://www.nike.com/fr/help",
              text: "Aide",
              isFirstLink: true,
            },
            {
              href: "https://www.nike.com/fr/orders/details",
              text: "Statut de la commande",
            },
            {
              href: "https://www.nike.com/fr/help/a/expedition-livraison-ue",
              text: "Expédition et livraison",
            },
            {
              href: "https://www.nike.com/fr/help/a/conditions-de-retour-ue",
              text: "Retours",
            },
            {
              href: "https://www.nike.com/fr/help/a/modes-de-paiement-ue",
              text: "Modes de paiement",
            },
            {
              href: "https://www.nike.com/fr/help/#contact",
              text: "Nous contacter",
            },
            { href: "https://www.nike.com/fr/help/a/avis", text: "Avis" },
            {
              href: "https://www.nike.com/fr/help/a/appliquer-promo-ue",
              text: "Aide - Codes promo Nike",
            },
          ]}
        />
        <FooterLinks
          title="Entreprise"
          links={[
            {
              href: "https://about.nike.com/fr",
              text: "Entreprise",
              isFirstLink: true,
            },
            { href: "https://about.nike.com/", text: "À propos de Nike" },
            { href: "https://news.nike.com/", text: "Actualités" },
            { href: "https://jobs.nike.com/", text: "Carrières" },
            { href: "https://investors.nike.com/", text: "Investisseurs" },
            {
              href: "https://www.nike.com/fr/developpement-durable",
              text: "Développement durable",
            },
            {
              href: "https://www.nike.com/fr/accessibility/statement",
              text: "Accessibilité: partiellement conforme",
            },
            { href: "https://www.nike.com/fr/mission", text: "Mission" },
            { href: "https://www.nike.com/fr/coaching", text: "Nike Coaching" },
            {
              href: "https://secure.ethicspoint.com/domain/media/fr/gui/56821/index.html",
              text: "Signaler un problème",
            },
          ]}
        />
        <FooterLinks
          title="Promotions liées à la communauté"
          links={[
            {
              href: "https://services.sheerid.com/verify/68d15e386bcf0b059b3b1708/?locale=fr",
              text: "Étudiant·e",
            },
            {
              href: "https://urldefense.com/v3/__https://services.sheerid.com/verify/68dcfa47c3f2fd1cd3069a9c/?locale=fr__;!!KLCbKzk!nTvDkRbY-BbSpoWsFhAQdmMrehEzU3loDux4_exRVjO9--Ik_EbQNJ3bX2gkEwR7F9cVVROFKqLxE4B8uW6bnx7H5y7HwQ$",
              text: "Prof",
            },
            {
              href: "https://urldefense.com/v3/__https://services.sheerid.com/verify/68d55da9273c5b3a03a5aa8e/?locale=fr__;!!KLCbKzk!nTvDkRbY-BbSpoWsFhAQdmMrehEzU3loDux4_exRVjO9--Ik_EbQNJ3bX2gkEwR7F9cVVROFKqLxE4B8uW6bnx4xlR3fpQ$",
              text: " Urgentiste",
            },
            {
              href: "https://urldefense.com/v3/__https://services.sheerid.com/verify/68d55e0d273c5b3a03a5b0ac/?locale=fr__;!!KLCbKzk!nTvDkRbY-BbSpoWsFhAQdmMrehEzU3loDux4_exRVjO9--Ik_EbQNJ3bX2gkEwR7F9cVVROFKqLxE4B8uW6bnx7lcibT-w$",
              text: "Pro de santé",
            },
          ]}
          hasH2Title={true}
        />
        <div className="text-neutral-400 text-sm font-medium items-center box-border caret-transparent gap-x-1 flex basis-0 grow shrink-0 h-[21px] justify-normal leading-[21px] min-h-[auto] min-w-[auto] gap-y-1 w-full my-6 font-helvetica_now_text_medium md:justify-end md:my-0">
          <button
            aria-label="Lieu sélectionné: France"
            type="submit"
            title="Lieu sélectionné: France"
            className="relative appearance-none items-center bg-transparent caret-transparent block justify-center min-h-[auto] min-w-[auto] p-0"
          >
            <span className="box-border caret-transparent inline-flex h-4 w-4 mr-1">
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-22.svg"
                alt="Icon"
                className="absolute box-border caret-transparent content-[''] h-4 translate-y-[3px] align-baseline w-4"
              />
            </span>
            France
          </button>
        </div>
        <div className="bg-neutral-700 box-border caret-transparent flex shrink-0 h-px min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0"></div>
      </div>
      <div className="box-border caret-transparent mb-6 md:mb-[72px]"></div>
      <FooterBottom />
      <div className="box-border caret-transparent hidden max-w-none w-full mx-0 pb-0 px-0 md:max-w-[980px] md:mx-auto md:pb-20 md:px-[30px]">
        <h2 className="text-2xl font-bold box-content caret-black leading-[normal] list-disc text-start w-auto py-0 font-times md:text-[32px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[38.4px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[214px] md:[mask-position:0%] md:bg-left-top md:py-9 md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
          Africa
        </h2>
        <ul className="box-content caret-black gap-x-[normal] block grid-cols-none list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:grid md:grid-cols-[repeat(auto-fit,215px)] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-24.svg"
              alt="Icon"
              className="box-content caret-black block h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/eg/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Egypt
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ma/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Morocco
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ma/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Maroc
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Français
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/za/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  South Africa
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
        </ul>
        <h2 className="text-2xl font-bold box-content caret-black leading-[normal] list-disc text-start w-auto py-0 font-times md:text-[32px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[38.4px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[214px] md:[mask-position:0%] md:bg-left-top md:py-9 md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
          Americas
        </h2>
        <ul className="box-content caret-black gap-x-[normal] block grid-cols-none list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:grid md:grid-cols-[repeat(auto-fit,215px)] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-24.svg"
              alt="Icon"
              className="box-content caret-black block h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.ar/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Argentina
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.br/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Brasil
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Português
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ca/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Canada
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ca/fr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Canada
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Français
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.cl/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Chile
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.co/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Colombia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/mx/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  México
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.pe/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Peru
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/pr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Puerto Rico
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  United States
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/us/es/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Estados Unidos
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.uy/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Uruguay
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/xl/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Latin America
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
        </ul>
        <h2 className="text-2xl font-bold box-content caret-black leading-[normal] list-disc text-start w-auto py-0 font-times md:text-[32px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[38.4px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[214px] md:[mask-position:0%] md:bg-left-top md:py-9 md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
          Asia Pacific
        </h2>
        <ul className="box-content caret-black gap-x-[normal] block grid-cols-none list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:grid md:grid-cols-[repeat(auto-fit,215px)] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-24.svg"
              alt="Icon"
              className="box-content caret-black block h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/au/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Australia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.cn/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  中国大陆
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  简体中文
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.hk/?locale=en-gb&intpromo=language2001"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Hong Kong
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.hk/?locale=zh-hk&intpromo=language1001"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  香港
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  繁體中文
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.in/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  India
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/id/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Indonesia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/jp/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Japan
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/jp/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  日本
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  日本語
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/kr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  대한민국
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  한국어
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/my/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Malaysia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/nz/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  New Zealand
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ph/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Philippines
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/sg/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Singapore
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/tw/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  台灣
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  繁體中文
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/th/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  ไทย
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  ภาษาไทย
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/vn/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Vietnam
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
        </ul>
        <h2 className="text-2xl font-bold box-content caret-black leading-[normal] list-disc text-start w-auto py-0 font-times md:text-[32px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[38.4px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[214px] md:[mask-position:0%] md:bg-left-top md:py-9 md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
          Europe
        </h2>
        <ul className="box-content caret-black gap-x-[normal] block grid-cols-none list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:grid md:grid-cols-[repeat(auto-fit,215px)] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-24.svg"
              alt="Icon"
              className="box-content caret-black block h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/at/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Österreich
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Deutsch
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/at/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Austria
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/be/de/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Belgien
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Deutsch
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/be/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Belgium
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/be/fr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Belgique
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Français
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/be/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  België
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Nederlands
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/bg/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Bulgaria
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/hr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Croatia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/cz/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Česká republika
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Čeština
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/cz/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Czech Republic
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/dk/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Danmark
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Dansk
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/dk/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Denmark
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/fi/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Finland
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/fr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  France
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Français
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/de/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Deutschland
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Deutsch
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/gr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Ελλάδα
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  ελληνικά
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/hu/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Hungary
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/hu/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Magyarország
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Magyar
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ie/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Ireland
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/il/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Israel
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/it/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Italia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Italiano
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/lu/de/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Luxemburg
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Deutsch
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/lu/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Luxembourg
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/lu/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Luxembourg
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Français
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/nl/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Netherlands
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/nl/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Nederland
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Nederlands
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/no/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Norway
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/no/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Norge
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Norsk
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/pl/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Polska
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Polski
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/pt/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Portugal
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/pt/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Portugal
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Português
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ro/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Romania
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ru/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Россия
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Русский
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/sk/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Slovakia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/si/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Slovenia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/es/ca/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Espanya
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Català
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/es/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  España
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Español
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/se/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Sweden
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/se/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Sverige
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Svenska
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ch/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Schweiz
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Deutsch
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ch/en/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Switzerland
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ch/fr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Suisse
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Français
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/ch/it/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Svizzera
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Italiano
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/tr/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Türkiye
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  Türkçe
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com/gb/"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  United Kingdom
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
        </ul>
        <h2 className="text-2xl font-bold box-content caret-black leading-[normal] list-disc text-start w-auto py-0 font-times md:text-[32px] md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[38.4px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[214px] md:[mask-position:0%] md:bg-left-top md:py-9 md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
          Middle East
        </h2>
        <ul className="box-content caret-black gap-x-[normal] block grid-cols-none list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:grid md:grid-cols-[repeat(auto-fit,215px)] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-24.svg"
              alt="Icon"
              className="box-content caret-black block h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.sa/en/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Saudi Arabia
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.sa/ar/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  المملكة العربية السعودية
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  العربية
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.ae/en/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  United Arab Emirates
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.ae/ar/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  الإمارات العربية المتحدة
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  العربية
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.qa/en/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Qatar
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.qa/ar/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  دولة قطر
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  العربية
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.kw/en/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block leading-[normal] font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_display_medium">
                  Kuwait
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block leading-[normal] font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-helvetica_now_text">
                  English
                </p>
              </div>
            </a>
          </li>
          <li className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://www.nike.com.kw/ar/home"
              className="font-normal bg-transparent box-content caret-black inline text-start w-auto p-0 rounded-none font-times md:font-medium md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-[216px] md:border md:border-neutral-700 md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-3 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[18px] md:border-solid md:font-helvetica_now_text_medium"
            >
              <img
                src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-25.svg"
                alt="Icon"
                className="text-black box-content caret-black float-none h-auto align-middle w-auto pr-0 md:text-stone-300 md:aspect-auto md:box-border md:caret-transparent md:float-left md:h-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:pr-1 md:scroll-m-0 md:scroll-p-[auto]"
              />
              <div className="box-content caret-black ml-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-7 md:scroll-m-0 md:scroll-p-[auto]">
                <h4 className="text-base box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-xl md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[30px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  الكويت
                </h4>
                <p className="text-black text-base font-normal box-content caret-black block justify-normal leading-[normal] text-start font-times md:text-neutral-400 md:text-xs md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-neue_frutiger_arabic">
                  العربية
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
