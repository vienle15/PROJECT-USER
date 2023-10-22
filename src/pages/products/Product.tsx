import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  return (
    <>
      <main className="container">
        <div className="productWel">
          <h1>Our Latest Product</h1>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 item-product">
            <div className="card">
              <img
                src="/src/assets/images/stan-smith.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Name </h5>
                <p className="card-text">Something about this shoes here!!!</p>
                <p className="card-text">Price:</p>
                <button
                  onClick={() => navigate("/productdetail")}
                  className="btn btn-primary"
                >
                  Detail
                </button>
                <button className="btn btn-secondary">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;
