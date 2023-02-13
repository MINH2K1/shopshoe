import style from "./ProductDetail.module.css";
import React from "react";
import product from "../../data/product.js";
import UrlLink from "../../components/common/UrlLink/UrlLink";
import ButtonSquare from "../../components/common/ButtonSquare/ButtonSquare";
function ProductDetail() {
  return (
    <>
      <UrlLink urllink={window.location.search}></UrlLink>
      <div className={style.product_detail}>
        <div className={style.product_img}>
          <img
            className={style.product_url}
            alt="Ảnh product"
            src={product.url}
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
            <button className={style.product_quantity_btn}>
              <i class="fa-solid fa-minus"></i>
            </button>
            <span>1</span>
            <button className={style.product_quantity_btn}>
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className={style.product_size}>
            Kích Thước :
            <select className={style.product_select}>
              <option value="30">30</option>
              <option value="30">31</option>
              <option value="30">33</option>
              <option value="30">34</option>
              <option value="30">35</option>
              <option value="30">37</option>
              <option value="30">38</option> 
              <option value="30">39</option>
              <option value="30">40</option> 
              <option value="30">41</option>
            </select>
          </div>
          <div className={style.btn}>
          <ButtonSquare>Mua Ngay</ButtonSquare>
          <ButtonSquare>Add Giỏ hàng</ButtonSquare>
          </div>
        </div>
        <div className={style.product_slider}></div>
      </div>
    </>
  );
}

export default ProductDetail;
