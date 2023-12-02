import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./layout/layout";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./redux/Slice/AuthSlice";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  async function checkLogin() {
    const isLogged = localStorage.getItem("loggedIn");
    if (isLogged) {
      const userId = JSON.parse(isLogged);
      const user = await axios.get("http://localhost:6543/api/v1/users", {
        params: { id: userId },
      });
      console.log(user);
      if (user.data.length) {
        dispatch(loginSuccess(user.data[0]));
      }
    }
  }
  useEffect(() => {
    checkLogin();
  }, []); //
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
