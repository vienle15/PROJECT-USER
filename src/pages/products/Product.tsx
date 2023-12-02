import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

interface Product {
  id: string;
  image: string;
  productName: string;
  productPrice: string;
  productQuantity: number;
  productSize: string;
  productCode: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:6543/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Hàm lọc sản phẩm dựa trên chuỗi tìm kiếm
  const filteredProducts = products.filter((product) => {
    return (
      (product.productName &&
        product.productName
          .toLowerCase()
          .includes(searchText?.toLowerCase())) ||
      (product.productCode &&
        product.productCode.toLowerCase().includes(searchText?.toLowerCase()))
    );
  });

  return (
    <main className="container">
      <div className="productWel">
        <h1>Our Latest Products</h1>
        <div className="product-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-button" onClick={() => setSearchText("")}>
            Clear
          </button>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-3 item-product"
          >
            <div className="card">
              <img src={product.image} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">Price: ${product.productPrice}</p>
                <p className="card-text">Size: {product.productSize}</p>

                <button
                  onClick={() => navigate(`/productdetail/${product.id}`)}
                  className="btn btn-primary"
                >
                  Detail
                </button>
                <button className="btn btn-secondary">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProductList;
