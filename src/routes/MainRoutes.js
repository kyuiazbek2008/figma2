import React from "react";
import Home from "../components/pages/Home";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
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
