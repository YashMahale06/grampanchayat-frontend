
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import Photocard from "../Photocard/Photocard";

export default class Photos extends Component {
  render() {
    var settings = {
      dots: true,
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
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    const logo="https://images.unsplash.com/photo-1497601089782-06319e8be3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    return (<>
     

        <div className="heading bg-orange-400 h-8 p-1 font-mono ">Photo Gallary</div>
      <div className="photos ">

        <Slider {...settings}>
          <div className="p-8 overflow-x-hidden " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
          <div className="p-8 " >
          <img  className= "rounded drop-shadow-lg	" src={logo}   />
          </div>
        </Slider>
      </div>
      </>
    );
  }
}