import SEO from "../../components/SEO/SEO";
import { seoConfig } from "../../constants/seoConfig";
import OurProduct from "./sections/OurProduct";

export default function Product(){
    return(
        <>
            <SEO {...seoConfig.product}/>
            {/* Struktur Halaman */}
            <OurProduct/>
        </>
    )
}