import React from 'react'
import { Route,Routes, } from 'react-router-dom'
import Home from '../page/Home/Home'
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/common/Banner/Banner";
import Header from "../components/Header/Header";
import Connect from '../page/Connect/Connect';
import Cart from '../page/Cart/Cart';
import Product from '../page/ProductDetail/Product';
import Invoice from '../page/Invoices/Invoice';
import Singin from '../page/Auth/Singin/Singin';
function router() {
  return (
    <>
    <Banner heigth={"80px"} img={"/img/Banner01.png"} />
    <Header/>
    <NavBar/>
  
    <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/Singin' element={<Singin/> }></Route>
        <Route path='/Home' element={<Home/> }></Route>
        <Route path={'product/:id'} element={<Product/>}></Route>
        <Route path='/connect' element={<Connect/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/invoice' element={<Invoice/>}></Route>
    </Routes>
    </>
    
  )
}

export default router