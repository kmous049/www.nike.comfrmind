export type CarouselControlsProps = {
  variant: string;
  pauseAriaLabel?: string;
  pauseIcon1Url?: string;
  pauseIcon2Url?: string;
  pauseIcon3Url?: string;
  previousAriaLabel?: string;
  previousIconUrl?: string;
  nextAriaLabel?: string;
  nextIconUrl?: string;
  paginationAriaLabel?: string;
  slides?: Array<{
    ariaLabel: string;
    isActive?: boolean;
  }>;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  if (props.variant === "navigation") {
    return (
      <div className="absolute box-border caret-transparent flex items-center gap-x-3 pointer-events-auto gap-y-3 right-6 bottom-4 md:gap-x-4 md:pointer-events-none md:gap-y-4 md:bottom-6">
        <button
          aria-label={props.pauseAriaLabel}
          type="button"
          className="appearance-none caret-transparent flex min-h-[auto] min-w-[auto] text-center p-0 font-arial relative font-bold items-center bg-transparent h-6 justify-center pointer-events-auto w-6 md:h-9 md:pointer-events-none md:w-9"
        >
          <img
            src={props.pauseIcon1Url}
            alt="Icon"
            className="absolute box-border caret-transparent h-full pointer-events-auto align-baseline w-full left-0 top-0 md:pointer-events-none"
          />
          <img
            src={props.pauseIcon2Url}
            alt="Icon"
            className="absolute box-border caret-transparent h-full pointer-events-auto -rotate-90 align-baseline w-full left-0 top-0 md:pointer-events-none"
          />
          <span className="text-[0px] items-center box-border caret-transparent flex h-3.5 justify-center leading-[0px] min-h-[auto] min-w-[auto] opacity-90 pointer-events-auto w-3.5 md:h-5 md:pointer-events-none md:w-5">
            <img
              src={props.pauseIcon3Url}
              alt="Icon"
              className="box-border caret-transparent h-6 pointer-events-auto align-baseline w-6 md:pointer-events-none"
            />
          </span>
        </button>
        <div className="box-content caret-black gap-x-[normal] block min-h-0 min-w-0 gap-y-[normal] md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <button
            aria-label={props.previousAriaLabel}
            type="button"
            className="text-[13.3333px] [align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 opacity-100 text-center w-auto rounded-none font-arial md:appearance-none md:text-[0px] md:items-center md:aspect-auto md:bg-neutral-800 md:caret-transparent md:flex md:h-9 md:justify-center md:leading-[0px] md:min-h-[auto] md:min-w-[auto] md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-9 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
          >
            <img
              src={props.previousIconUrl}
              alt="Icon"
              className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </button>
          <button
            aria-label={props.nextAriaLabel}
            type="button"
            className="text-[13.3333px] [align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal leading-[normal] min-h-0 min-w-0 opacity-100 text-center w-auto rounded-none font-arial md:appearance-none md:text-[0px] md:items-center md:aspect-auto md:bg-neutral-800 md:caret-transparent md:flex md:h-9 md:justify-center md:leading-[0px] md:min-h-[auto] md:min-w-[auto] md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-9 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
          >
            <img
              src={props.nextIconUrl}
              alt="Icon"
              className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={props.paginationAriaLabel}
      className="absolute box-border caret-transparent flex translate-x-[-50.0%] left-2/4 bottom-6"
    >
      {props.slides?.map((slide, index) => (
        <button
          key={index}
          aria-label={slide.ariaLabel}
          type="button"
          className={
            slide.isActive
              ? "appearance-none text-black bg-white caret-transparent flex h-[5px] min-h-[auto] min-w-[auto] text-center w-[5px] mx-1 p-0 rounded-[50%] font-arial"
              : "appearance-none text-black bg-white caret-transparent flex h-[5px] min-h-[auto] min-w-[auto] opacity-50 text-center w-[5px] mx-1 p-0 rounded-[50%] font-arial"
          }
        ></button>
      ))}
    </div>
  );
};
