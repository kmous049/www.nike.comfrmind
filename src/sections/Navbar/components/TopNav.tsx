import { NavLinks } from "@/sections/Navbar/components/NavLinks";

export const TopNav = () => {
  return (
    <div className="relative bg-neutral-900 box-border caret-transparent hidden z-[3] md:block">
      <div className="items-center box-border caret-transparent grid grid-cols-[repeat(12,minmax(0px,1fr))] max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="box-border caret-transparent col-start-[span_6] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <nav
            aria-label="Navigation de marque"
            className="box-border caret-transparent"
          >
            <NavLinks
              variant="[align-items:normal] gap-x-[normal] h-9 gap-y-[normal] md:items-center md:gap-x-6 md:gap-y-6"
              links={[
                {
                  href: "https://www.nike.com/fr/jordan",
                  ariaLabel: "Jordan",
                  iconSrc:
                    "https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-2.svg",
                  iconAlt: "Icon",
                },
                {
                  href: "https://www.converse.com/fr/",
                  ariaLabel: "Converse",
                  iconSrc:
                    "https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-3.svg",
                  iconAlt: "Icon",
                },
              ]}
            />
          </nav>
        </div>
        <div className="box-border caret-transparent col-start-[span_6] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <nav
            aria-label="Navigation utilisateur"
            className="box-border caret-transparent"
          >
            <NavLinks
              variant="items-center float-right pr-2"
              links={[
                {
                  href: "https://www.nike.com/fr/retail",
                  text: "Trouver un magasin",
                  hasDivider: true,
                },
                {
                  href: "https://www.nike.com/fr/help",
                  text: "Aide",
                  hasDetails: true,
                  hasDivider: true,
                  dividerVariant:
                    "box-border caret-transparent h-3 min-h-0 min-w-0 mr-3 my-3 border-r border-white md:min-h-[auto] md:min-w-[auto]",
                },
                {
                  href: "https://www.nike.com/fr/adhesion",
                  text: "Rejoins-nous",
                  hasDivider: true,
                },
                {
                  href: "https://www.nike.com/fr/register",
                  text: "S'identifier",
                },
              ]}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
