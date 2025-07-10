import { useLocation } from "react-router-dom";
import { testimonialsData } from "../../assets/assets";
import Slick from "./slick";
import Title from "./Title";

const Testimonials = () => {
    const location = useLocation();
    const isTestimonial = location.pathname.startsWith('/testimonial');

    return (
        <>
            <section>
                {!isTestimonial && <Title title="Customer " subtitle="Testimonials" text="Real Stories from Those Who Found Home with Us" />}
                <div className="container mt-9" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0">
                    <Slick eles={testimonialsData} />
                </div>
            </section>
        </>
    )
}
export default Testimonials;