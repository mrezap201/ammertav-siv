import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { animate, stagger } from "animejs";
import { useEffect} from "react";

import SectionOrbs from "../../../../components/background/SectionOrbs";
import { ORB_CONFIG } from "../../../../components/background/orbConfig";
export default function ServiceWorks() {
  
  
 useEffect(() => {
  animate(".bg-stagger div", {
    opacity: [0, 1],
    scale: [0.8, 1],
    ease: "outQuad",
    delay: stagger(80, { start: 100 }),
    duration: 600,
  });
}, []);

  const electricEffect = {
    animate: {
      textShadow: [
        "0px 0px 5px #ef00fc",
        "0px 0px 15px #ef00fc",
        "0px 0px 25px #ef00fc",
        "0px 0px 35px rgba(239,0,252,0.8)",
        "0px 0px 45px rgba(239,0,252,0.6)",
        "0px 0px 35px rgba(239,0,252,0.8)",
        "0px 0px 25px #ef00fc",
        "0px 0px 15px #ef00fc",
        "0px 0px 5px #ef00fc",
      ],
      opacity: [1, 0.8, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    // Top transparent so ServiceSection BG can bleed through; gradient fades to bg-ink
    <section className="relative w-full py-section">
        <SectionOrbs config={ORB_CONFIG.serviceNext} />
      <div className="relative z-[2] w-full max-w-container mx-auto px-page">
        {/* HEADER — left-aligned */}
        <div className="md:max-w-7xl w-full mx-auto h-[350px] md:h-[400px] overflow-hidden">
          <div className="mx-4 my-24 md:my-44 md:mx-0">
            <div className="items-center justify-between h-full space-y-2 md:flex md:space-y-0">
              <div className="w-2/3">
                <motion.h1
                  animate={electricEffect.animate}
                  className="text-4xl font-extrabold text-white md:text-7xl drop-shadow-lg">
                  <TypeAnimation
                    sequence={[
                      '"Services"', 2000,
                    ]}
                    speed={60}
                    repeat={Infinity}
                    cursor={true}
                  />
                </motion.h1>
              </div>
              <div className="my-auto md:w-1/3">
                <p className="text-lg text-white md:text-2xl">
                  We understand that every business has unique needs. That’s why we offer software development solutions tailored to your scale and goals.
                </p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}
