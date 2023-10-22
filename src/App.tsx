import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./layout/layout";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />

      <>
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </>
      <Footer />
    </div>
  );
}

export default App;
