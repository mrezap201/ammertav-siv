import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { GrTechnology, GrShieldSecurity } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaCogs, FaCheckCircle } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const newFadeIn = {
  hidden: { opacity: 0, y:40 },
  visible: { opacity: 1, y: 0 },
}


const whyItems = [
  {
    title: "Custom Solutions for Your Business",
    description: "We don't just build software, we craft solutions tailored to your business needs.",
    icon: FaCogs,
  },
  {
    title: "Cutting-Edge Technology",
    description: "Powered by the latest technology for optimal performance, high speed, and maximum efficiency.",
    icon: GrTechnology,
  },
  {
    title: "Scalable & High Performance",
    description: "Our solutions are built to grow with your business, with microservices architecture and optimized databases.",
    icon: AiOutlineCloudServer,
  },
  {
    title: "Security & Reliability",
    description: "Security is our top priority. With data encryption, automatic backups, and reliable servers, your business stays safe.",
    icon: GrShieldSecurity,
  },
  {
    title: "Fast Support & Maintenance",
    description: "Our team is ready to assist quickly to ensure your app runs smoothly without interruptions.",
    icon: MdOutlineSupportAgent,
  },
  {
    title: "Proven Track Record",
    description: "We’ve helped various businesses build efficient and user-friendly systems.",
    icon: FaCheckCircle,
  },
];

function Why() {
  return (
    <div className="relative px-4 py-10 md:py-20 md:px-20">
      {/* Background effect */}
      <motion.div
        className="absolute rounded-full right-[320px] bg-accent-pink top-[150px] w-44 md:w-80 h-44 md:h-80 opacity-60 blur-3xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div className="mx-auto space-y-2 md:space-y-4 md:max-w-7xl">
        <motion.div
          className="space-y-2 md:space-y-4"
          variants={newFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut"}}
          >
          {/* Section title */}
          <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
                WHY CHOOSE <span className="font-bold text-accent-pink">US</span>
          </h2>

          {/* Animated title */}
          <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                OUR ADVETAGES
              </h3>

          {/* Section description */}
          <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
            We deliver innovative solutions using the latest technology, top performance,
            and exceptional service to ensure you have the best experience possible.
            Security, speed, and reliability are our top priorities.
          </p>
        </motion.div>
        

        {/* Mobile swiper */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {whyItems.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  className="flex flex-col items-center p-2 text-center border shadow-lg bg-white/10 backdrop-blur-md border-white/20 h-60 rounded-3xl"
                >
                  <div className="flex items-center justify-center w-20 h-20 p-3 rounded-full bg-white/10">
                    <item.icon className="text-5xl text-accent-pink" />
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-white/90">{item.title}</h2>
                  <p className="mt-2 text-base font-light text-white/80">{item.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop grid */}
        <div className="hidden grid-cols-3 gap-8 md:grid">
          {whyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="flex flex-col items-center p-6 text-center border shadow-lg bg-white/10 backdrop-blur-md border-white/20 rounded-3xl h-80"
            >
              <div className="flex items-center justify-center w-32 h-32 p-5 rounded-full bg-white/10">
                <item.icon className="text-7xl text-accent-pink" />
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white/90">{item.title}</h2>
              <p className="mt-2 text-base font-light text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;