import React from "react";
import Slider from "react-slick";
import shoes1 from "../../assets/shoes-1.jpg";
import shoes2 from "../../assets/shoes-2.jpg";
import shoes3 from "../../assets/shoes-3.jpg";

const SliderComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center justify-between mt-10 bg-gray-100">
          <div className="p-5">
            <div className="text-5xl font-bold">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempora.
            </div>
            <div className="!text-bold text-orange-800 text-xl">İncele</div>
          </div>
          <img src={shoes1} alt="" className="h-auto max-w-xl " />
        </div>
        <div className="!flex items-center justify-between mt-10 bg-gray-100">
          <div className="p-5">
            <div className="text-5xl font-bold">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempora.
            </div>
            <div className="!text-bold text-orange-800 text-xl">İncele</div>
          </div>
          <img src={shoes2} alt="" className="h-auto max-w-xl " />
        </div>
        <div className="!flex items-center justify-between mt-10 bg-gray-100">
          <div className="p-5">
            <div className="text-5xl font-bold">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              tempora.
            </div>
            <div className="!text-bold text-orange-800 text-xl">İncele</div>
          </div>
          <img src={shoes3} alt="" className="h-auto max-w-xl " />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
