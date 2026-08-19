import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { FaGlobe, FaLaptopCode, FaMobileAlt, FaCogs } from "react-icons/fa";


const serviceData = [
  {
    service: "Landing Page Development",
    icon: <FaGlobe />,
    answer:
      "We design engaging, responsive, and conversion-optimized landing pages to increase your business visibility.",
  },
  {
    service: "Web App Development",
    icon: <FaLaptopCode />,
    answer:
      "We build interactive, fast, and secure web applications using modern technologies to support your business growth.",
  },
  {
    service: "Mobile App Development",
    icon: <FaMobileAlt />,
    answer:
      "We develop high-performance mobile apps for both iOS and Android with intuitive user experiences.",
  },
  {
    service: "Custom App Development",
    icon: <FaCogs />,
    answer:
      "We offer custom application solutions tailored to your business needs, from planning to implementation.",
  },
];

const fadeInUp ={
  hidden: {opacity: 0, y: 40},
  visible: {opacity: 1, y: 40},
};


const Service = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative px-4 py-10 md:py-20 md:px-20">
     
      <motion.div
        className="absolute rounded-full left-[300px] bg-accent-pink top-[100px] w-55 md:w-80 h-55 md:h-80 opacity-60 blur-3xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      

      <div className="grid grid-cols-1 gap-4 mx-auto md:gap-8 md:grid-cols-2 md:max-w-7xl">
        <motion.div 
          className="my-auto space-y-2 md:space-y-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2}}
          transition={{ duration: 0.6, ease:"easeOut"}}
        >
            <h2 className="tracking-[6px] font-thin text-lg md:text-xl uppercase">
              OUR <span className="font-bold text-accent-pink">SERVICES</span>
            </h2>
            <h3 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              FROM IDEAS TO DIGITAL SOLUTIONS
            </h3>
          <p className="text-sm leading-relaxed md:text-base lg:max-w-prose">
            Transform your business with innovative technology! We deliver digital solutions that accelerate growth, enhance productivity, and ensure a competitive edge!
          </p>
        </motion.div>

        {/* Right Side (Service List) */}
        <motion.div 
          className="space-y-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15}}
          >
          {serviceData.map((service, index) => (
            <div key={index} className="pb-2 border-b border-gray-700">
              <button
                className="flex items-center justify-between w-full py-3 text-lg font-semibold text-left text-gray-100 md:text-xl focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center gap-3">
                  {service.icon}
                  {service.service}
                </span>
                {openIndex === index ? (
                  <FiChevronUp className="text-gray-100" />
                ) : (
                  <FiChevronDown className="text-gray-100" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-lg text-gray-300 md:text-xl">
                  {service.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;