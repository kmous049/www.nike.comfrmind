export type NavLinksProps = {
  variant: string;
  links: Array<{
    href: string;
    ariaLabel?: string;
    text?: string;
    iconSrc?: string;
    iconAlt?: string;
    hasDetails?: boolean;
    hasDivider?: boolean;
    dividerVariant?: string;
  }>;
};

export const NavLinks = (props: NavLinksProps) => {
  return (
    <ul
      className={`box-border caret-transparent flex list-none pl-0 ${props.variant}`}
    >
      {props.links.map((link, index) => (
        <li
          key={index}
          className={
            link.iconSrc
              ? "box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
              : "relative items-center box-border caret-transparent flex h-9 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          }
        >
          <a
            aria-label={link.ariaLabel}
            href={link.iconSrc ? "#" : link.href}
            className={
              link.iconSrc
                ? "font-medium box-border caret-transparent font-helvetica_now_text_medium flex pl-[30px] pr-6 py-2 md:p-0 transition-opacity duration-200 hover:opacity-70"
                : link.text === "S'identifier"
                  ? "font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 font-helvetica_now_text_medium md:min-h-[auto] md:min-w-[auto] link-hover hover:text-neutral-300 transition-colors duration-200"
                  : "font-medium box-border caret-transparent block min-h-0 min-w-0 font-helvetica_now_text_medium md:min-h-[auto] md:min-w-[auto] link-hover hover:text-neutral-300 transition-colors duration-200"
            }
          >
            {link.iconSrc ? (
              <img
                src={link.iconSrc}
                alt={link.iconAlt}
                className="box-border caret-transparent h-6 align-baseline w-6 transition-opacity duration-200"
              />
            ) : (
              <p
                role="presentation"
                className={
                  link.text === "S'identifier"
                    ? "text-xs box-border caret-transparent leading-[18px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                    : "text-xs box-border caret-transparent leading-[18px]"
                }
              >
                {link.text}
              </p>
            )}
          </a>
          {link.hasDetails && (
            <details className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"></details>
          )}
          {link.hasDivider && (
            <div
              className={
                link.dividerVariant ||
                "box-border caret-transparent h-3 min-h-0 min-w-0 m-3 border-r border-white md:min-h-[auto] md:min-w-[auto]"
              }
            ></div>
          )}
        </li>
      ))}
    </ul>
  );
};
