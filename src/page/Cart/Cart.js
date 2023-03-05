import React, { useEffect, useState } from "react";
import BoxColum from "../../components/common/BoxColum/BoxColum";
import ProductCart from "../../components/container/ProductCart/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import ButtonSquare from "../../components/common/ButtonSquare/ButtonSquare";
import style from "./Cart.module.css";
import { removeCart } from "../../contexts/redux/actions/cartAction";
import Total from "../../components/common/Total/Total";
import { cartTitle } from "../../data/constants";
function Cart() {
  //store-redux
  var cartListStore = useSelector((state) => state.cart.list);
  var total = useSelector((state) => state.cart.total);
  var dispatch = useDispatch();
  function removeProduct(id) {
    var removeaction = removeCart(id);
    dispatch(removeaction);
  }
  return (
    <div className={style.cartbox}>
      <div
        className={style.cart__titlte}
        style={{
          color: "red",
          fontSize: "25px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Giỏ Hàng
      </div>
      <BoxColum className={style.box}>
        <table className={style.table}>
          <thead>
            <tr>
              <td>{cartTitle.ID}</td>
              <td>{cartTitle.IMG}</td>
              <td>{cartTitle.NAME}</td>
              <td>{cartTitle.PRICE}</td>
              <td>{cartTitle.QUANTITY}</td>
              <td>{cartTitle.TOTAL}</td>
              <td>{cartTitle.ACTION}</td>
            </tr>
          </thead>
          <tbody>
            {cartListStore.map((item) => (
              <ProductCart
                removeProduct={removeProduct}
                key={item.id}
                data={item}
              ></ProductCart>
            ))}
          </tbody>
        </table>
        <div className={style.bottombox}>
          <Total className={style.total} totalcart={total}></Total>
          <ButtonSquare className={style.buynow} param={"/invoice"}>
            Mua Ngay
          </ButtonSquare>
        </div>
      </BoxColum>
    </div>
  );
}
export default Cart;
