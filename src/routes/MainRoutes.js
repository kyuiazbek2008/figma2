import React from "react";
import Home from "../components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Main from "../components/pages/main/Main";
import Shop from "../components/pages/shop/Shop";
import ContactUs from "../components/pages/contactUs/ContactUs";
import Product from "../components/pages/product/Product";
import MyAccount from "../components/pages/myAccont/MyAccont";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/shop",
      element: <Shop />,
    },
    {
      link: "/contactUs",
      element: <ContactUs />,
    },
    {
      link: "/products",
      element: <Product />,
    },
    {
      link: "/myaccont",
      element: <MyAccount />,
    },
  ];
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route key={idx} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
