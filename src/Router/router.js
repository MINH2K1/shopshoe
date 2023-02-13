import React from 'react'
import { Route,Routes, } from 'react-router-dom'
import Home from '../page/Home/Home'
import ProductDetail from '../page/ProductDetail/ProductDetail'
import NavBar from "../components/NavBar/NavBar";

import Banner from "../components/common/Banner/Banner";
import Header from "../components/Header/Header";
import Connect from '../page/Connect/Connect';
function router() {
  return (
    <>
    <Banner heigth={"80px"} img={"./img/Banner01.png"} />
    <Header/>
    <NavBar/>
  
    <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/product' element={<ProductDetail/>}></Route>
        <Route path='/connect' element={<Connect/>}></Route>
    </Routes>
    </>
    
  )
}

export default router