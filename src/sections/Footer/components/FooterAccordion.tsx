import { useState } from "react";

export type FooterAccordionProps = {
  title: string;
  iconUrl: string;
  iconClassName?: string;
  contentClassName?: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterAccordion = (props: FooterAccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-[rgb(57,57,59)_0px_-1px_0px_0px_inset] box-border caret-transparent">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full relative text-xl font-medium caret-transparent leading-[30px] py-6 font-helvetica_now_display_medium md:py-[30px] text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className="items-start caret-transparent flex justify-between w-full">
          <p className="text-sm caret-transparent leading-[21px] min-h-[auto] min-w-[auto] font-helvetica_now_text_medium md:min-h-0 md:min-w-0">
            {props.title}
          </p>
          <span className="items-center caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <img
              src={props.iconUrl}
              alt="Icon"
              className={`caret-transparent h-6 align-baseline w-6 ml-3 transition-transform duration-300 ${open ? "rotate-180" : ""} ${props.iconClassName || ""}`}
            />
          </span>
        </span>
      </button>
      <div
        className={`caret-transparent grid overflow-hidden transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} ${props.contentClassName || ""}`}
      >
        <div className="caret-transparent min-h-0 overflow-hidden">
          {props.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-medium caret-transparent font-helvetica_now_text_medium block transition-colors duration-200 hover:text-white"
            >
              <p className="text-neutral-400 text-sm caret-transparent leading-[21px] pb-3 md:pb-0 hover:text-neutral-300 transition-colors duration-200">
                {link.text}
              </p>
            </a>
          ))}
          <div className="pb-6"></div>
        </div>
      </div>
    </div>
  );
};
