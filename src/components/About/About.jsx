import React from "react";
import "./About.css";
import iphones from "../../assets/iphones.png";

const About = () => {
  return (
    <>
      <div className="About">
        <div className=" container-fluid gx-0">
          <div className="  row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="About_text">
                <h1>About Us</h1>
                <p>
                  Welcome to our electronics store! We are passionate about providing the best and latest electronic gadgets to our customers. From smartphones to laptops, we have a wide range of products to meet all your tech needs.
                </p>
                <p>
                  Established in 2010, our mission has always been to offer high-quality products at competitive prices, backed by excellent customer service. 
                </p>
                <p>
                  We work closely with top brands to ensure that our inventory is always up-to-date with the newest releases.
                </p>
                {/* <p>
                  Our customer-centric approach sets us apart. We strive to provide a seamless shopping experience, from browsing our website to receiving your order. Our knowledgeable staff is always ready to assist you with any questions or concerns.
                </p> */}
                <p>
                  Join us on this exciting journey and stay ahead with the latest in technology. Thank you for choosing us as your trusted electronics provider. We look forward to serving you and helping you find the perfect products to suit your needs.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="About_image">
                <img src={iphones} alt="iPhones" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
