import React from 'react'
import style from './ListProduct.module.css'
function ListProduct() {
  return (
    <div className={style.listcontainer}>
        <div  className={style.sliderproduct}></div>
        <div className={style.listproduct}></div>
    </div>
  )
}

export default ListProduct