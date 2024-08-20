import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import Product from "./Product/Product";
import "./Products.css";
import { FaArrowRight } from "react-icons/fa";

const Products = ({ products }) => {
  const location = useLocation(); // Get the current location

  // Check if the current path is home or products
  const isHomePageOrProductsPage = location.pathname === "/" || location.pathname === "/products";
  const isHomepage = location.pathname === "/";
  // Slice the products if on the home page
  const displayedProducts = location.pathname === "/" ? products?.data?.slice(0, 8) : products?.data;

  return (
    <>
      <div className="container gx-0 py-1">
        {isHomePageOrProductsPage && (
          <div className="d-flex justify-content-between align-items-center">
            <h2 className='Product_h2 pb-5 pt-2'>Popular Products</h2>
            {isHomepage && (
              <NavLink to="/products" className="more-button">
                More <FaArrowRight />
              </NavLink>
            )}
          </div>
        )}
        <div className="row gx-0">
          <div className="col-md-12">
            <div className="Products_main">
              {displayedProducts?.map((item) => (
                <Product key={item.id} id={item.id} data={item.attributes} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
