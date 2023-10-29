import { useEffect } from "react";
import Testimonial from "./Testimonial";
import BackToTop from "./BackToTop";
import About from "./About";
import Feature from "./Feature";
import Donate from "./Donate";
import Service from "./Service";
import Team from "./Team";
import Hero from "./Hero";

const Home = () => {
    useEffect(() => {
        const removeSpinner = setTimeout(() => {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1000);

        return () => {
            clearTimeout(removeSpinner);
        };
    }, []);
    return (
        <>
            <Hero />
            <About />
            <Feature />
            <Service />
            <Donate />
            <Team />
            <Testimonial />
            <BackToTop />
        </>
    );
};

export default Home;