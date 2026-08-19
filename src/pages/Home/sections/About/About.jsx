import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import { FaTrophy, FaProjectDiagram, FaUsers } from "react-icons/fa";

import robotImg from "../../../../assets/images/about.jpeg";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const newFadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity:1, y: 0},
}

function useCountAnimation(target) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, viewportSettings);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return { count, ref };
}


export default function About() {

  const { count: projects, ref: projectsRef } = useCountAnimation(50);
  const { count: clients, ref: clientsRef } = useCountAnimation(50);
  const { count: awards, ref: awardsRef } = useCountAnimation(2);

  return (
    <section className="relative text-white">
      <motion.div
        className="absolute rounded-full right-[320px] bg-accent-pink top-[150px] w-44 md:w-80 h-44 md:h-80 opacity-60 blur-3xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      {/* CONTENT */}
      <div className="relative py-12 md:py-32 px-6 md:px-24 z-[-2]">
        
        {/* MAIN GRID */}
        <div className="relative grid items-center grid-cols-1 gap-10 mx-auto md:grid-cols-2 md:gap-20 md:max-w-7xl">
          <motion.div
            variants={newFadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease:"easeOut" }}
            >
            {/* Robot — center at mobile, hug column at md+ */}
            <div className="flex justify-center flex-shrink-0 md:justify-start">
              <img loading="lazy" decoding="async"
                src={robotImg}
                alt="robot"
                className="rounded-md shadow-md md:w-3/4"
              />
            </div>
          </motion.div>
          

          {/* Text */}
          <div className="space-y-2 md:space-y-4">
            <motion.div
              className="space-y-2 md:space-y-4"
              variants={newFadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              >
              <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
                ABOUT <span className="font-bold text-accent-pink">US</span>
              </h2>

              <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                WHAT IS AMMERTAV ?
              </h3>

              <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
                AMMERTAV is a software house focused on building innovative, scalable, and future-ready digital solutions.
                We help businesses grow through modern web and mobile applications.
              </p>

              <p className="text-base font-semibold md:text-lg">
                We help businesses turn ideas into reliable digital products.
              </p>

              <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
                We specialize <span className="font-bold">in full-stack development</span>, cloud technologies, and advanced system integration&mdash;ensuring your business thrives in the digital era.
              </p>
            </motion.div>
            

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-3 gap-3 p-2 text-center border shadow-lg md:gap-6 bg-white/10 backdrop-blur-md border-white/20 md:p-4 rounded-3xl"
            >
              <div ref={projectsRef} className="flex flex-col items-center">
                <FaProjectDiagram className="mb-2 text-2xl text-blue-500 md:text-5xl" />
                <motion.h1 className="text-xl font-semibold text-white md:text-5xl">
                  {projects}+
                </motion.h1>
                <span className="text-base text-white md:text-lg">Projects</span>
              </div>
              <div ref={clientsRef} className="flex flex-col items-center">
                <FaUsers className="mb-2 text-2xl text-green-500 md:text-5xl" />
                <motion.h1 className="text-xl font-semibold text-white md:text-5xl">
                  {clients}+
                </motion.h1>
                <span className="text-base text-white md:text-lg">Clients</span>
              </div>
              <div ref={awardsRef} className="flex flex-col items-center">
                <FaTrophy className="mb-2 text-2xl text-yellow-500 md:text-5xl" />
                <motion.h1 className="text-xl font-semibold text-white md:text-5xl">
                  {awards}+
                </motion.h1>
                <span className="text-base text-white md:text-lg">Experiences</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}