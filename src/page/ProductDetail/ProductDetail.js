import style from "./ProductDetail.module.css";
import React, { useState } from "react"
import UrlLink from "../../components/common/UrlLink/UrlLink";
import ButtonSquare from "../../components/common/ButtonSquare/ButtonSquare";

function ProductDetail({product,handelAddCart}) {
  const[quantity,setQuantity]=useState(1)
 function Decreases_quantity(){
    return setQuantity(quantity-1);
 }
 function Increases_quantity(){
  return setQuantity(quantity+1);
}
product.quantity=quantity;
  return (
    <>
      <UrlLink ></UrlLink>
      <div className={style.product_detail}>
        <div className={style.product_img}>
          <img
            className={style.product_url}
            src={product.url}
            alt="product"
          />
        </div>
        <div className={style.product_content}>
          <div className={style.product_name}>{product.name}</div>
          <div className={style.product_price}>
            {product?.price}đ
            <span className={style.product_discount}>
              {" "}
              {product?.discount} đ
            </span>
          </div>
          <div className={style.product_commit1}>
            Hàng xách tay Nhật, Fullbox, Cam kết 100% chính hãng, Phát hiện hàng
            giả xin đền 10 lần tiền
          </div>
          <div className={style.product_commit2}>
            Ship COD toàn quốc | Miễn phí đổi size, đổi mẫu trong 1 tuần !!!
          </div>
          <div className={style.product_quanlity}>
            Số lượng:
            <button
               className={style.product_quantity_btn} 
                onClick={()=>{Decreases_quantity()}}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>{product?.quantity}</span>
            <button className={style.product_quantity_btn }
            
            onClick={()=>{Increases_quantity()}}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className={style.product_size}>
            Kích Thước :
            <select className={style.product_select}>
              <option value="30">30</option>
            </select>
          </div>
          <div className={style.btn}>
          <ButtonSquare>Mua Ngay</ButtonSquare>
          <ButtonSquare product={product} param={'/cart'} onClick={handelAddCart}  >Add Giỏ hàng</ButtonSquare>
          </div>
        </div>
        <div className={style.product_slider}></div>
      </div>
    </>
  );
}

export default (ProductDetail);
