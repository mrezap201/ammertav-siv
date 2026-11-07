import { motion } from "framer-motion";
import Dinkes from "../../../assets/images/Product/dinkes.png"
import Aqua from "../../../assets/images/Product/aqua.png";
import Codefy from "../../../assets/images/Product/codefy.png";
import Bw from "../../../assets/images/Product/bw.png";
import Beil from "../../../assets/images/Product/beil.png";
import Funnev from "../../../assets/images/Product/funnev.png";
import Jit from "../../../assets/images/Product/jit.png";
import Kampanye from "../../../assets/images/Product/kampanye.png";
import Rembug from "../../../assets/images/Product/rembug.png";
import Parcel from "../../../assets/images/Product/parcel.png";
import Custom from "../../../assets/images/Product/custom.png";
import Mrteknik from "../../../assets/images/Product/mrteknik.png";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const workItems = [
  {
    title: "Sistem Informasi Surat Kerja",
    description:
      "A web-based system that simplifies the management and tracking of work letter submissions within organizations.",
    img: Dinkes,
    link: "http://119.2.50.170:5500/surat-p2p/",
  },
  {
    title: "Aquashine Landing Page",
    description:
      "A sleek and responsive landing page designed to showcase Aquashine's premium skincare products effectively.",
    img: Aqua,
    link: "https://aquashine.company/",
  },
  {
    title: "Codefy Personal Website",
    description:
      "A modern personal portfolio website for Codefy, featuring project showcases, blog integration, and responsive design.",
    img: Codefy,
    link: "https://codefy.my.id/",
  },
  {
    title: "Campaign Landing Page",
    description:
      "An engaging and informative landing page built to support a political campaign, complete with donation and volunteer features.",
    img: Kampanye,
    link: "https://www.luthfiyasinofficial.id/",
  },
  {
    title: "Parcelinpack Company Profile",
    description:
      "A company profile website that highlights Parcelinpack’s logistics services, milestones, and core values with a clean design.",
    img: Parcel,
    link: "https://parcelinpack.id/",
  },
  {
    title: "Rembug Jateng Web App",
    description:
      "An interactive platform facilitating community discussions and government engagement in Central Java.",
    img: Rembug,
    link: "https://ngopeninglakoni.id/",
  },
  {
    title: "Custompedia Company Profile",
    description:
      "A corporate website presenting Custompedia’s brand identity, services, and team in a professional layout.",
    img: Custom,
    link: "https://custompedia.agency/",
  },
  {
    title: "Bwteknik Landing Page",
    description:
      "A fast and secure landing page designed for BW Teknik to promote its engineering solutions and services.",
    img: Bw,
    link: "https://bwteknik.com/",
  },
  {
    title: "Beil Landing Page",
    description:
      "A high-conversion landing page crafted for Beil, emphasizing product features and customer engagement.",
    img: Beil,
    link: "https://beilpos.click/",
  },
  {
    title: "Funnev Web App",
    description:
      "A dynamic web application for Funnev, enabling users to join, manage, and explore various online communities.",
    img: Funnev,
    link: "https://funnev.click/",
  },
  {
    title: "Javaindotrip Web App",
    description:
      "A travel web app that helps users explore and book trips across Indonesia, with integrated maps and itinerary tools.",
    img: Jit,
    link: "https://javaindotrip.com/",
  },
  {
    title: "MR Teknik Company Profile",
    description:
      "A travel web app that helps users explore and book trips across Indonesia, with integrated maps and itinerary tools.",
    img: Mrteknik,
    link: "https://mrteknik.id/",
  },
];

function OurProduct() {
  return (
    <div className="relative px-4 py-20 overflow-hidden md:px-20 md:py-32">
      

      <div className="mx-auto space-y-4 md:space-y-8 md:max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="flex flex-col items-center overflow-hidden text-center bg-gray-300 rounded-3xl h-60 md:h-80"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-full h-full"
              >
                <img
                  className="object-cover w-full h-40 md:object-fill md:h-48 rounded-t-3xl"
                  src={item.img}
                  alt={item.title}
                />
                <div className="px-2 py-2 space-y-1">
                  <h2 className="text-base font-semibold text-black md:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mx-1 text-sm font-light text-gray-900 md:text-base md:mx-2">
                    {item.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
