import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInSmall = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y:40 },
  visible: { opacity: 1, y: 0},
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
    opacity: [1, 0.85, 1], // Subtle pulsing effect
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Ready() {

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center w-full h-screen px-4 text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut"}}
      >
      <motion.div
        className="absolute rounded-full left-[800px] bg-accent-pink top-[500px] w-55 md:w-80 h-55 md:h-80 opacity-60 blur-3xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <div className="mx-auto space-y-6 md:max-w-7xl">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          animate={electricEffect.animate}
          className="text-4xl font-extrabold text-center text-white md:text-7xl drop-shadow-lg"
        >
          "Ready to Start Your Own Project?"
        </motion.h1>

        <motion.p
          variants={fadeInSmall}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mx-auto text-lg text-white md:text-2xl md:max-w-2xl"
        >
          Let’s build something amazing together with scalable, future-ready technology.
        </motion.p>

        <div
          className="px-6 py-3 mx-auto text-xl font-semibold text-white transition-transform transform shadow-md md:text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl hover:scale-105 w-fit"
        >
          <a href="/contact">
            <h1>Contact Us</h1>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Ready;