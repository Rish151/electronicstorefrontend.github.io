import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Products.css";
// import img from "../../../assets/mouse.png";

const Product = ({ id, data }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="Product_main">
          <div className="row">
            <div className="col-md-12" onClick={() => navigate("/product/" + id)}>
              <div className="card border-0 h-100">
                <div className="card_head">
                <img src={
                  data?.img?.data?.attributes?.url
                  } alt="" className="img-fluid" />
                  {/* <img src={
                    "https://simple-one-m1rh.onrender.com" +
                    data?.img?.data?.attributes?.url
                  } alt="" className="img-fluid" /> */}
                </div>
                <div className="card-body mx-4">
                  <p className="Prouct_name py-1">{data.title}</p>
                  <div className="icons py-2 d-flex align-items-center">
                    <i className="fa-solid fa-star"></i>
                    <p>{data.rating}</p>
                  </div>
                  <p className="Product_price">₹ {data.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
