import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../page/Home/Home";
import Connect from "../../page/Connect/Connect";
import Cart from "../../page/Cart/Cart";
import Product from "../../page/ProductDetail/Product";
import Invoice from "../../page/Invoices/Invoice";
import Singin from "../../page/Auth/Singin/Singin";
import NotFound from "../../page/NotFound";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/Singin" element={<Singin />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path={"product/:id"} element={<Product />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default Router;
