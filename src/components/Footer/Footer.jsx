import React from "react";
import "./Footer.css";
import logo from "../../assets/logo2.jpg";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaLinkedin, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className=" Footer">
        <div className="container gx-0">
          <div className="  row gx-0">
            <div className="col-md-3">
              <div className="footer_col1">
                <img src={logo} alt="" />
                <div className="ft_icons">
                  <FaFacebookSquare />
                  <FaTwitterSquare />
                  <FaInstagramSquare />
                  <FaLinkedin />
                </div>
                <p>@2024 Copyright. All Right Reserved</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_col2">
                <h3>Get to Know Us</h3>
                <ul>
                  <li>
                    <NavLink>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink>News & Blog</NavLink>
                  </li>
                  <li>
                    <NavLink>Carrers</NavLink>
                  </li>
                  <li>
                    <NavLink>Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink>How to Shop</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_col3">
                <h3>Orders & Returns</h3>
                <ul>
                  <li>
                    <NavLink>Shipping & Delivery </NavLink>
                  </li>
                  <li>
                    <NavLink>Return & Exchange</NavLink>
                  </li>
                  <li>
                    <NavLink>Track Order</NavLink>
                  </li>
                  <li>
                    <NavLink>Selling Tips</NavLink>
                  </li>
                  <li>
                    <NavLink>Payment</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_col4"></div>
              <h3>  Contact</h3>
              <ul>
                <li>
                  <NavLink>
                   <div > <FaPhoneVolume className="ft_icon" /><p className="col4"> +91 72******09</p></div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                  <div ><MdEmail className="ft_icon" /><p className="col4"> rimberio72@gmail.com </p></div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                  <div ><FaLocationDot className="ft_icon" /> <p className="col4">Faridabad, Haryana</p></div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
