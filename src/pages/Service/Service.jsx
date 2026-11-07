import Faq from "../../components/common/Faq/Faq";
import SEO from "../../components/SEO/SEO";
import { seoConfig } from "../../constants/seoConfig";
import Testi from "../Home/sections/Testi/Testi";
import Our from "./sections/ServiceWork/Our";
import ServiceWorks from "./sections/ServiceWork/ServiceWorks";
import Whatsapp from "./sections/ServiceWork/Whatsapp";

export default function Service() {
  return (
    <>
      <SEO {...seoConfig.service} />
      {/* Struktur Halaman */}
      <ServiceWorks />
      <Whatsapp/>
      <Our/>
      <Testi/>
      <Faq/>
    </>
  );
}
