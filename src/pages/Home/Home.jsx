import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Partner from "./sections/Partner/Partner";
import Running from "./sections/Running/Running";
import Quote from "./sections/Quote/Quote"
import Why from "./sections/Why/Why";
import Service from "./sections/Service/Service";
import Tech from "./sections/Tech/Tech";
import Ready from "../../components/common/Ready/Ready";
import Testi from "./sections/Testi/Testi";
import Faq from "../../components/common/Faq/Faq";

export default function Home() {
    return (
        <>
            <Hero />
            <Running />
            <About />
            <Service />
            <Partner />
            <Quote />
            <Why />
            <Tech />
            <Testi />
            <Faq />
            <Ready />
        </>
    );
}
