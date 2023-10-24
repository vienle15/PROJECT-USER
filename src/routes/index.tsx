import React from "react";
import Header from "../components/Header";
import { I_Routes } from "../types";
import Footer from "../components/Footer";
import Home from "../pages/Home/Home";
import Product from "../pages/products/Product";
import SignIn from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/Register/Register";
import ProductDetail from "../pages/product-detail/ProductDetail";
import Profile from "../pages/profile/Profile";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";
import Pay from "../pages/Pay/Pay";

export const routes: I_Routes[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },
  {
    title: "Headers",
    path: "/headers",
    element: <Header />,
  },
  {
    title: "Footer",
    path: "/footer",
    element: <Footer />,
  },
  { title: "Product", path: "/product", element: <Product /> },
  {
    title: "ProductDetail",
    path: "/productdetail/:id",
    element: <ProductDetail />,
  },

  { title: "SignIn", path: "/signin", element: <SignIn /> },
  { title: "Register", path: "/register", element: <SignUp /> },
  { title: "Profile", path: "/profile", element: <Profile /> },
  { title: "Contact", path: "/contact", element: <Contact /> },
  { title: "Cart", path: "/cart", element: <Cart /> },
  { title: "Pay", path: "/pay", element: <Pay /> },
];
