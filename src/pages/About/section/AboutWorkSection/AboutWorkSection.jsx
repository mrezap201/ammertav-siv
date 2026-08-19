import { GlassCard } from "react-glass-ui";

import work1 from "../../../../assets/images/codefy.png";
import work2 from "../../../../assets/mrtek.webp";
import work3 from "../../../../assets/harmain.webp";
import work4 from "../../../../assets/ramstainless.webp";
import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";

const works = [
  { id: 1, title: "Codefy", image: work1 },
  { id: 2, title: "MR.Teknik", image: work2 },
  { id: 3, title: "Noorharamain", image: work3 },
  { id: 4, title: "Ram Stainless", image: work4 },
];

export default function AboutWorkSection() {
  return (
    // Top transparent so AboutSection BG can bleed through; gradient fades to bg-ink
    <section className="relative w-full overflow-hidden ">
      <div className="absolute inset-0 z-0 pointer-events-none">
    <SectionOrbs config={ORB_CONFIG.tech} />
  </div>
      

      <div className="relative z-[2] w-full max-w-container mx-auto px-page text-white">
        {/* HEADER — left-aligned */}
        <div className="flex flex-col gap-4 lg:gap-5 max-w-[760px] text-left items-start">
          <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
            OUR <span className="font-bold text-accent-pink">WORKS</span>
          </h2>

          <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            SELECTED PROJECTS WE&rsquo;VE DELIVERED
          </h3>
        </div>

        {/* GRID — 1 col mobile, 2 cols md+ */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:mt-16 md:grid-cols-2 md:gap-10">
          {works.map((work) => (
            <article
              key={work.id}
              className="group flex flex-col gap-3.5"
            >
              {/* Image card */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/25">
                <img loading="lazy" decoding="async"
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* Title badge — glass */}
              <GlassCard
                className="!w-full !rounded-2xl overflow-hidden"
                borderColor="#ffffff"
                borderSize={0.5}
                borderOpacity={0.2}
                borderRadius={16}
              >
                <div className="px-4 py-3 text-center">
                  <h4 className="text-sm font-semibold md:text-base">
                    {work.title}
                  </h4>
                </div>
              </GlassCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
