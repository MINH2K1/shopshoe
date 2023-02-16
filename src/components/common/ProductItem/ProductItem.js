import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductItem.module.css";

function ProductItem({item}) {
  return (
    <div className={style.product_item}>
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
