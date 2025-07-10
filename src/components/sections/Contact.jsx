import { useLocation } from "react-router-dom";
import Title from "./Title"

const Contact = () => {
    const location = useLocation();
    const isContact = location.pathname.startsWith('/contact');
    const Submite = (e) => e.preventDefault();
    return (
        <>
            <section>
                {!isContact && <Title title="Contact " subtitle="With Us" text="Ready to Make a Move? Let’s Build Your Future Together" />}
                <div className="container p-5">
                    <form className="mt-20 md:w-4/5 mx-auto" data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
                        <div className="grid  md:grid-cols-2 gap-3">
                            <div className="relative font-medium mt-5">
                                <label htmlFor="user_name" className="block mb-1 text-lg text-gray-700">Your Name</label>
                                <input type="text" name="user_name" placeholder="Your Name" autoComplete="off" className="border-3 duration-500 border-[#ddd] outline-0 focus:border-sky-500 rounded block w-full p-2" id="user_name" />
                            </div>
                            <div className="relative font-medium mt-3 md:mt-5">
                                <label htmlFor="user_email" className="block mb-1 text-lg text-gray-700">Your Email</label>
                                <input type="email" name="user_email" placeholder="Your Email" autoComplete="off" className="border-3 duration-500 border-[#ddd] outline-0 focus:border-sky-500 rounded block w-full p-2" id="user_email" />
                            </div>
                        </div>
                        <div className="relative mt-5 font-medium">
                            <label htmlFor="message" className="block mb-1 text-lg text-gray-700">Message</label>
                            <textarea name="message" id="message" placeholder="Message" className="border-3 duration-500 border-[#ddd] outline-0 focus:border-sky-500 rounded block w-full p-2 h-32 resize-none"></textarea>
                        </div>
                        <button className="block w-45 text-center mt-5 mx-auto bg-sky-500 cursor-pointer px-7 py-2 font-medium text-white rounded btn2" onclick={Submite}>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Contact;