import { Link } from "react-router-dom"
import { assets, linksNav } from "../../assets/assets"

const Footer = () => {
    const TopPage = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            //behavior: "smooth"
        });
    }
    return <>
        <div className="container" style={{paddingBottom:'0'}}>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 text-white md:gap-10 pb-5">
                <div className="pt-5 text-lg">
                    <img src={assets.logo_dark} alt="logo_dark" className="mb-5 mx-auto md:mx-0" />
                    <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
                <div className="pt-5 text-lg">
                    <h1 className="font-bold text-xl mb-3">Company</h1>
                    <ul>
                        {
                            linksNav.map((link, index) => (
                                <li key={index} className="text-gray-400 mb-2"><Link to={link.path} onClick={TopPage} className="hover:text-white">{link.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pt-5 text-lg w-full text-center md:text-left">
                    <h1 className="font-bold text-xl mb-3">Subscribe to our newsletter</h1>
                    <p className="text-gray-400 text-wrap">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className=" mt-5 flex justify-center md:justify-start">
                        <input type="email" name="user_email" placeholder=" Enter Your Email" autoComplete="off" className="text-white px-2 rounded outline-0 bg-[#ffffff5d]" />
                        <button className="btn2 px-3 py-1 bg-sky-400 cursor-pointer rounded">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="text-[#cccccc3d]"/>
            <p className="text-center py-5 text-[#ccc] md:text-lg">Copyright 2024 &#169; GreatStack. All Right Reserved.</p>
        </div>
    </>
}

export default Footer;