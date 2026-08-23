
import SEO from "../../components/SEO/SEO";
import { seoConfig } from "../../constants/seoConfig";
import AboutSection from "./section/AboutSection/AboutSection";
import AboutWorkSection from "./section/AboutWorkSection/AboutWorkSection";

export default function About(){
    return(
        <>
            <SEO {...seoConfig.about} />
            {/* Struktur Halaman */}
            <AboutSection/>
            <AboutWorkSection/>
        </>
    )
}