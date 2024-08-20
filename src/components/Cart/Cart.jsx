import React, { useContext } from "react";
import { Context } from "../../utils/context";
import "./Cart.css";
import CartItems from "./CartItems/CartItems";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js"

const Cart = () => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe("pk_test_51Pgl6aGlklqiU3AHujGBkDrfKpFFuTuOzRJXBblq0SpQNkDue7hCEph7mKBnpSzz1BCelieX08Vu0R8uZ5UG8qay00bmcjtFyv");
  
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      })
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err);
    }
    console.log("click");
  }

  return (
    <>
      <div>
        <div className="offcanvas-body">
          {!cartItems.length ? (
            <div className="empty-cart text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/13637/13637462.png"
                alt=""
                className="img-fluid"
              />
              <h4 className="pt-5 pb-3">Unfortunately, Your Cart is Empty</h4>
              <p>Please Add Somethings in your Cart</p>
              <a href="/products">
                <button className="btn5 my-3">Continue Shopping</button>
              </a>
            </div>
          ) : (
            <CartItems />
          )}
        </div>
        {cartItems.length > 0 && (
          <>
            <div className="offcanvas-footer p-3">
              <div className="row align-items-center">
                <div className="col-md-7 col-12">
                  <h5>
                    SubTotal: 
                    <span>  ₹ {cartSubTotal}</span>
                  </h5>
                </div>
                <div className="col-md-5 col-12 my-3 my-md-0">
                  <button
                    className="btn4"
                    // onClick={() => alert("Proceeding to Checkout")}
                    onClick={handlePayment}
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
