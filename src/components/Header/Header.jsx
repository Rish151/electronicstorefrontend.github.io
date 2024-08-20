import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { Context } from "../../utils/context";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "../Cart/Cart";
import Search from "./Search/Search"; // Import Search component
import { FaSearch } from "react-icons/fa"; // Import search icon

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(true); 

  const { cartCount } = useContext(Context);

  const handleScroll = () => {
    const offsets = window.scrollY;
    setScroll(offsets > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg nav_sec1 ${
          scroll ? "sticky_nav1" : ""
        }`}
      >
        <div className="container gx-0">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul">
              <NavLink to="/">Home</NavLink>
              <li className="nav-li"></li>
              <NavLink to="/about">About</NavLink>
              <li className="nav-li"></li>
              <NavLink to="/products">Products</NavLink>
              <li className="nav-li">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            {showSearch && <Search onHide={() => setShowSearch(false)} />} {/* Conditionally render the Search component */}
            <div className="cart1 d-flex align-items-center mx-4">
              {/* <FaSearch onClick={() => setShowSearch((prev) => !prev)} /> Search icon to toggle search input */}
              <img
                // src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
                // width="35"
                // height="35"
                // alt=""
                // className="img-small "
                onClick={() => setShowSearch((prev) => prev)}
              />
              <NavLink variant="light" onClick={() => setShowCart(true)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
                  width="35"
                  height="35"
                  alt=""
                  className="img-small"
                />
                {!!cartCount && (
                  <span className="cart-total--items">{cartCount}</span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton >
          <Offcanvas.Title className="title ">Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
