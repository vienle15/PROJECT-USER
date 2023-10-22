import React from "react";

function Pay() {
  return (
    <>
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button">
                          Billing Address
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form action="index.html">
                            <p>
                              <input
                                id="reName"
                                type="text"
                                placeholder="Name"
                              />
                            </p>
                            <p>
                              <input
                                id="reEmail"
                                type="email"
                                placeholder="Email"
                              />
                            </p>
                            <p>
                              <input
                                id="reAddress"
                                type="text"
                                placeholder="Address"
                              />
                            </p>
                            <p>
                              <input
                                id="rePhone"
                                type="number"
                                placeholder="Phone"
                              />
                            </p>
                            <p>
                              <textarea
                                name="bill"
                                id="note"
                                cols={30}
                                rows={10}
                                placeholder="Say Something"
                                defaultValue={""}
                              />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th colSpan={3}>Your order Details</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    <tr>
                      <td>Product</td>
                      <td>Price</td>
                      <td>Total</td>
                    </tr>
                  </tbody>
                  <tbody id="show" />
                  <tbody className="checkout-details">
                    <tr>
                      <td>Shipping</td>
                      <td colSpan={2}>45$</td>
                    </tr>
                  </tbody>
                  <tbody className="checkout-details">
                    <tr>
                      <td>Subtotal</td>
                      <td id="sum" colSpan={2}>
                        0$
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="full-payment mt-3 d-flex justify-content-between">
                  <div className="payment-delivery d-flex">
                    <label className="m-0">Payment on delivery</label>
                    <input
                      type="radio"
                      style={{ width: 20 }}
                      className="ml-2"
                      name="paymentMethod"
                      defaultValue="home"
                    />
                  </div>
                  <div className="payment-cart d-flex">
                    <label className="m-0">Payment by credit card</label>
                    <input
                      type="radio"
                      style={{ width: 20 }}
                      className="ml-2"
                      name="paymentMethod"
                      defaultValue="payment"
                    />
                  </div>
                </div>
                <div id="form-payment" className="full-payment mt-3">
                  <div className="payment-delivery">
                    <label className="m-0">Cart</label>
                    <input
                      id="cartNumber"
                      type="number"
                      className="m-0"
                      placeholder="xxx-xxx-xxx-xxx"
                    />
                    <p id="errCartNumber">
                      <i>enter cart number</i>
                    </p>
                  </div>
                  <div className="payment-cart ml-3">
                    <label className="m-0">CVV</label>
                    <input
                      id="cvvNumber"
                      type="password"
                      className="m-0"
                      placeholder="xxxx"
                    />
                    <p id="errPassNumber">
                      <i>enter CVV number</i>
                    </p>
                  </div>
                </div>
                <button className="boxed-btn mt-3">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;
