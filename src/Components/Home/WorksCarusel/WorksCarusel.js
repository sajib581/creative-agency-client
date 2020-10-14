import React, { Component } from "react";
import Slider from "react-slick";
import './workCarosel.css'

const WorksCarusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="py-5" style={{backgroundColor: "#111430"}}>
            <h2 className="text-center text-light pb-5 mb-5">Here are some of <span className="font-color">our works</span> </h2>
            <div className="container">
            <Slider {...settings}>
                <div>
                    <img height="250" src="https://i.ibb.co/cvBMSPN/carousel-1.png" alt="" />
                </div>
                <div>
                    <img height="250" src="https://i.ibb.co/yFN9F1z/carousel-2.png" alt="" />
                </div>
                <div>
                    <img height="250" src="https://i.ibb.co/v3hffWL/carousel-3.png" alt="" />
                </div>    
                <div>
                    <img height="250" src="https://i.ibb.co/VWM0GLm/carousel-4.png" alt="" />
                </div>        
            </Slider>
            </div>
        </div>
    );
};

export default WorksCarusel;
