import React from "react";
import "./SingleProducts.css";
// import productImage from "../../assets/headphone_21.png";
import { FaCartShopping } from "react-icons/fa6";
import useFetch from "../../hooks/useFetch";
import { NavLink, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const { handleAddToCart } = useContext(Context);

  const products = data?.data?.[0]?.attributes;

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  return (
    <>
      <div className="single-product-container">
        <div className="product-image">
        <img
            src={products?.img?.data?.attributes?.url}
            alt=""
          />
          {/* <img
            src={"https://simple-one-m1rh.onrender.com" + products?.img?.data?.attributes?.url}
            alt=""
          /> */}
        </div>
        <div className="product-details">
          <h1 className="mb-2">{products.title}</h1>
          <p className="product-description mb-3">{products.description}</p>
          <div className="product-price">
            <span>₹ {products.price} </span>
          </div>
          <div className="quantity-selector">
            <button className="quantity-btn decrement" onClick={decrement}>
              <i className="fa fa-minus"></i>
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn increment" onClick={increment}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => {
              handleAddToCart(data?.data?.[0], quantity);
            }}
          >
            <FaCartShopping className="cart_icon" /> ADD TO CART
          </button>
          <div className="product-meta">
            <p className="p">Category: 
            <span className="product_brand px-2">{products?.categories?.data?.[0]?.attributes?.title}</span>
            </p>
            <p className="p">
              Brand:
              <span className="product_brand px-2">{products.brand}</span>
            </p>
          </div>
          {/* <div className="product-share">
            <span>Share:</span>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-tiktok"></i>
          </div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      

      {/* ************** */}
      <RelatedProducts
        productId={id}
        categoryId={products?.categories?.data?.[0]?.id}
      />
      {/* ************** */}
    </>
  );
};

export default SingleProducts;
