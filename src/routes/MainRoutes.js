import React from "react";
import { Route, Routes } from "react-router-dom";
import MyAccount from "../components/pages/myAcc/MyAccount";
import Home from "../components/pages/home/Home";

const MainRoutes = () => {
  let routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/account",
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
