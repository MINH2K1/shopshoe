import React, { memo, useEffect, useState } from "react";
import BoxColum from "../../components/common/BoxColum/BoxColum";
import ProductCart from "../../components/common/ProductCart/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import ButtonSquare from "../../components/common/ButtonSquare/ButtonSquare";
import style from "./Cart.module.css";
import { removeCart } from "../../redux/actions/addproduct";
import store from "../../redux/store";
import Total from "../../components/common/Total/Total";
function Cart() {

  //store-redux
  const cartListStore = useSelector((state) => state.cart.list);
  
  //cart List in cart
 
  const [show, setShow] = useState(false);

  var dispatch = useDispatch()
  function removeProduct(id) {
    var removeaction= removeCart(id);
    dispatch(removeaction);
  }

 

  // totail cart 
  
  var totalcart= cartListStore.reduce((total,item)=>{return total=total+item.quantity*item.price},0)
 const [total,setTotal]=useState(totalcart)  
  function totalfn(totalcart){
     totalcart= cartListStore.reduce((total,item)=>{return total=total+item.quantity*item.price},0)
      setTotal(totalcart)
  }

  
  //useRedux Cart

  console.log(cartListStore)

  return (
    <BoxColum className={style.box}>
      <div
        style={{
          color: "red",
          fontSize: "25px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Giỏ Hàng
      </div>
        <table className={style.table}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Ảnh</td>
              <td>tên</td>
              <td>Số lượng</td>
              <td>Giá</td>
              <td>Đơn Giá</td>
              <td>Xóa</td>
            </tr>
          </thead>
          <tbody>
            {cartListStore.map((item) => (
             
              <ProductCart
                removeProduct={removeProduct}
                key={item.id}
                data={item}
                totalfn={totalfn}
              ></ProductCart>
            ))}
          </tbody>
        </table>
     
      <Total className={style.total} totalcart={total}></Total>
      <ButtonSquare
        className={style.buynow}
        param={"/invoice"}
      >
        Mua Ngay
      </ButtonSquare>
    </BoxColum>
  );
}
export default Cart;
