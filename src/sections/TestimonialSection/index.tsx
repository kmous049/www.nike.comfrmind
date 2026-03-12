export type TestimonialSectionProps = {
  variant: string;
  title?: string;
  description?: string;
  quote?: string;
  authorName?: string;
  authorRole?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export const TestimonialSection = (props: TestimonialSectionProps) => {
  const isIntroVariant =
    props.variant === "hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12" ||
    props.variant === "block max-w-[1824px] mt-12 mx-6 md:hidden md:mx-12";
  const hasImage = props.imageUrl;
  const hasFigcaption = props.quote && props.authorName;
  const isDesktopHidden =
    props.variant === "block max-w-[1824px] mx-6 md:hidden md:mx-12" ||
    props.variant === "block overflow-x-clip w-full mt-12 md:hidden";
  const isWideImage =
    props.variant === "hidden max-w-[1824px] mt-[84px] mx-6 md:block md:mx-12";
  const captionPosition =
    props.variant === "hidden overflow-x-clip w-full mt-[84px] md:block"
      ? "bottom-right"
      : props.variant ===
          "hidden max-w-[1824px] mt-[84px] mx-6 md:block md:mx-12"
        ? "top-left"
        : "bottom-right";
  const captionAlignment = captionPosition.includes("right")
    ? "text-right"
    : "text-left";
  const captionVerticalPosition = captionPosition.includes("top")
    ? "justify-start"
    : "justify-end";
  const captionTopClass = captionPosition.includes("top")
    ? "top-6 md:top-12"
    : "top-[calc(66.6667%_-_24px)] md:top-[calc(66.6667%_-_48px)]";
  const captionWidthClass = captionPosition.includes("left")
    ? "w-9/12"
    : "w-[calc(100%_-_48px)]";
  const captionLeftClass = captionPosition.includes("left")
    ? "left-6 md:left-12"
    : "inset-x-6 md:left-auto md:right-12";
  const captionHeightClass = captionPosition.includes("top")
    ? "h-[calc(100%_-_48px)] md:h-[calc(100%_-_96px)]"
    : "h-[33.3333%]";
  const aspectRatioClass = isWideImage
    ? "aspect-[2.20517_/_1]"
    : isDesktopHidden
      ? "aspect-[1.09667_/_1]"
      : "aspect-[1.6_/_1]";
  const bgClass = isDesktopHidden ? "bg-transparent md:bg-neutral-500" : "";
  const imageOpacityClass = isDesktopHidden
    ? "opacity-100 md:min-h-0 md:opacity-0"
    : "";

  return (
    <div className={`relative box-border caret-transparent ${props.variant}`}>
      <div
        className={`text-[0px] box-border caret-transparent leading-[0px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[0px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-helvetica_now_text after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-[0px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_now_text ${isIntroVariant ? "-mx-1.5" : ""}`}
      >
        <div
          className={`relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full ${isIntroVariant ? "px-1.5" : props.variant === "block max-w-[1824px] mx-6 md:hidden md:mx-12" || props.variant === "block overflow-x-clip w-full mt-12 md:hidden" || props.variant === "hidden max-w-[1824px] mt-[84px] mx-6 md:block md:mx-12" ? "px-1.5" : ""}`}
        >
          {isIntroVariant && !hasImage ? (
            <div
              className={`relative box-border caret-transparent flex flex-col justify-end text-center ${props.variant === "hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12" ? "w-auto mx-0 md:w-9/12 md:mx-auto" : ""}`}
            >
              <h2
                className={`font-medium box-border caret-transparent font-helvetica_now_display_medium ${props.variant === "hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12" ? "text-[32px] leading-[38.4px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]" : "text-2xl leading-[32.4px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"}`}
              >
                {props.title}
              </h2>
              <div
                className={`box-border caret-transparent leading-6 mt-2 ${props.variant === "hidden max-w-[1824px] mt-12 mx-6 md:block md:mx-12" ? "text-base min-h-0 min-w-0 md:text-xl md:leading-[30px] md:min-h-[auto] md:min-w-[auto]" : props.description ? "text-base min-h-[auto] min-w-[auto] md:text-xl md:leading-[30px] md:min-h-0 md:min-w-0" : "text-neutral-500 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"}`}
              >
                {props.description && (
                  <p
                    className={
                      props.description.includes("Sollicite")
                        ? "text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]"
                        : "box-border caret-transparent"
                    }
                  >
                    {props.description
                      .split("<br />")
                      .map((line, index, array) => (
                        <span key={index}>
                          {line}
                          {index < array.length - 1 && (
                            <>
                              <br
                                className={
                                  props.description.includes("Sollicite")
                                    ? "text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]"
                                    : "box-border caret-transparent"
                                }
                              />
                              {line === "" && (
                                <br
                                  className={
                                    props.description.includes("Sollicite")
                                      ? "text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]"
                                      : "box-border caret-transparent"
                                  }
                                />
                              )}
                            </>
                          )}
                        </span>
                      ))}
                  </p>
                )}
              </div>
            </div>
          ) : hasImage ? (
            <figure className="relative box-border caret-transparent">
              <div
                className={`relative ${aspectRatioClass} ${bgClass} box-border caret-transparent leading-[0px] min-h-[300px] w-full overflow-hidden`}
              >
                <div className="absolute box-border caret-transparent h-full w-full">
                  <div className="box-border caret-transparent h-full w-full">
                    <img
                      alt={props.imageAlt || "Nike Mind"}
                      src={props.imageUrl}
                      className={`box-border caret-transparent h-full max-w-full min-h-[300px] object-cover ${imageOpacityClass} align-baseline w-full`}
                    />
                  </div>
                </div>
              </div>
              {hasFigcaption && (
                <figcaption
                  className={`absolute box-border caret-transparent flex flex-col ${captionHeightClass} ${captionVerticalPosition} break-words pointer-events-none ${captionAlignment} ${captionWidthClass} ${captionLeftClass} ${captionTopClass}`}
                >
                  <div className="box-border caret-transparent min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]">
                    <h3 className="text-xl font-medium box-border caret-transparent leading-[30px] break-words font-helvetica_now_display_medium">
                      {props.quote}
                    </h3>
                    <p className="box-border caret-transparent leading-6 break-words mt-2">
                      {props.authorName}
                      {props.authorRole ? `, ${props.authorRole}` : ""}
                    </p>
                  </div>
                </figcaption>
              )}
            </figure>
          ) : null}
        </div>
      </div>
    </div>
  );
};
