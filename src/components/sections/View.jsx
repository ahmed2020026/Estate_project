import bgView from '../../assets/view.jpg'
const View = (props) => {
    return (
        <div style={{ backgroundImage: `url(${bgView})` }} className='bg-cover mb-20 viewPort flex items-center justify-center'>
            <div className="container" style={{ paddingBottom: '0' }}>
                <h1 className='font-bold mb-1 text-slate-900 text-center text-3xl md:text-5xl' data-aos="fade-up" data-aos-duration='1000'>{props.title} <span>{props.subtitle}</span></h1>
                <p className='text-center' data-aos="fade-up" data-aos-delay="200" data-aos-duration='1000'>{props.text}</p>
            </div>
        </div>
    )
}
export default View;