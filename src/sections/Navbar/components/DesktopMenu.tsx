import { useState } from "react";

const navItems = [
  { label: "Nouveau", href: "#nouveau" },
  { label: "Homme", href: "#homme" },
  { label: "Femme", href: "#femme" },
  { label: "Enfant", href: "#enfant" },
  { label: "Sport", href: "#sport" },
  { label: "NikeSKIMS", href: "#nikeskims" },
];

type Props = {
  onNavigateMind?: () => void;
};

export const DesktopMenu = ({ onNavigateMind }: Props) => {
  const [active, setActive] = useState<number | "mind">(0);

  return (
    <nav
      aria-label="Navigation principale"
      className="absolute box-border caret-transparent hidden w-full inset-x-0 md:block"
    >
      <ul
        role="menu"
        className="box-border caret-transparent hidden flex-wrap h-[60px] justify-center list-none max-w-[1255px] w-[calc(100%_-_330px)] overflow-hidden mx-auto pl-0 md:flex md:w-[calc(100%_-_616px)]"
      >
        {navItems.map((item, i) => (
          <li key={i} className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <div className="items-center bg-neutral-800 box-border caret-transparent flex min-h-[60px] pl-3">
              <a
                href={item.href}
                onClick={() => setActive(i)}
                className={`font-medium box-border caret-transparent block min-h-0 min-w-0 text-nowrap border-b-2 border-x-white font-helvetica_now_text_medium md:min-h-[auto] md:min-w-[auto] transition-colors duration-200 pb-px hover:text-neutral-300 ${
                  active === i
                    ? "border-b-white text-white"
                    : "border-b-transparent text-white hover:border-b-neutral-500"
                }`}
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <div className="items-center bg-neutral-800 box-border caret-transparent flex min-h-[60px] pl-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setActive("mind"); onNavigateMind?.(); }}
              className={`font-medium box-border caret-transparent block min-h-0 min-w-0 text-nowrap border-b-2 font-helvetica_now_text_medium md:min-h-[auto] md:min-w-[auto] transition-colors duration-200 pb-px ${
                active === "mind"
                  ? "border-b-orange-400 text-orange-400"
                  : "border-b-transparent text-orange-400 hover:border-b-orange-300 hover:text-orange-300"
              }`}
            >
              Mind Game ✦
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
