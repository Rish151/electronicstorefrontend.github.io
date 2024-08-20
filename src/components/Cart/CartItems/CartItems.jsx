import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import "./CartItems.css";

const CartItems = () => {
  const { cartItems, handleRemoveFromCart, handleCartQuantity } = useContext(Context);

  return (
    <div className="container">
      {cartItems.map((item) => (
        <div key={item.id} className="row gx-0">
          <div className="col-3">
          <img
              src={
                
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              className="img-fluid"
            />
            {/* <img
              src={
                "https://simple-one-m1rh.onrender.com" +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              className="img-fluid"
            /> */}
          </div>
          <div className="col-8">
            <div className="cartitem2">
              <div className="cartitem-header">
              <h6 className="title px-1">{item.attributes.title}</h6>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png"
                  width="25"
                  height="25"
                  alt=""
                  title=""
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                  className="img-small"
                />
                
              </div>
              <div className="quality-buttons py-2">
                <span
                  className="single-span cartitem_span"
                  onClick={() => {
                    handleCartQuantity("dec", item);
                  }}
                >
                  -
                </span>
                <span className="cartitem_span1">
                  {item.attributes.quantity}
                </span>
                <span
                  className="single-span cartitem_span"
                  onClick={() => {
                    handleCartQuantity("inc", item); 
                  }}
                >
                  +
                </span>
              </div>
              <div className="cart_size">
                <span className="cart-span">{item.attributes.quantity}</span>
                <span>x</span>
                <span className="cart-span">
                  ₹ {item.attributes.price * item.attributes.quantity}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
