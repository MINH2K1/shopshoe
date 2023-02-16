import React from "react";
import style from "./Quantity.module.css";
function Quantity({ quantity,DecreaseCartQuantity, IncreaseCartQuantity}) {
  return (
    <div className={style.product_quanlity}>
      <button className={style.product_quantity_btn} onClick={()=>{DecreaseCartQuantity()}}>
        <i className="fa-solid fa-minus"></i>
      </button>
      {quantity}
      <button className={style.product_quantity_btn} onClick={()=>{IncreaseCartQuantity()}}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default Quantity;
