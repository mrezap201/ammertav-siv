import useDragScroll from "../../../../hooks/useDragScroll";

import robotImg from "../../../../assets/aboutRobot.webp";
import hexagon from "../../../../assets/tinyhex.webp";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

const steps = [
  { title: "250+", text: "PROJECT" },
  { title: "20+", text: "EMPLOYEES" },
  { title: "75+", text: "CLIENT" },
];

const innerGlow =
  "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)";

const overlayGlowRight =
  "radial-gradient(circle 360px at 80% 30%, rgba(0,140,255,0.18), transparent 70%)";

const overlayGlowLeft =
  "radial-gradient(circle 360px at 20% 70%, rgba(186,0,255,0.25), transparent 70%)";

export default function AboutSection() {
  const dragRef = useDragScroll();

  return (
    <section className="relative overflow-hidden text-white">
      {/* ORBS */}
      <SectionOrbs config={ORB_CONFIG.about} />

      {/* BG IMAGE */}
      <div className="absolute inset-x-0 top-0 -bottom-[230px] z-0 bg-contain bg-bottom bg-no-repeat pointer-events-none" />

      {/* OVERLAY GLOW */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: overlayGlowRight }}
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: overlayGlowLeft }}
      />

      {/* CONTENT */}
      <div className="relative z-[2] pt-24 md:pt-56 pb-12 md:pb-24">
        {/* MAIN GRID */}
  {/* MAIN GRID */}
<div className="flex flex-col items-center w-full gap-10 mx-auto text-center max-w-container px-page md:flex-row md:justify-between md:items-center md:text-left">

  {/* Robot — mepet kiri */}
  <div className="flex-shrink-0">
    <img
      loading="lazy"
      decoding="async"
      src={robotImg}
      alt="robot"
      className="w-64 h-auto max-w-full md:w-48 lg:w-80"
    />
  </div>

  {/* Text — mepet kanan, text align kiri */}
  <div className="flex flex-col items-start text-left gap-4 md:max-w-[55%] lg:max-w-[60%]">
    <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
      ABOUT <span className="font-bold text-accent-pink">US</span>
    </h2>
    <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
      WHAT IS AMMERTAV?
    </h3>
    <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
      AMMERTAV is a software house focused on building innovative,
      scalable, and future-ready digital solutions. We help businesses
      grow through modern web and mobile applications.
    </p>
    <p className="text-base font-semibold md:text-lg">
      WE&rsquo;VE SUCCESSFULLY DELIVERED 250+ PROJECTS.
    </p>
    <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
      We specialize{" "}
      <span className="font-bold">in full-stack development</span>,
      cloud technologies, and advanced system integration&mdash;ensuring
      your business thrives in the digital era.
    </p>
  </div>

</div>

        {/* WORKFLOW */}
        <div
          ref={dragRef}
          className="w-full max-w-container mx-auto px-6 md:px-page mt-12 md:mt-16 flex overflow-x-auto gap-8 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[260px] md:w-[300px] lg:w-full lg:max-w-[320px] lg:justify-self-center relative pt-9 flex justify-center"
            >
              {/* Floating hexagon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 size-[90px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={hexagon}
                  alt=""
                  className="w-full h-full object-contain [filter:drop-shadow(0_0_10px_rgba(168,85,247,0.4))]"
                />
              </div>

              <div
  className="!w-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  }}
>
  <div className="relative min-h-[240px] md:min-h-[280px] overflow-hidden flex flex-col justify-center items-center text-center pt-12 pb-6 px-6">
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
      style={{ background: innerGlow }}
    />

    <h3 className="relative mb-2 text-3xl font-bold leading-tight md:text-5xl md:mb-3">
      {step.title}
    </h3>

    <p className="relative text-xs md:text-sm text-fg-muted leading-relaxed max-w-[22ch]">
      {step.text}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}