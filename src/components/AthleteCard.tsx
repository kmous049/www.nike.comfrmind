export type AthleteCardProps = {
  athleteName: string;
  sport: string;
  slideNumber: string;
  totalSlides: string;
  imageUrl: string;
  liClassName: string;
  divClassName: string;
  textClassName: string;
  imageClassName: string;
};

export const AthleteCard = (props: AthleteCardProps) => {
  return (
    <li
      className={`text-white box-border caret-transparent basis-[calc(75%_-_20px)] flex-col shrink-0 snap-start md:basis-[calc(33.3333%_-_24px)] ${props.liClassName}`}
    >
      <figure
        aria-label={`Nike Mind dans la nature, ${props.athleteName}, ${props.sport}, slide ${props.slideNumber} of ${props.totalSlides}`}
        role="group"
        className="relative box-border caret-transparent min-w-[300px]"
      >
        <div
          className={`relative box-border caret-transparent min-h-[300px] w-full overflow-hidden ${props.divClassName}`}
        >
          <div className="absolute box-border caret-transparent h-full w-full">
            <div className="box-border caret-transparent h-full w-full">
              <img
                alt={`Nike Mind dans la nature, Nike Mind, slide ${props.slideNumber} of ${props.totalSlides}`}
                src={props.imageUrl}
                className={props.imageClassName}
              />
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col h-[calc(100%_-_48px)] justify-start break-words pointer-events-none text-left w-[calc(100%_-_48px)] mt-6 left-6 top-0 md:h-[calc(100%_-_96px)] md:mt-9 md:left-12">
          <div
            className={`box-border caret-transparent break-words ${props.textClassName}`}
          >
            <div className="text-xl font-medium box-border caret-transparent leading-[30px] break-words font-helvetica_now_display_medium">
              {props.athleteName}, {props.sport}
            </div>
          </div>
        </div>
      </figure>
    </li>
  );
};
