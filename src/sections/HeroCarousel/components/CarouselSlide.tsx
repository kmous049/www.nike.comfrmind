import { useEffect, useState } from "react";

export const CarouselSlide = () => {
  const [scanPos, setScanPos] = useState(20);
  const [scanDir, setScanDir] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanPos((prev) => {
        const next = prev + scanDir * 0.4;
        if (next > 80) { setScanDir(-1); return 80; }
        if (next < 20) { setScanDir(1); return 20; }
        return next;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [scanDir]);

  return (
    <div className="relative text-base box-border caret-transparent inline-block leading-7 min-h-px align-top w-full">
      <div
        role="region"
        aria-label="Hero visuel Nike Mind"
        className="relative box-border caret-transparent h-full w-full overflow-hidden"
      >
        {/* Hero image — aspect 9/16 on mobile, wide on desktop */}
        <div className="relative aspect-[9/16] sm:aspect-[3/4] md:aspect-[72/35] w-full overflow-hidden bg-black">
          <img
            src="https://c.animaapp.com/mmmpddetmw6vVN/assets/nike-mind.jpg"
            alt="Nike Mind"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "brightness(0.85)" }}
          />

          {/* === MRI OVERLAY === */}
          <div className="absolute inset-0 pointer-events-none font-mono" style={{ fontFamily: "'Courier New', monospace" }}>

            {/* Animated scan line */}
            <div
              className="absolute left-0 right-0 h-px opacity-60 transition-none"
              style={{
                top: `${scanPos}%`,
                background: "linear-gradient(90deg, transparent 0%, rgba(255,60,60,0.8) 20%, rgba(255,80,80,1) 50%, rgba(255,60,60,0.8) 80%, transparent 100%)",
                boxShadow: "0 0 8px 2px rgba(255,50,50,0.4)",
              }}
            />
            {/* Thin secondary scan line */}
            <div
              className="absolute left-0 right-0 h-px opacity-20"
              style={{
                top: `${scanPos + 0.6}%`,
                background: "linear-gradient(90deg, transparent 0%, rgba(255,60,60,0.5) 30%, rgba(255,80,80,0.7) 50%, rgba(255,60,60,0.5) 70%, transparent 100%)",
              }}
            />

            {/* TOP-LEFT metadata */}
            <div className="absolute top-3 left-3 md:top-5 md:left-5 text-white leading-[1.6] text-[8px] md:text-[10px] lg:text-[11px] tracking-wider">
              <div className="flex gap-3 md:gap-4">
                <span className="opacity-70">T1 SE FUSION</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <span className="opacity-70">C</span>
                <span className="opacity-90">SENSORY.COG</span>
              </div>
              <div className="flex gap-3 md:gap-4 mt-1">
                <span className="opacity-70">Se</span>
                <span className="opacity-90">6/6</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <span className="opacity-70">Im</span>
                <span className="opacity-90">6/6</span>
              </div>
              <div className="flex gap-3 md:gap-4 mt-1">
                <span className="opacity-70">Net</span>
                <span className="opacity-90">MG.SYNTHESIS.01</span>
              </div>
            </div>

            {/* TOP-RIGHT metadata */}
            <div className="absolute top-3 right-3 md:top-5 md:right-5 text-white text-right leading-[1.6] text-[8px] md:text-[10px] lg:text-[11px] tracking-wider">
              <div className="opacity-70">MRI</div>
              <div className="opacity-90">SAGITTAL PLANE</div>
              <div className="opacity-90">INFERIOR-SUPERIOR</div>
            </div>

            {/* BOTTOM-LEFT metadata */}
            <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 text-white leading-[1.6] text-[8px] md:text-[10px] lg:text-[11px] tracking-wider">
              <div className="flex gap-3 md:gap-4">
                <span className="opacity-70">Et</span>
                <span className="opacity-90">0</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <span className="opacity-70">Tr</span>
                <span className="opacity-90">CONTINUOUS</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <span className="opacity-70">Te</span>
                <span className="opacity-90">INTEGRATED</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <span className="opacity-70">Ma</span>
                <span className="opacity-90">MIND SCIENCES</span>
              </div>
              <div className="mt-1 opacity-90 leading-[1.8]">
                <div>5.0tH/4.0sp</div>
                <div>Nike / MG-SYN-001</div>
                <div>MASTER01 S25-MIND</div>
              </div>
              <div className="mt-1 opacity-70">DFOV 23.0 x 23.0cm</div>
            </div>

            {/* BOTTOM-RIGHT timestamp */}
            <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 text-white text-right leading-[1.8] text-[8px] md:text-[10px] lg:text-[11px] tracking-wider">
              <div className="opacity-90">MG_SYNTH_2025</div>
              <MriClock />
            </div>

            {/* Corner crosshair marks */}
            {/* Top-left cross */}
            <div className="absolute top-[18%] left-[8%] md:top-[22%] md:left-[6%] opacity-30">
              <div className="w-3 md:w-4 h-px bg-white absolute top-1/2 -translate-y-1/2 left-0" />
              <div className="h-3 md:h-4 w-px bg-white absolute left-1/2 -translate-x-1/2 top-0" />
            </div>
            {/* Top-right cross */}
            <div className="absolute top-[18%] right-[8%] md:top-[22%] md:right-[6%] opacity-30">
              <div className="w-3 md:w-4 h-px bg-white absolute top-1/2 -translate-y-1/2 left-0" />
              <div className="h-3 md:h-4 w-px bg-white absolute left-1/2 -translate-x-1/2 top-0" />
            </div>
            {/* Bottom-left cross */}
            <div className="absolute bottom-[22%] left-[8%] md:bottom-[26%] md:left-[6%] opacity-30">
              <div className="w-3 md:w-4 h-px bg-white absolute top-1/2 -translate-y-1/2 left-0" />
              <div className="h-3 md:h-4 w-px bg-white absolute left-1/2 -translate-x-1/2 top-0" />
            </div>
            {/* Bottom-right cross */}
            <div className="absolute bottom-[22%] right-[8%] md:bottom-[26%] md:right-[6%] opacity-30">
              <div className="w-3 md:w-4 h-px bg-white absolute top-1/2 -translate-y-1/2 left-0" />
              <div className="h-3 md:h-4 w-px bg-white absolute left-1/2 -translate-x-1/2 top-0" />
            </div>

            {/* Subtle red vignette */}
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(180,0,0,0.5) 100%)" }}
            />
          </div>
          {/* === END MRI OVERLAY === */}
        </div>
      </div>
    </div>
  );
};

function MriClock() {
  const [time, setTime] = useState(() => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  });
  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      setTime(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "00")}`);
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return <div className="opacity-90">{time}</div>;
}
