import "./Banner.css";
import React from "react";
// Import Swiper React components
import img1 from "../../../assets/black_headphones.png";
import img2 from "../../../assets/blue_headphones.png";
import img3 from "../../../assets/49.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdStars } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner_main">
        <Swiper
        //   scrollbar={{
        //     hide: true,
        //   }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container Banner_1">
              <div className="container-gx-0">
                <div className="row gx-0 align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <div className="banner_col1 pt-md-4">
                      <h4><MdStars />Top Products of the Month</h4>
                      <h1>
                        Micropack MHP <br/> Headphone Black
                      </h1>
                      <p>
                        The Micropack Headphones offers a stereo PC headset with <br/>
                        colume control, a flexible mic arm, adjustable headband.
                      </p>
                      <div className="banner_btns mt-4 py-2">
                        <NavLink to="/product/5" className="btn1 btn0">Shop Now</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="banner_col2">
                      <img src={img1} alt="Black Headphones" className="img-fluid " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="container Banner_1">
              <div className="container-gx-0">
                <div className="row gx-0 align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <div className="banner_col1 pt-md-4">
                    <h4><MdStars />Top Products of the Month</h4>
                      <h1>
                      Zebronics<br/> Zeb-Storm Headphone
                      </h1>
                      <p>
                      Experience vibrant sound with the Zebronics Blue Headphones. <br/>
                      Designed with volume control, a flexible mic arm, and an adjustable headband.
                      </p>
                      <div className="banner_btns mt-4 py-2">
                        <NavLink  to="/product/7" className="btn1 btn0 ">Buy Now</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="banner_col2">
                      <img src={img2} alt="Black Headphones" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="container Banner_1">
              <div className="container-gx-0">
                <div className="row gx-0 align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <div className="banner_col1 pt-md-4">
                    <h4><MdStars />Top Products of the Month</h4>
                      <h1>
                      Micropack MHP <br/> Headphone <br/> Red
                      </h1>
                      <p>
                      Enjoy superior audio with the Micropack Red Headphones. <br/>
                      Features include volume control, a flexible mic arm, and an adjustable headband.
                      </p>
                      <div className="banner_btns mt-4 py-2">
                        <NavLink to="/product/11" className="btn1 btn0 ">Shop Now</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="banner_col2">
                      <img src={img3} alt="Black Headphones" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
