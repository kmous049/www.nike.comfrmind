import { VideoPlayer } from "@/components/VideoPlayer";

export const VideoHeroSection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-x-clip w-full mt-12">
      <div className="text-[0px] box-border caret-transparent leading-[0px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[0px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[0px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-helvetica_now_text after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-[0px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_now_text">
        <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
          <div className="relative box-border caret-transparent h-full">
            <div className="relative box-border caret-transparent grow h-full max-w-full w-full">
              <div className="relative aspect-[0.732_/_1] bg-neutral-900 box-border caret-transparent w-full overflow-hidden md:aspect-[2.05714_/_1]">
                <div className="absolute box-border caret-transparent h-full w-full">
                  <div className="box-border caret-transparent h-full w-full">
                    <div
                      loop="true"
                      autoplay="true"
                      playsinline="true"
                      role="region"
                      aria-label="Lecteur vidéo"
                      className="relative box-border caret-transparent h-full leading-4 max-w-full align-top w-full font-helvetica_neue after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-4 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_neue"
                    >
                      <VideoPlayer
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        loop={true}
                      />
                      <div className="absolute box-border caret-transparent pointer-events-none z-[2] top-0 bottom-14 inset-x-0"></div>
                      <div className="absolute box-border caret-transparent hidden h-12 w-full px-4 bottom-0 inset-x-0 before:accent-auto before:bg-[linear-gradient(rgba(0,0,0,0)_0.56%,rgba(0,0,0,0.4)_99.81%)] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-60 before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:bottom-0 before:font-helvetica_neue">
                        <button
                          type="button"
                          title="Lecture"
                          className="relative appearance-none bg-transparent bg-[url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2217px%22%20height%3D%2218px%22%20viewBox%3D%220%200%2017%2018%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3EIcons%20%2F%20Media%20Controls%20%2F%20Play%20%2F%20Dark%20BG%20-%2024%20Filled%3C%2Ftitle%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%221.3-ICONS-%2F-On-Dark%22%20transform%3D%22translate%28-990.000000%2C%20-6523.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28986.000000%2C%206520.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-6%22%20transform%3D%22translate%285.000000%2C%203.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14.3145%2C8.3506%20L1.3675%2C0.8756%20C0.8675%2C0.5866%200.2425%2C0.9476%200.2425%2C1.5256%20L0.2425%2C16.4746%20C0.2425%2C17.0526%200.8675%2C17.4136%201.3675%2C17.1236%20L14.3145%2C9.6496%20C14.8145%2C9.3616%2014.8145%2C8.6386%2014.3145%2C8.3506%22%20id%3D%22Fill-2%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14.3145%2C8.3506%20L1.3675%2C0.8756%20C0.8675%2C0.5866%200.2425%2C0.9476%200.2425%2C1.5256%20L0.2425%2C16.4746%20C0.2425%2C17.0526%200.8675%2C17.4136%201.3675%2C17.1236%20L14.3145%2C9.6496%20C14.8145%2C9.3616%2014.8145%2C8.6386%2014.3145%2C8.3506%20Z%22%20id%3D%22Stroke-4%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat caret-transparent shrink-0 h-6 text-center w-6 z-[2] bg-center mx-2 p-0 font-arial"
                        >
                          <span className="box-border caret-transparent hidden shrink-0 font-videojs before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[48.096px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-videojs"></span>
                        </button>
                        <div className="relative box-border caret-transparent flex shrink-0 h-6 text-center w-6 z-[2] mx-2">
                          <button
                            type="button"
                            title="Son activé"
                            className="relative appearance-none bg-transparent bg-[url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2220px%22%20height%3D%2220px%22%20viewBox%3D%220%200%2020%2020%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3EIcons%20%2F%20Media%20Controls%20%2F%20Mute%20%2F%20Dark%20BG%20-%2024%20Filled%3C%2Ftitle%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%221.3-ICONS-%2F-On-Dark%22%20transform%3D%22translate%28-839.000000%2C%20-6522.000000%29%22%20fill%3D%22%23FFFFFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28836.000000%2C%206520.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-6%22%20transform%3D%22translate%283.000000%2C%202.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M11.0742%2C0.6748%20C10.5122%2C0.4418%209.8702%2C0.5708%209.4392%2C0.9998%20L4.9392%2C5.4998%20L0.0002%2C5.4998%20L0.0002%2C14.4998%20L4.9392%2C14.4998%20L9.4392%2C18.9998%20C9.7272%2C19.2878%2010.1092%2C19.4408%2010.4992%2C19.4408%20C10.6922%2C19.4408%2010.8872%2C19.4028%2011.0742%2C19.3248%20C11.6362%2C19.0918%2012.0002%2C18.5478%2012.0002%2C17.9398%20L12.0002%2C2.0608%20C12.0002%2C1.4518%2011.6362%2C0.9078%2011.0742%2C0.6748%22%20id%3D%22Fill-2%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22Fill-4%22%20points%3D%2219.8584%207.8789%2018.7974%206.8179%2016.6764%208.9399%2014.5554%206.8179%2013.4954%207.8789%2015.6164%209.9999%2013.4954%2012.1209%2014.5554%2013.1819%2016.6764%2011.0609%2018.7974%2013.1819%2019.8584%2012.1209%2017.7374%209.9999%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat caret-transparent block shrink-0 h-6 w-6 z-[2] bg-center p-0 font-arial"
                          >
                            <span className="box-border caret-transparent hidden"></span>
                          </button>
                        </div>
                        <div className="relative box-border caret-transparent hidden shrink-0 h-6 leading-[23.2px] min-w-8 text-center w-fit z-[2] mx-2">
                          <span
                            role="presentation"
                            className="box-border caret-transparent"
                          >
                            0:00
                          </span>
                        </div>
                        <div className="box-border caret-transparent hidden shrink-0 h-6 leading-[23.2px] min-w-8 w-fit mr-2">
                          <div className="box-border caret-transparent">
                            <span className="box-border caret-transparent">
                              /
                            </span>
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent hidden shrink-0 h-6 leading-[23.2px] min-w-8 text-center w-fit z-[2] mx-2">
                          <span
                            role="presentation"
                            className="box-border caret-transparent"
                          >
                            0:51
                          </span>
                        </div>
                        <div className="relative items-center box-border caret-transparent flex grow h-6 min-w-16 text-center w-6 z-[2] ml-3 mr-2">
                          <div
                            role="slider"
                            aria-label="Barre de progression"
                            className="relative bg-white/20 box-border caret-transparent grow h-1 rounded-sm"
                          >
                            <div className="absolute box-border caret-transparent h-full w-[58.98%] rounded-sm md:w-[70.73%]">
                              <div className="absolute bg-white/30 box-border caret-transparent h-full w-[99.72%] left-[0.28%] md:w-[99.77%] md:left-[0.23%]"></div>
                            </div>
                            <div className="absolute bg-white box-border caret-transparent h-full w-[0%] rounded-sm font-videojs md:w-[0.6%] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[1] before:border-separate before:-right-1.5 before:-top-1 before:font-videojs"></div>
                          </div>
                        </div>
                        <div className="relative items-start box-border caret-transparent hidden grow h-6 leading-[25.6px] text-center w-6 z-[2] mx-2">
                          <div className="box-border caret-transparent">
                            EN DIRECT
                          </div>
                        </div>
                        <button
                          type="button"
                          title="Seek to live, currently behind live"
                          className="relative appearance-none items-center bg-transparent caret-transparent hidden shrink-0 h-6 leading-[48px] min-w-16 text-center w-6 z-[2] mx-2 px-2 py-0 font-arial"
                        >
                          <span className="text-zinc-500 box-border caret-transparent mr-2 font-videojs before:accent-auto before:box-border before:caret-transparent before:text-zinc-500 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[48px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-videojs"></span>
                          <span className="box-border caret-transparent">
                            EN DIRECT
                          </span>
                        </button>
                        <div className="relative box-border caret-transparent shrink-0 h-6 leading-[23.2px] min-w-8 text-center w-fit z-[2] mx-2">
                          <span className="box-border caret-transparent hidden">
                            -
                          </span>
                          <span
                            role="presentation"
                            className="box-border caret-transparent"
                          >
                            0:51
                          </span>
                        </div>
                        <div className="box-border caret-transparent hidden">
                           
                        </div>
                        <div className="relative box-border caret-transparent hidden shrink-0 h-6 text-center w-6 z-[2] mx-2">
                          <div className="absolute text-2xl box-border caret-transparent h-full leading-[48px] pointer-events-none w-full left-0 top-0">
                            1x
                          </div>
                          <button
                            type="button"
                            title="Vitesse de lecture"
                            className="absolute appearance-none bg-transparent caret-transparent block h-full w-full p-0 left-0 top-0 font-arial"
                          >
                            <span className="box-border caret-transparent block"></span>
                          </button>
                          <div className="absolute box-border caret-transparent hidden h-8 left-[-235.2px] w-64 mb-6 bottom-0">
                            <ul className="absolute text-zinc-400 backdrop-blur-[27.1828px] bg-neutral-900/80 box-border caret-transparent list-none max-h-60 w-full overflow-auto px-0.5 py-2 rounded-lg bottom-6 font-helvetica_neue"></ul>
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent hidden shrink-0 h-6 text-center w-6 z-[2] mx-2">
                          <button
                            type="button"
                            title="Chapitres"
                            className="appearance-none bg-transparent caret-transparent h-full w-full p-0 font-arial"
                          >
                            <span className="box-border caret-transparent block font-videojs before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[48.096px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-videojs"></span>
                          </button>
                          <div className="absolute box-border caret-transparent hidden h-8 left-[-235.2px] w-64 mb-6 bottom-0">
                            <ul className="absolute text-zinc-400 backdrop-blur-[27.1828px] bg-neutral-900/80 box-border caret-transparent list-none max-h-60 w-full overflow-auto px-0.5 py-2 rounded-lg bottom-6 font-helvetica_neue">
                              <li className="font-bold box-border caret-transparent leading-8 uppercase mb-[4.8px]">
                                Chapitres
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent hidden shrink-0 h-6 text-center w-6 z-[2] mx-2">
                          <button
                            type="button"
                            title="Descriptions"
                            className="appearance-none bg-transparent caret-transparent h-full w-full p-0 font-arial"
                          >
                            <span className="box-border caret-transparent block font-videojs before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[48.096px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-videojs"></span>
                          </button>
                          <div className="static box-content caret-black block h-auto w-auto mb-0 left-auto bottom-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:hidden md:h-8 md:left-[-235.2px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-64 md:[mask-position:0%] md:bg-left-top md:mb-6 md:scroll-m-0 md:scroll-p-[auto] md:bottom-0">
                            <ul className="static text-black bg-transparent box-content caret-black list-disc max-h-none w-auto pl-10 pr-0 py-0 rounded-none bottom-auto font-times md:absolute md:text-zinc-400 md:aspect-auto md:backdrop-blur-[27.1828px] md:bg-neutral-900/80 md:box-border md:caret-transparent md:list-none md:max-h-60 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-auto md:[mask-position:0%] md:bg-left-top md:px-0.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:bottom-6 md:font-helvetica_neue">
                              <li
                                role="menuitemradio"
                                className="text-black font-normal box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-white before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-medium before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-r-2 before:md:border-b-2 before:md:border-separate before:md:border-solid before:md:border-white before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  descriptions désactivées
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  , sélectionné
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent flex shrink-0 h-6 text-center w-6 z-[2] mx-2">
                          <button
                            type="button"
                            title="Sous-titres"
                            className="appearance-none bg-transparent bg-[url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2222px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2022%2016%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3EIcons%20%2F%20Media%20Controls%20%2F%20Closed%20Caption%20%2F%20Dark%20BG%20-%2024%3C%2Ftitle%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%221.3-ICONS-%2F-On-Dark%22%20transform%3D%22translate%28-387.000000%2C%20-5675.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28386.000000%2C%205671.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-6%22%20transform%3D%22translate%282.000000%2C%205.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M17.5%2C7.8091%20L17.493%2C7.9151%20C17.463%2C8.3841%2017.361%2C8.8171%2017.19%2C9.2021%20C17.019%2C9.5901%2016.783%2C9.9301%2016.488%2C10.2131%20C16.195%2C10.4961%2015.846%2C10.7171%2015.449%2C10.8711%20C15.053%2C11.0251%2014.612%2C11.1031%2014.141%2C11.1031%20C13.56%2C11.1031%2013.028%2C10.9941%2012.563%2C10.7781%20C12.099%2C10.5611%2011.699%2C10.2631%2011.378%2C9.8911%20C11.056%2C9.5171%2010.807%2C9.0781%2010.637%2C8.5841%20C10.467%2C8.0931%2010.381%2C7.5591%2010.381%2C7.0001%20C10.381%2C6.4481%2010.467%2C5.9181%2010.637%2C5.4261%20C10.807%2C4.9331%2011.056%2C4.4931%2011.377%2C4.1201%20C11.699%2C3.7471%2012.098%2C3.4471%2012.562%2C3.2281%20C13.025%2C3.0081%2013.557%2C2.8971%2014.141%2C2.8971%20C14.575%2C2.8971%2014.992%2C2.9581%2015.378%2C3.0781%20C15.771%2C3.2011%2016.117%2C3.3791%2016.411%2C3.6091%20C16.708%2C3.8391%2016.953%2C4.1251%2017.138%2C4.4571%20C17.322%2C4.7881%2017.438%2C5.1721%2017.482%2C5.5981%20L17.494%2C5.7081%20L15.968%2C5.7081%20L15.948%2C5.6331%20C15.895%2C5.4241%2015.818%2C5.2261%2015.722%2C5.0461%20C15.628%2C4.8721%2015.506%2C4.7191%2015.358%2C4.5931%20C15.214%2C4.4671%2015.039%2C4.3671%2014.839%2C4.2951%20C14.64%2C4.2251%2014.405%2C4.1891%2014.141%2C4.1891%20C13.753%2C4.1891%2013.414%2C4.2671%2013.134%2C4.4221%20C12.853%2C4.5791%2012.621%2C4.7901%2012.446%2C5.0491%20C12.267%2C5.3141%2012.134%2C5.6191%2012.049%2C5.9541%20C11.962%2C6.2941%2011.917%2C6.6461%2011.917%2C7.0001%20C11.917%2C7.3531%2011.962%2C7.7051%2012.049%2C8.0451%20C12.134%2C8.3811%2012.268%2C8.6851%2012.446%2C8.9501%20C12.621%2C9.2101%2012.853%2C9.4211%2013.134%2C9.5771%20C13.414%2C9.7321%2013.753%2C9.8101%2014.141%2C9.8101%20C14.424%2C9.8101%2014.677%2C9.7621%2014.892%2C9.6641%20C15.105%2C9.5671%2015.293%2C9.4311%2015.446%2C9.2611%20C15.601%2C9.0901%2015.724%2C8.8861%2015.812%2C8.6551%20C15.901%2C8.4231%2015.961%2C8.1691%2015.988%2C7.8991%20L15.997%2C7.8091%20L17.5%2C7.8091%20Z%20M8.116%2C7.8091%20L9.619%2C7.8091%20L9.612%2C7.9151%20C9.582%2C8.3841%209.48%2C8.8171%209.31%2C9.2021%20C9.138%2C9.5901%208.901%2C9.9301%208.607%2C10.2131%20C8.314%2C10.4961%207.965%2C10.7171%207.568%2C10.8711%20C7.172%2C11.0251%206.731%2C11.1031%206.26%2C11.1031%20C5.679%2C11.1031%205.147%2C10.9941%204.682%2C10.7781%20C4.218%2C10.5611%203.818%2C10.2631%203.497%2C9.8911%20C3.175%2C9.5171%202.926%2C9.0781%202.756%2C8.5841%20C2.586%2C8.0931%202.5%2C7.5591%202.5%2C7.0001%20C2.5%2C6.4481%202.586%2C5.9181%202.756%2C5.4261%20C2.926%2C4.9331%203.175%2C4.4931%203.496%2C4.1201%20C3.818%2C3.7471%204.217%2C3.4471%204.681%2C3.2281%20C5.145%2C3.0081%205.676%2C2.8971%206.26%2C2.8971%20C6.695%2C2.8971%207.112%2C2.9581%207.498%2C3.0781%20C7.89%2C3.2011%208.237%2C3.3791%208.53%2C3.6091%20C8.827%2C3.8391%209.072%2C4.1251%209.257%2C4.4571%20C9.441%2C4.7881%209.557%2C5.1721%209.602%2C5.5981%20L9.613%2C5.7081%20L8.087%2C5.7081%20L8.067%2C5.6331%20C8.014%2C5.4241%207.937%2C5.2261%207.841%2C5.0461%20C7.747%2C4.8721%207.625%2C4.7201%207.479%2C4.5931%20C7.332%2C4.4661%207.157%2C4.3661%206.959%2C4.2951%20C6.759%2C4.2251%206.524%2C4.1891%206.26%2C4.1891%20C5.872%2C4.1891%205.533%2C4.2671%205.254%2C4.4221%20C4.973%2C4.5791%204.74%2C4.7891%204.565%2C5.0491%20C4.388%2C5.3111%204.254%2C5.6161%204.168%2C5.9541%20C4.081%2C6.2941%204.036%2C6.6461%204.036%2C7.0001%20C4.036%2C7.3531%204.081%2C7.7051%204.168%2C8.0451%20C4.254%2C8.3831%204.388%2C8.6881%204.565%2C8.9501%20C4.74%2C9.2101%204.973%2C9.4211%205.254%2C9.5771%20C5.533%2C9.7321%205.872%2C9.8101%206.26%2C9.8101%20C6.543%2C9.8101%206.796%2C9.7621%207.011%2C9.6641%20C7.225%2C9.5681%207.411%2C9.4321%207.565%2C9.2611%20C7.722%2C9.0881%207.845%2C8.8841%207.931%2C8.6561%20C8.021%2C8.4231%208.08%2C8.1691%208.107%2C7.8991%20L8.116%2C7.8091%20Z%22%20id%3D%22Fill-2%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M17.5%2C13.75%20L2.5%2C13.75%20C1.258%2C13.75%200.25%2C12.743%200.25%2C11.5%20L0.25%2C2.5%20C0.25%2C1.257%201.258%2C0.25%202.5%2C0.25%20L17.5%2C0.25%20C18.742%2C0.25%2019.75%2C1.257%2019.75%2C2.5%20L19.75%2C11.5%20C19.75%2C12.743%2018.742%2C13.75%2017.5%2C13.75%20Z%22%20id%3D%22Stroke-4%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat caret-transparent block h-full w-full bg-center p-0 font-arial"
                          >
                            <span className="box-border caret-transparent hidden font-videojs before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[48.096px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-videojs"></span>
                          </button>
                          <div className="static box-content caret-black block h-auto w-auto mb-0 left-auto bottom-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:hidden md:h-8 md:left-[-235.2px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-64 md:[mask-position:0%] md:bg-left-top md:mb-6 md:scroll-m-0 md:scroll-p-[auto] md:bottom-0">
                            <ul
                              role="menu"
                              className="static text-black bg-transparent box-content caret-black list-disc max-h-none w-auto pl-10 pr-0 py-0 rounded-none bottom-auto font-times md:absolute md:text-zinc-400 md:aspect-auto md:backdrop-blur-[27.1828px] md:bg-neutral-900/80 md:box-border md:caret-transparent md:list-none md:max-h-60 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-auto md:[mask-position:0%] md:bg-left-top md:px-0.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:bottom-6 md:font-helvetica_neue"
                            >
                              <li
                                role="menuitem"
                                className="box-content caret-black list-item leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:hidden md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  Paramètres des sous-titres
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  , ouvrir les paramètres des sous-titres
                                </span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="text-black font-normal box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-white before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-medium before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-r-2 before:md:border-b-2 before:md:border-separate before:md:border-solid before:md:border-white before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  Sous-titres désactivés
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  , sélectionné
                                </span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  català
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  English
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  Deutsch
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  italiano
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  polski
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  français
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  svenska
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  čeština
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  magyar
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  português (Brasil)
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  English (United Kingdom)
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  Türkçe
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  norsk bokmål
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  中文（繁體）
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  中文（简体）
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  Ελληνικά
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  日本語
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  한국어
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  español (Latinoamérica)
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  español (España)
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  português (Portugal)
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  dansk
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                              <li
                                role="menuitemradio"
                                className="box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-400 before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-separate before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  Nederlands
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent hidden shrink-0 h-6 text-center w-6 z-[2] mx-2">
                          <button
                            type="button"
                            title="Piste audio"
                            className="appearance-none bg-transparent caret-transparent h-full w-full p-0 font-arial"
                          >
                            <span className="box-border caret-transparent block font-videojs before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-2xl before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[26.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-videojs"></span>
                          </button>
                          <div className="static box-content caret-black block h-auto w-auto mb-0 left-auto bottom-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:hidden md:h-8 md:left-[-235.2px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-64 md:[mask-position:0%] md:bg-left-top md:mb-6 md:scroll-m-0 md:scroll-p-[auto] md:bottom-0">
                            <ul className="static text-black bg-transparent box-content caret-black list-disc max-h-none w-auto pl-10 pr-0 py-0 rounded-none bottom-auto font-times md:absolute md:text-zinc-400 md:aspect-auto md:backdrop-blur-[27.1828px] md:bg-neutral-900/80 md:box-border md:caret-transparent md:list-none md:max-h-60 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-auto md:[mask-position:0%] md:bg-left-top md:px-0.5 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:bottom-6 md:font-helvetica_neue">
                              <li
                                role="menuitemradio"
                                className="text-black font-normal box-content caret-black leading-[normal] text-left normal-case pl-0 py-0 md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-start md:decoration-auto md:capitalize md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:py-2 md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-white before:md:inline-block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-medium before:md:h-3.5 before:md:tracking-[normal] before:md:leading-[22.4px] before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:relative before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:capitalize before:md:visible before:md:w-1.5 before:md:mr-3 before:md:border-r-2 before:md:border-b-2 before:md:border-separate before:md:border-solid before:md:border-white before:md:font-helvetica_neue"
                              >
                                <span className="box-content caret-black inline w-auto md:aspect-auto md:box-border md:caret-transparent md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[calc(100%_-_19.2px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  Alternate Audio
                                </span>
                                <span className="static box-content caret-black inline h-auto w-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  , sélectionné
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button
                          type="button"
                          title="Plein écran"
                          className="relative appearance-none bg-transparent bg-[url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2218px%22%20height%3D%2218px%22%20viewBox%3D%220%200%2018%2018%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3EIcons%20%2F%20Core%20%2F%20Expand%20%2F%20Dark%20BG%20-%2024%3C%2Ftitle%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%221.3-ICONS-%2F-On-Dark%22%20transform%3D%22translate%28-614.000000%2C%20-4883.000000%29%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%221.5%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28611.000000%2C%204880.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolyline%20id%3D%22Stroke-2%22%20points%3D%223.75%2013.5%203.75%2020.25%2010.5%2020.25%22%3E%3C%2Fpolyline%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolyline%20id%3D%22Stroke-3%22%20points%3D%2220.25%2010.5%2020.25%203.75%2013.5%203.75%22%3E%3C%2Fpolyline%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat caret-transparent shrink-0 h-6 text-center w-6 z-[2] bg-center mx-2 p-0 font-arial"
                        >
                          <span className="box-border caret-transparent hidden font-videojs before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[48.096px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-videojs"></span>
                        </button>
                      </div>
                      <div
                        aria-label="Fenêtre modale"
                        role="dialog"
                        className="absolute bg-[linear-gradient(rgba(0,0,0,0.8),rgba(255,255,255,0))] box-border caret-transparent hidden h-full w-full overflow-auto left-0 top-0"
                      >
                        <div
                          role="document"
                          className="absolute text-[19.2px] box-border caret-transparent h-full leading-[28.8px] w-full z-[1] px-6 py-5 left-0 top-0"
                        ></div>
                      </div>
                      <div
                        aria-label="Boîte de dialogue des paramètres des sous-titres transcrits"
                        role="dialog"
                        className="absolute bg-slate-800/80 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(255,255,255,0))] box-border caret-transparent hidden h-[70%] w-full overflow-auto left-0 top-0"
                      >
                        <div
                          role="document"
                          className="absolute text-[19.2px] box-border caret-transparent grid grid-cols-[1fr_1fr] grid-rows-[1fr] h-full leading-[28.8px] w-full z-[1] pt-5 px-6 left-0 top-0"
                        >
                          <div className="box-border caret-transparent">
                            <fieldset className="box-border caret-transparent m-[5px] p-[3px]">
                              <legend className="box-border caret-transparent mb-[5px] px-0">
                                Texte
                              </legend>
                              <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] mr-[13.3333px] mb-[6.66667px] font-arial">
                                <option
                                  value="#FFF"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Blanc
                                </option>
                                <option
                                  value="#000"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Noir
                                </option>
                                <option
                                  value="#F00"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Rouge
                                </option>
                                <option
                                  value="#0F0"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Vert
                                </option>
                                <option
                                  value="#00F"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Bleu
                                </option>
                                <option
                                  value="#FF0"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Jaune
                                </option>
                                <option
                                  value="#F0F"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Magenta
                                </option>
                                <option
                                  value="#0FF"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Cyan
                                </option>
                              </select>
                              <span className="box-border caret-transparent inline-block">
                                <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] max-w-[97.3333px] font-arial">
                                  <option
                                    value="1"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Opaque
                                  </option>
                                  <option
                                    value="0.5"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Semi-transparent
                                  </option>
                                </select>
                              </span>
                            </fieldset>
                            <fieldset className="box-border caret-transparent m-[5px] p-[3px]">
                              <legend className="box-border caret-transparent mb-[5px] px-0">
                                Arrière-plan
                              </legend>
                              <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] mr-[13.3333px] mb-[6.66667px] font-arial">
                                <option
                                  value="#000"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Noir
                                </option>
                                <option
                                  value="#FFF"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Blanc
                                </option>
                                <option
                                  value="#F00"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Rouge
                                </option>
                                <option
                                  value="#0F0"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Vert
                                </option>
                                <option
                                  value="#00F"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Bleu
                                </option>
                                <option
                                  value="#FF0"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Jaune
                                </option>
                                <option
                                  value="#F0F"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Magenta
                                </option>
                                <option
                                  value="#0FF"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Cyan
                                </option>
                              </select>
                              <span className="box-border caret-transparent inline-block">
                                <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] max-w-[97.3333px] font-arial">
                                  <option
                                    value="1"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Opaque
                                  </option>
                                  <option
                                    value="0.5"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Semi-transparent
                                  </option>
                                  <option
                                    value="0"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Transparent
                                  </option>
                                </select>
                              </span>
                            </fieldset>
                            <fieldset className="box-border caret-transparent m-[5px] p-[3px]">
                              <legend className="box-border caret-transparent mb-[5px] px-0">
                                Fenêtre
                              </legend>
                              <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] mr-[13.3333px] mb-[6.66667px] font-arial">
                                <option
                                  value="#000"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Noir
                                </option>
                                <option
                                  value="#FFF"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Blanc
                                </option>
                                <option
                                  value="#F00"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Rouge
                                </option>
                                <option
                                  value="#0F0"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Vert
                                </option>
                                <option
                                  value="#00F"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Bleu
                                </option>
                                <option
                                  value="#FF0"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Jaune
                                </option>
                                <option
                                  value="#F0F"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Magenta
                                </option>
                                <option
                                  value="#0FF"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Cyan
                                </option>
                              </select>
                              <span className="box-border caret-transparent inline-block">
                                <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] max-w-[97.3333px] font-arial">
                                  <option
                                    value="0"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Transparent
                                  </option>
                                  <option
                                    value="0.5"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Semi-transparent
                                  </option>
                                  <option
                                    value="1"
                                    className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                  >
                                    Opaque
                                  </option>
                                </select>
                              </span>
                            </fieldset>
                          </div>
                          <div className="box-border caret-transparent">
                            <fieldset className="box-border caret-transparent m-[5px] p-[3px]">
                              <legend className="box-border caret-transparent mb-[5px] px-0">
                                Taille des caractères
                              </legend>
                              <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] mr-[13.3333px] mb-[6.66667px] font-arial">
                                <option
                                  value="0.50"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  50%
                                </option>
                                <option
                                  value="0.75"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  75%
                                </option>
                                <option
                                  value="1.00"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  100%
                                </option>
                                <option
                                  value="1.25"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  125%
                                </option>
                                <option
                                  value="1.50"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  150%
                                </option>
                                <option
                                  value="1.75"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  175%
                                </option>
                                <option
                                  value="2.00"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  200%
                                </option>
                                <option
                                  value="3.00"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  300%
                                </option>
                                <option
                                  value="4.00"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  400%
                                </option>
                              </select>
                            </fieldset>
                            <fieldset className="box-border caret-transparent m-[5px] p-[3px]">
                              <legend className="box-border caret-transparent mb-[5px] px-0">
                                Style des contours du texte
                              </legend>
                              <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] mr-[13.3333px] mb-[6.66667px] font-arial">
                                <option
                                  value="none"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Aucun
                                </option>
                                <option
                                  value="raised"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Élevé
                                </option>
                                <option
                                  value="depressed"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Enfoncé
                                </option>
                                <option
                                  value="uniform"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Uniforme
                                </option>
                                <option
                                  value="dropshadow"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Ombre portée
                                </option>
                              </select>
                            </fieldset>
                            <fieldset className="box-border caret-transparent m-[5px] p-[3px]">
                              <legend className="box-border caret-transparent mb-[5px] px-0">
                                Famille de polices
                              </legend>
                              <select className="text-black text-[13.3333px] bg-zinc-100 caret-transparent leading-[normal] mr-[13.3333px] mb-[6.66667px] font-arial">
                                <option
                                  value="proportionalSansSerif"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Polices à chasse variable sans empattement
                                  (Proportional Sans-Serif)
                                </option>
                                <option
                                  value="monospaceSansSerif"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Polices à chasse fixe sans empattement
                                  (Monospace Sans-Serif)
                                </option>
                                <option
                                  value="proportionalSerif"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Polices à chasse variable avec empattement
                                  (Proportional Serif)
                                </option>
                                <option
                                  value="monospaceSerif"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Polices à chasse fixe avec empattement
                                  (Monospace Serif)
                                </option>
                                <option
                                  value="casual"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Manuscrite
                                </option>
                                <option
                                  value="script"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Scripte
                                </option>
                                <option
                                  value="small-caps"
                                  className="items-center caret-transparent gap-x-[6.66667px] min-h-6 min-w-6 gap-y-[6.66667px]"
                                >
                                  Petites capitales
                                </option>
                              </select>
                            </fieldset>
                          </div>
                          <div className="box-border caret-transparent col-end-[-1] col-start-1 text-right align-bottom">
                            <button
                              type="button"
                              title="Restaurer tous les paramètres aux valeurs par défaut"
                              className="appearance-none text-slate-800 bg-white bg-[linear-gradient(-180deg,rgb(255,255,255)_88%,rgb(115,133,159)_100%)] caret-transparent text-center mr-[19.2px] mb-5 p-0 rounded-sm font-arial"
                            >
                              Réinitialiser
                            </button>
                            <button
                              type="button"
                              className="appearance-none text-slate-800 bg-white bg-[linear-gradient(-180deg,rgb(255,255,255)_88%,rgb(115,133,159)_100%)] caret-transparent text-center p-0 rounded-sm font-arial"
                            >
                              Terminé
                            </button>
                          </div>
                        </div>
                        <button
                          type="button"
                          title="Fermer la boîte de dialogue modale"
                          className="absolute appearance-none bg-transparent caret-transparent block shrink-0 h-6 text-center w-6 z-[2] mx-2 p-0 right-0 top-2 font-arial"
                        >
                          <span className="box-border caret-transparent hidden font-videojs before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[28.8px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[48.096px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-videojs"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="button"
                className="static box-content caret-black h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
              >
                <div className="static box-content caret-black block flex-row h-auto justify-normal pointer-events-auto text-start w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:h-[33.3333%] md:justify-end md:break-words md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:top-[calc(66.6667%_-_48px)] md:w-[calc(100%_-_48px)] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-12">
                  <div className="box-content caret-black min-h-0 min-w-0 md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black block pointer-events-auto z-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:inline-block md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <button
                        aria-label="Regarder"
                        type="button"
                        className="static text-black font-normal [align-items:normal] bg-zinc-100 caret-black inline-block justify-normal leading-[normal] max-w-none min-h-0 text-center align-baseline z-auto mr-0 mt-0 px-1.5 py-px rounded-none font-arial md:relative md:appearance-none md:text-neutral-900 md:font-medium md:items-center md:aspect-auto md:bg-white md:caret-transparent md:inline-flex md:justify-center md:leading-6 md:max-w-full md:min-h-[34px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-top md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-1.5 md:mt-1.5 md:px-4 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:font-helvetica_now_text_medium before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-neutral-900 before:md:block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-medium before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:break-words before:md:pointer-events-auto before:md:absolute before:md:text-center before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:rounded-[30px] before:md:border-separate before:md:inset-0 before:md:font-helvetica_now_text_medium"
                      >
                        Regarder
                        <span className="box-content caret-black inline h-auto min-h-0 min-w-0 w-auto ml-0 md:aspect-auto md:box-border md:caret-transparent md:block md:h-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:[mask-position:0%] md:bg-left-top md:ml-1 md:scroll-m-0 md:scroll-p-[auto]">
                          <img
                            src="https://c.animaapp.com/mmmpddetmw6vVN/assets/icon-16.svg"
                            alt="Icon"
                            className="box-content caret-black block h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:inline md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          />
                        </span>
                        <span className="static bg-transparent bg-auto box-content caret-black inline h-auto opacity-100 pointer-events-auto transform-none w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-white/70 md:bg-size-[100%] md:box-border md:caret-transparent md:block md:h-[34px] md:opacity-0 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-17px] md:translate-y-[-17px] md:w-[34px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[30px] md:scale-[10] md:left-2/4 md:top-2/4"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
