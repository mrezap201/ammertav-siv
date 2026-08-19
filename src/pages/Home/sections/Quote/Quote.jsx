import { motion } from "framer-motion";

/* Motion Variants */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInUp={
  hidden: { opacity: 0, y: 40 },
  visible: { opacity:1, y:0 },
}

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

const underlineEffect = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

function Quote() {
    return (
    <motion.div 
      className="relative flex flex-col items-center w-full py-16 text-center h-fit md:py-32 "
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2}}
      transition={{ duration: 0.6, ease: "easeOut"}}
      >

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative w-4/5 text-3xl font-extrabold text-white md:text-5xl md:w-2/3"
      >
        <motion.span variants={electricEffect} animate="animate" className="inline-block">
        "The best way to predict the future is to invent it."
        </motion.span>
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={underlineEffect}
        className="w-32 h-1 mt-2 md:w-1/4 bg-accent-pink"
      />
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mt-3 text-lg text-gray-300"
      >
      – Alan Kay
      </motion.p>
    </motion.div>
  );
}

export default Quote;