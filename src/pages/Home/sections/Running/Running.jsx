import { motion } from "framer-motion";

/* Motion Variants */
const marqueeVariants = {
    animate: {
        x: ["100%", "-100%"],
        transition: { duration: 12, repeat: Infinity, ease: "linear" }
    }
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

function Running() {
    return (
        <div className="relative w-full h-fit overflow-hidden z-30 py-4 md:py-8">
            {/* Marquee Text */}
            <motion.div
                className="flex space-x-8 md:space-x-16 whitespace-nowrap"
                variants={marqueeVariants}
                animate="animate"
            >
                {["Custom Software", "Web Development", "Mobile Apps", "Cloud Solutions", "SaaS Development", "Enterprise Systems", "UI/UX Design", "API Integration"].map((text, index) => (
                    <motion.h1
                        animate={electricEffect.animate}
                        key={index}
                        className="text-white text-2xl md:text-5xl font-extrabold flex items-center"
                    >
                        {text} 
                    </motion.h1>
                ))}
            </motion.div>
        </div>
    );
}

export default Running;
