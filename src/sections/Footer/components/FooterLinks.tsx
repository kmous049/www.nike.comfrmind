export type FooterLinksProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
    isFirstLink?: boolean;
  }>;
  hasH2Title?: boolean;
};

export const FooterLinks = (props: FooterLinksProps) => {
  return (
    <div className="items-start box-border caret-transparent gap-x-3 hidden basis-0 flex-col grow shrink-0 min-h-0 min-w-0 gap-y-3 md:flex md:min-h-[auto] md:min-w-[auto]">
      {props.hasH2Title ? (
        <h2 className="text-sm font-medium box-border caret-transparent h-8 leading-[21px] min-h-0 min-w-0 mb-3 font-helvetica_now_text_medium md:min-h-[auto] md:min-w-[auto]">
          {props.title}
        </h2>
      ) : (
        <a
          href={props.links[0]?.href}
          className="text-sm font-medium box-border caret-transparent inline leading-[21px] min-h-0 min-w-0 font-helvetica_now_text_medium md:block md:min-h-[auto] md:min-w-[auto] mb-3"
        >
          <p className="box-border caret-transparent mb-3">{props.title}</p>
        </a>
      )}
      {props.links.slice(props.hasH2Title ? 0 : 1).map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-sm font-medium box-border caret-transparent inline leading-[21px] min-h-0 min-w-0 font-helvetica_now_text_medium md:block md:min-h-[auto] md:min-w-[auto]"
        >
          <p className="text-neutral-400 box-border caret-transparent">
            {link.text}
          </p>
        </a>
      ))}
    </div>
  );
};
