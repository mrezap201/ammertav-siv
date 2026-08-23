import SEO from "../../components/SEO/SEO";
import { seoConfig } from "../../constants/seoConfig";
import ServiceWorks from "./sections/ServiceWork/ServiceWorks";

export default function Service() {
  return (
    <>
      <SEO {...seoConfig.service} />
      {/* Struktur Halaman */}
      <ServiceWorks />
    </>
  );
}
