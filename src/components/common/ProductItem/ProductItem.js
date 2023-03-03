import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductItem.module.css";
import clsx from "clsx";
function ProductItem({active,item}) {
  return (
    <div className= {clsx(style.product_item,{active})}>
      <div className={style.product_img}>
        {" "}
        <img
          className={style.productimgtag}
          src={item.url}
          alt="ảnh sản phẩm"
        />
      </div>
      <div className={style.product_name}>{item.name}</div>
      <div className={style.product_card}>
        <div className={style.product_price}>
          <div className={style.product_price_value}>{item.price}đ</div>
          <div className={style.product_price_discount}>{item.discount} đ</div>
        </div>
        <div>
          <Link className={style.product_button_detail} to={`/product/${item.id}`}>
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
