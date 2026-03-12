export const Logo = () => {
  return (
    <div className="box-border caret-transparent flex col-start-[span_5] h-[60px] min-h-[auto] min-w-[auto] md:col-start-[span_2]">
      <a
        aria-label="Page d'accueil Nike"
        href="https://www.nike.com/fr/"
        className="font-medium box-border caret-transparent block h-[59px] min-h-[auto] min-w-[auto] w-[59px] z-[1] my-px font-helvetica_now_text_medium"
      >
        <img
          src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-full align-baseline w-full scale-[1.33]"
        />
      </a>
    </div>
  );
};
