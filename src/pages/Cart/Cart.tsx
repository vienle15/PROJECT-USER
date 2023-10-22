import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>
            <span className="shopper">V</span> Shopping Cart
          </h1>
          <a
            href="/src/pages/customer/products/index.html"
            className="visibility-cart transition is-open"
          >
            X
          </a>
        </div>
        <div className="cart transition is-open">
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center">Price</div>
              <div className="col col-qty align-center">QTY</div>
              <div className="col">VAT</div>
              <div className="col">Total</div>
            </div>
            <div className="tf">
              <div className="row layout-inline">
                <div className="col">
                  <p>VAT</p>
                </div>
                <div className="col" />
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Shipping</p>
                </div>
                <div className="col" />
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Total</p>
                </div>
                <div className="col" />
              </div>
            </div>
          </div>
          <a className="btn1 btn-update" onClick={() => navigate("/pay")}>
            Pay
          </a>
        </div>
      </div>
    </>
  );
}

export default Cart;
