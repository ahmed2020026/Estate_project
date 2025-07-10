import React from "react";
import Slider from "react-slick";
import GradeIcon from '@mui/icons-material/Grade';


function Slick(props) {
    var complex_slide = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    var simple_slide = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="slider-container">
            {props.eles.length > 3 ? (
                <Slider {...complex_slide}>
                    {
                        props.eles.map((ele, index) => (
                            <div className="w-xs p-3 relative" key={index}>
                                <div className="relative">
                                    <img src={ele.image} className="max-w-full" alt="" />
                                    <div className="info absolute bottom-0 left-0 w-full bg-white h-10 text-center">
                                        <div className="subInfo absolute hero-image  bottom-0 w-10/12 bg-white shadow-lg">
                                            <h1 className="mt-2 font-medium text-xl">{ele.title}</h1>
                                            <div className="flex justify-center mb-3 gap-1 font-medium text-gray-700">
                                                <p>{ele.price} </p> | <p>{ele.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            ) : (
                <Slider {...simple_slide}>
                    {
                        props.eles.map((ele, index) => (
                            <div className="testimonial w-10/12 text-center mx-auto mt-14  p-5" key={index}>
                                <div className="p-5 shadow-lg border border-[#ddd] rounded">
                                    <img src={ele.image} alt={ele.alt} className="mx-auto" />
                                    <div className="person-info my-3">
                                        <h1 className="text-xl font-medium">{ele.name}</h1>
                                        <h3 className="text-gray-700">{ele.title}</h3>
                                    </div>
                                    <div className="rate my-4 text-amber-500">
                                        {
                                            Array.from({ length: ele.rating }, (item, index) => <GradeIcon key={index} />)
                                        }
                                    </div>
                                    <div className="text my-5 text-[18px] text-gray-800">
                                        <p>{ele.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            )
            }
        </div>
    );
}

export default Slick;