import React from "react";
import Banner from "./Banner/Banner";
import banner from "../assets/img/banner01.png";
import Router from "./router/Router";
const Layout = () => {
  return (
    <>
      <Banner img={banner} heigth={"80px"} />
      <Router />
    </>
  );
};

export default Layout;
