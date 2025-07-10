import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'
const Hero = () => {
    return (
        <>
            <section style={{ backgroundImage: `url(${assets.header_img})` }} className='bg-cover flex items-center justify-center'>
                <div className="container relative">
                    <div className='info text-center capitalize md:w-2xl mx-auto' >
                        <h1 className='font-bold text-white text-3xl md:text-5xl' data-aos-duration="1000" data-aos="fade-up">Explore Homes That fit your dreams</h1>
                        <div className="links mt-5 flex gap-5 justify-center" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
                            <Link to={'/project'} className='inline-block font-medium border-2 px-7 py-2 border-sky-600 bg-sky-600 text-white rounded btn1'>Projects</Link>
                            <Link to={'/contact'} className='inline-block font-medium border-2 px-7 py-2 border-sky-600 text-sky-600 rounded btn2'>Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;