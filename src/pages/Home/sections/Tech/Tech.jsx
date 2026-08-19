import { Swiper, SwiperSlide } from "swiper/react";
// import { GrTechnology } from "react-icons/gr";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Html from "../../../../assets/images/Html";
import Css from "../../../../assets/images/Css";
import Java from "../../../../assets/images/Java";
import Mysql from "../../../../assets/images/Mysql";
import Redis from "../../../../assets/images/Redis";
import Laravel from "../../../../assets/images/Laravel";
import Reactjs from "../../../../assets/images/Reactjs";
import Adonis from "../../../../assets/images/Adonis";
import Next from "../../../../assets/images/Next";
import Docker from "../../../../assets/images/Docker";
import Git from "../../../../assets/images/Git";
import Hub from "../../../../assets/images/Hub";
import Vsc from "../../../../assets/images/Vsc";

const viewportSettings = { once: true, amount: 0.2 };

const techs = [
    { icon: <Html /> },
    { icon: <Css /> },
    { icon: <Java /> },
    { icon: <Mysql /> },
    { icon: <Redis /> },
    { icon: <Laravel /> },
    { icon: <Reactjs /> },
    { icon: <Adonis /> },
    { icon: <Next /> },
    { icon: <Docker /> },
    { icon: <Git /> },
    { icon: <Hub /> },
    { icon: <Vsc /> }
];

const newFadeInUp = {
    hidden: { opacity: 0, y:40},
    visible: { opacity: 1, y: 0},
}

// const electricEffect = {
//     animate: {
//         textShadow: [
//             "0px 0px 5px #BF00FF",
//             "0px 0px 15px #BF00FF",
//             "0px 0px 25px #9400D3",
//             "0px 0px 35px #8A2BE2",
//             "0px 0px 45px #4B0082",
//             "0px 0px 35px #8A2BE2",
//             "0px 0px 25px #9400D3",
//             "0px 0px 15px #BF00FF",
//             "0px 0px 5px #BF00FF",
//         ],
//         opacity: [1, 0.85, 1],
//         transition: {
//             repeat: Infinity,
//             duration: 2,
//             ease: "easeInOut",
//         },
//     },
// };

/* Motion Variants */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const Tech = () => {
    return (
        <div className="relative px-4 py-10 overflow-hidden md:py-20 md:px-20">
            <motion.div
                className="absolute rounded-full left-[300px] bg-accent-pink top-[80px] w-55 md:w-80 h-55 md:h-80 opacity-60 blur-3xl"
                animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <div className="relative z-10 mx-auto space-y-2 text-left md:space-y-4 md:max-w-7xl">
                <motion.div
                    className="space-y-2 md:space-y-4"
                    variants={newFadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration:0.6, ease: "easeOut" }}
                    >
                    <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
                     OUR  <span className="font-bold text-accent-pink">TECHNOLOGIES</span>
                    </h2>
                    <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                        FONDATION OF THE DIGITAL FUTURE
                    </h3>
                    <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
                        We build digital solutions using modern technology to drive business efficiency and growth. Powered by top technology stacks like Laravel, React, Redis, MySQL, and Docker.
                    </p>
                </motion.div>
                
                <motion.div className="relative flex-col items-center justify-center space-y-6 md:flex"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <Swiper
                        loop={true}
                        slidesPerView={2.2}
                        spaceBetween={20}
                        breakpoints={{ 1024: { slidesPerView: 5 } }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        className="w-full h-full"
                    >
                        {techs.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <motion.div className="flex flex-col items-center w-full h-16 p-4 text-center border shadow-lg bg-white/10 backdrop-blur-md border-white/20 rounded-3xl md:h-24 md:p-6"
                                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportSettings}>
                                    {tech.icon}
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </div>
    );
};

export default Tech;