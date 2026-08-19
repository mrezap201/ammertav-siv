import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Ali from "../../../../assets/images/partner/Ali";
import Aws from "../../../../assets/images/partner/Aws";
import Biz from "../../../../assets/images/partner/Biz";
import Nia from "../../../../assets/images/partner/Nia";
import Ver from "../../../../assets/images/partner/Ver";
import Mid from "../../../../assets/images/partner/Mid";
import Cloud from "../../../../assets/images/partner/Cloud";
import Google from "../../../../assets/images/partner/Google";

const viewportSettings = { once: true, amount: 0.2 };

const items = [
    { icon: <Ali /> },
    { icon: <Aws /> },
    { icon: <Biz /> },
    { icon: <Cloud /> },
    { icon: <Google /> },
    { icon: <Ver /> },
    { icon: <Mid /> },
    { icon: <Nia /> },

];

/* Motion Variants */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
};

function Partner() {
    return (
        <div className="relative px-4 py-10 overflow-hidden md:px-20">
            <div className="relative z-10 mx-auto space-y-4 text-left md:space-y-8 md:max-w-7xl">

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
                        {items.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <motion.div className="flex flex-col items-center w-full h-16 p-4 text-center border shadow-lg bg-white/10 backdrop-blur-md md:h-24 rounded-3xl md:p-6 border-white/20"
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
}

export default Partner;
