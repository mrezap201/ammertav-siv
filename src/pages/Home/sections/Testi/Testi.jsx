import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import quote from "../../../../assets/images/quote.png";
import { motion } from "framer-motion";
// import { GrTechnology } from "react-icons/gr";

const viewportSettings = { once: true, amount: 0.2 };

const imageMotion = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
  viewport: viewportSettings,
};

const textMotion = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { delay: 0.5, duration: 1 },
  viewport: viewportSettings,
};

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: viewportSettings,
};

// const electricEffect = {
//   animate: {
//     textShadow: [
//       "0px 0px 5px #00FFFF",
//       "0px 0px 15px #00FFFF",
//       "0px 0px 25px #00BFFF",
//       "0px 0px 35px #1E90FF",
//       "0px 0px 45px #007FFF",
//       "0px 0px 35px #1E90FF",
//       "0px 0px 25px #00BFFF",
//       "0px 0px 15px #00FFFF",
//       "0px 0px 5px #00FFFF",
//     ],
//     opacity: [1, 0.85, 1],
//     transition: {
//       repeat: Infinity,
//       duration: 2,
//       ease: "easeInOut",
//     },
//   },
// };

function Testi() {
  const testiItems = [
    {
      description:
        "Previously, we struggled to manage our business system. After using this team's solution, everything runs much more smoothly and efficiently!",
      name: "Rizky Saputra",
    },
    {
      description:
        "The development process was very fast and the result is amazing! We got software that truly matches our needs.",
      name: "Dian Permata",
    },
    {
      description:
        "We needed a scalable tech solution for our business. This team delivered more than we expected!",
      name: "Surya Wijaya",
    },
    {
      description:
        "Outstanding service! From the initial discussion to implementation, the team was very responsive and helped us achieve the best outcome.",
      name: "Nadia Fitri",
    },
    {
      description:
        "The best choice for software development! Their after-sales support is also very responsive.",
      name: "Arif Pratama",
    },
  ];

  return (
    <div className="relative px-4 py-10 md:py-20 md:px-20">
      {/* Background Effect */}
      <motion.div
        className="absolute left-0 rounded-full top-20 w-44 md:w-60 h-44 md:h-60 bg-cyan-400 opacity-60 blur-3xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="mx-auto space-y-2 md:space-y-4 md:max-w-7xl">
        {/* Section Title */}
        <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
          OUR CLIENTS<span className="font-bold text-accent-pink"> SUCCESS STORIES</span>
        </h2>

        {/* Animated Heading */}
        <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          WHY CHOOSE US
        </h3>

        {/* Section Description */}
        <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
          We are your trusted partner in innovative and reliable software development. With modern technology, expert teams, and a business-focused approach, we are ready to deliver the best digital solutions.
        </p>

        {/* Swiper for Mobile */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {testiItems.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  {...cardMotion}
                  className="h-64 p-4 text-center bg-gray-300 shadow-lg rounded-3xl"
                >
                  <motion.img
                    {...imageMotion}
                    className="w-10 h-10 mx-auto mb-4"
                    src={quote}
                    alt="quote"
                  />
                  <motion.p
                    {...textMotion}
                    className="text-lg italic text-gray-700"
                  >
                    {item.description}
                  </motion.p>
                  <motion.h1
                    {...textMotion}
                    className="mt-4 text-lg font-semibold text-cyan-500"
                  >
                    {item.name}
                  </motion.h1>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper for Desktop */}
        <div className="hidden md:block">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {testiItems.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  {...cardMotion}
                  className="flex flex-col justify-between h-64 p-6 text-center bg-gray-300 shadow-lg rounded-3xl"
                >
                  <motion.img
                    {...imageMotion}
                    className="w-12 h-12 mx-auto"
                    src={quote}
                    alt="quote"
                  />
                  <motion.p
                    {...textMotion}
                    className="text-xl italic text-gray-700"
                  >
                    {item.description}
                  </motion.p>
                  <motion.h1
                    {...textMotion}
                    className="text-2xl font-semibold text-accent-pink"
                  >
                    {item.name}
                  </motion.h1>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testi;
