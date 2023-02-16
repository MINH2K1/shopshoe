import React from 'react'
import style from "./Total.module.css"
function Total({totalcart}) {
    console.log(totalcart);
  return (
    <div className={style.total}> Tổng :{totalcart} đ</div>
  )
}

export default Total