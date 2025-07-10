import About from "./sections/About";
import Contact from "./sections/Contact";
import Project from "./sections/Project";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonial";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Project />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home;