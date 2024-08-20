import React from "react";
import img from "../../../assets/mid_headphone.png";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import "./Offer.css";
import { NavLink } from "react-router-dom";


const Offer = () => {
  return (
    <>
      <div className="container Discount">
        <div className=" container banner">
          <div className=" container  row align-items-center">
            <div className="col-md-7">
              <div className="banner_col1 pt-md-4">
                <h4 className="Main_Label pb-3">
                  <i>
                    <RiDiscountPercentFill />
                  </i>
                    Weekend Discount
                </h4>
                <h1>Up To 40% Off On Digital items </h1>
                <p className="py-3">
                  The exact percentage of the discount may vary depending on the
                  specific product or promotion being offered.
                </p>
                <div className="banner_btns mt-4 py-2 ">
                  <NavLink to="/product/9" className="main_btn">Shop Now <FaArrowRight /></NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
