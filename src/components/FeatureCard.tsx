export type FeatureCardProps = {
  ariaLabel: string;
  slideNumber: number;
  totalSlides: number;
  imageAlt: string;
  imageSrc: string;
  description: string;
  listItemVariant: string;
  imageVariant: string;
  textContainerVariant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <li
      className={`text-white box-border caret-transparent basis-[calc(75%_-_20px)] flex-col shrink-0 snap-start md:basis-[calc(33.3333%_-_24px)] ${props.listItemVariant}`}
    >
      <figure
        aria-label={`${props.ariaLabel}, slide ${props.slideNumber} of ${props.totalSlides}`}
        role="group"
        className="relative box-border caret-transparent min-w-[300px]"
      >
        <div className="relative aspect-[0.8_/_1] box-border caret-transparent min-h-[300px] w-full overflow-hidden">
          <div className="absolute box-border caret-transparent h-full w-full">
            <div className="box-border caret-transparent h-full w-full">
              <img
                alt={`${props.imageAlt}, slide ${props.slideNumber} of ${props.totalSlides}`}
                src={props.imageSrc}
                className={`box-border caret-transparent h-full max-w-full min-h-[300px] object-cover align-baseline w-full ${props.imageVariant}`}
              />
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col h-[calc(100%_-_48px)] justify-start break-words pointer-events-none text-left w-full mt-6 left-0 top-0 md:h-[calc(100%_-_96px)] md:mt-9">
          <div
            className={`box-border caret-transparent break-words ${props.textContainerVariant}`}
          >
            <div className="font-medium box-border caret-transparent leading-6 break-words font-helvetica_now_text_medium">
              {props.description}
            </div>
          </div>
        </div>
      </figure>
    </li>
  );
};
