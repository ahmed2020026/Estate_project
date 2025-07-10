import Title from "./Title"
import { assets } from "../../assets/assets";
import {useLocation} from 'react-router-dom'
const About = () => {
    const location = useLocation()
    const isAbout = location.pathname.startsWith('/about');
    
    return (
        <>
            <section>
                {!isAbout && <Title title="About " subtitle="Our Brand" text="Passionate About Properties, Dedicated to Your Vision" />}
                <div className="container ">
                    <div className="grid md:grid-cols-2 items-start overflow-hidden" >
                        <div className="image text-center p-5" data-aos="zoom-out-left">
                            <img src={assets.brand_img} className="mx-auto max-w-full md:w-10/12" alt="Brand_imge" />
                        </div>
                        <div className="info p-5">
                            <div className="rate grid grid-cols-2 md:gap-5" data-aos="zoom-out-right">
                                <div className="ele p-3 md:p-5 text-center md:text-left">
                                    <h1 className="font-semibold text-5xl text-gray-800">10+</h1>
                                    <p className="text-base md:text-[18px] font-medium text-gray-500">Years of Excellence</p>
                                </div>
                                <div className="ele p-3 md:p-5 text-center md:text-left">
                                    <h1 className="font-semibold text-5xl text-gray-800">12+</h1>
                                    <p className="text-base md:text-[18px] font-medium text-gray-500">Projects Completed</p>
                                </div>
                                <div className="ele p-3 md:p-5 text-center md:text-left">
                                    <h1 className="font-semibold text-5xl text-gray-800">20+</h1>
                                    <p className="text-base md:text-[18px] font-medium text-gray-500">Mn. Sq. Ft. Delivered</p>
                                </div>
                                <div className="ele p-3 md:p-5 text-center md:text-left">
                                    <h1 className="font-semibold text-5xl text-gray-800">25+</h1>
                                    <p className="text-base md:text-[18px] font-medium text-gray-500">Ongoing Projects</p>
                                </div>
                            </div>

                            <p className="p-5 text-[18px] text-center md:text-left font-medium text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="text-center md:text-left"><button className="bg-sky-500 ml-5 mt-5 text-white px-7 py-2 font-medium rounded border-0 cursor-pointer btn2">Learn More</button></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;