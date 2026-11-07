import { motion } from "framer-motion";
import { GrTechnology } from "react-icons/gr";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const electricEffect = {
  animate: {
    textShadow: [
      "0px 0px 5px #ef00fc",
        "0px 0px 15px #ef00fc",
        "0px 0px 25px #ef00fc",
        "0px 0px 35px rgba(239,0,252,0.8)",
        "0px 0px 45px rgba(239,0,252,0.6)",
        "0px 0px 35px rgba(239,0,252,0.8)",
        "0px 0px 25px #ef00fc",
        "0px 0px 15px #ef00fc",
        "0px 0px 5px #ef00fc",
    ],
    opacity: [1, 0.85, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};


function ContactUs() {
  return (
    <section className="relative h-full px-4 overflow-hidden text-white md:px-20">

      {/* Content Container */}
      <div className="relative z-10 mx-auto space-y-4 md:space-y-8 md:max-w-7xl my-28 md:my-44">
        {/* Headline and Subcopy */}
        <motion.h1 animate={electricEffect.animate} className="flex items-center justify-center gap-3 text-3xl font-extrabold text-white md:text-5xl">
          <GrTechnology className="text-accent-pink" />
          Let's Build Together
          </motion.h1>
        <p className="mx-auto text-lg text-center text-white md:text-2xl md:max-w-5xl">
          Whether you're launching a new product, revamping an existing platform, or just exploring an idea — our team is ready to turn your vision into reality.
          Fill out the form below and let’s talk about how we can help you grow.
        </p>

        {/* Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          whileHover={{ scale: 1.015 }}
        >
          <form className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
            {/* Left Column */}
            <div className="space-y-2 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 text-gray-600 bg-white border border-white rounded-lg focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g., Johndoe@yourcompany.com"
                  className="w-full px-4 py-3 text-gray-600 bg-white border border-white rounded-lg focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-2 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g., +62 812-3456-7890"
                  className="w-full px-4 py-3 text-gray-600 bg-white border border-white rounded-lg focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="companyName">
                  Company / Startup Name *
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  placeholder="Sivinaries"
                  className="w-full px-4 py-3 text-gray-600 bg-white border border-white rounded-lg focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium" htmlFor="message">
                Tell us about your project or idea
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="What are you looking to build? Any specific tech or timelines?"
                className="w-full px-4 py-3 text-gray-600 bg-white border border-white rounded-lg focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center md:col-span-2">
              <button
                type="submit"
                className="inline-block px-10 py-3 text-lg font-semibold text-white transition-transform rounded-full shadow-lg md:text-xl bg-gradient-to-r from-brand-purple to-brand-violet hover:scale-105"
              >
                Request a Proposal
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;
