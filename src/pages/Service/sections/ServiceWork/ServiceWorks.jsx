import useDragScroll from "../../../../hooks/useDragScroll";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

const steps = [
  {
    title: "Requirement & Consultation",
    desc: "We discuss your business goals, target users, and technical requirements to ensure the right website solution from the start.",
  },
  {
    title: "UI/UX Design",
    desc: "We design a clean, modern, and responsive interface focused on usability, branding, and user experience.",
  },
  {
    title: "Development",
    desc: "We develop your website using clean code, modern frameworks, and performance-focused architecture.",
  },
  {
    title: "Launch & Optimization",
    desc: "We deploy, test, and optimize your website to ensure speed, security, and long-term stability.",
  },
];

const innerCardGlow =
  "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)";

export default function ServiceWorks() {
  const dragRef = useDragScroll();

  return (
    // Top transparent so ServiceSection BG can bleed through; gradient fades to bg-ink
    <section className="relative w-full py-section">
        <SectionOrbs config={ORB_CONFIG.serviceNext} />
      <div className="relative z-[2] w-full max-w-container mx-auto px-page">
        {/* HEADER — left-aligned */}
        <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] text-left items-start">
          <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
            HOW IT <span className="font-bold text-accent-pink">WORKS</span>
          </h2>

          <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            WEBSITE DEVELOPMENT PROCESS
          </h3>

          <p className="text-sm leading-relaxed md:text-base text-fg-muted lg:max-w-prose">
            A Structured And Transparent Workflow To Deliver High-Quality,
            Scalable, And Reliable Websites Tailored To Your Business Needs.
          </p>
        </div>

        {/* WORKFLOW CARDS — flex scroll mobile/md, grid at lg+ */}
        <div ref={dragRef} className="mt-12 md:mt-16 flex overflow-x-auto gap-6 md:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible text-white">
          {steps.map((step, index) => (
            <article
              key={index}
              className="snap-start flex-shrink-0 w-[260px] md:w-[280px] lg:w-full"
            >
              <div
  className="!w-full !h-full !rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
  style={{
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  }}
>
  <div className="relative min-h-[220px] md:min-h-[240px] overflow-hidden flex flex-col justify-center text-center p-6">
    {/* Inner radial glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] blur-2xl pointer-events-none"
      style={{ background: innerCardGlow }}
    />

    <h4 className="relative mb-3 text-lg font-bold md:text-xl">
      {step.title}
    </h4>
    <p className="relative text-xs leading-relaxed md:text-sm text-fg-muted">
      {step.desc}
    </p>
  </div>
</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
