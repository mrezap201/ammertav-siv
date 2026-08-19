import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoArrowRedoSharp, IoArrowDownOutline } from "react-icons/io5";


export default function Hero() {
  const arrowRef = useRef(null);

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

const electricEffect = {
  animate: {
    textShadow: [
      "0px 0px 5px #BF00FF",
      "0px 0px 15px #BF00FF",
      "0px 0px 25px #9400D3",
      "0px 0px 35px #8A2BE2",
      "0px 0px 45px #4B0082",
      "0px 0px 35px #8A2BE2",
      "0px 0px 25px #9400D3",
      "0px 0px 15px #BF00FF",
      "0px 0px 5px #BF00FF",
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
    <section className="relative flex flex-col items-center justify-center w-full h-screen px-4 text-center">

      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full left-1/25 top-1/2 bg-accent-pink w-55 md:w-80 h-55 md:h-80 opacity-60 blur-3xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full mx-auto space-y-6 text-center md:max-w-7xl">
        
        <motion.h1
          className="text-4xl font-extrabold text-white md:text-7xl drop-shadow-lg"
          animate={electricEffect.animate}
        >
          <TypeAnimation
            sequence={[
              '"Your Trusted Technology Partner"', 2000,
              '"Building Scalable Solutions"', 2000,
              '"Driving Innovation Forward"', 2000,
            ]}
            speed={60}
            repeat={Infinity}
            cursor={true}
          />
        </motion.h1>

        <p className="text-lg text-white md:text-2xl md:max-w-2xl">
          We design reliable, high-performance software tailored to your future-ready needs.
        </p>

        <div className="flex gap-4">
          <div
            className="px-6 py-3 transition-transform transform shadow-md bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl hover:scale-105">
            <a href="/contact">
              <h1 className="text-lg font-semibold text-white md:text-xl">
                Get Started
              </h1>
            </a>
          </div>
          <div className="my-auto">
            <a href="/product">
              <div className="flex items-center text-lg text-white transition-all md:text-xl hover:text-gray-700">
                View Our Partners
                <IoArrowRedoSharp className="w-6 h-6 ml-2" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
        <button
          ref={arrowRef}
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="flex items-center justify-center py-4 border border-white rounded-full animate-bounce"
        >
          <IoArrowDownOutline className="text-gray-100 w-14 h-14 md:w-20 md:h-20" />
        </button>
      </div>

    </section>
  );
}
