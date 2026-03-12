export type VideoPlayerProps = {
  src: string;
  ariaLabel?: string;
  autoplay?: boolean;
  loop?: boolean;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <video
      playsinline="playsinline"
      autoplay={props.autoplay ? "" : undefined}
      loop={props.loop ? "" : undefined}
      aria-label={props.ariaLabel}
      preload="auto"
      muted="muted"
      src={props.src}
      className="absolute box-border caret-transparent h-full object-cover align-baseline w-full left-0 top-0"
    ></video>
  );
};
