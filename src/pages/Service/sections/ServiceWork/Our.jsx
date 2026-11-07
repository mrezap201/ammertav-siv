import { motion } from "framer-motion";
import { FaGlobe, FaLaptopCode, FaMobileAlt, FaCogs } from "react-icons/fa";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const serviceData = [
  {
    service: "Landing Page Development",
    icon: <FaGlobe size={38} className="text-accent-pink" />,
    bg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
    answer:
      "We design engaging, responsive landing pages focused on conversion. Each page is crafted to strengthen your brand identity and create a strong first impression.",
  },
  {
    service: "Web App Development",
    icon: <FaLaptopCode size={38} className="text-accent-pink" />,
    bg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
    answer:
      "We build scalable and fast web applications using technologies like React, Laravel, and Node.js — ready to support your business systems.",
  },
  {
    service: "Mobile App Development",
    icon: <FaMobileAlt size={38} className="text-accent-pink" />,
    bg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
    answer:
      "We develop native and hybrid mobile apps (iOS & Android) that are intuitive, modern, and easy to manage with an agile approach.",
  },
  {
    service: "Custom App Development",
    icon: <FaCogs size={38} className="text-accent-pink" />,
    bg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
    answer:
      "Custom application solutions tailored to your business needs — from discovery to maintenance. We act as your reliable technology partner.",
  },
];

function Our() {
  return (
    <div className="relative px-4 py-8 overflow-hidden md:px-20 md:py-20">

      <div className="relative z-10 mx-auto md:max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {serviceData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              whileHover={{ scale: 1.02 }}
              className="p-3 transition-transform duration-300 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-3xl md:p-6 shadow-l"
            >
              {/* Icon */}
              <div className={`w-24 h-24 mx-auto md:mx-0 ${item.bg} flex items-center justify-center rounded-full mb-4`}>
                {item.icon}
              </div>

              {/* Title + Description */}
              <h2 className="mb-2 text-lg font-semibold text-white md:text-2xl">
                {item.service}
              </h2>
              <p className="text-sm leading-relaxed text-white-600 md:text-base">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Our;
