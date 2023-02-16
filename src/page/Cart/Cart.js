import React, { memo, useEffect, useState } from "react";
import BoxColum from "../../components/common/BoxColum/BoxColum";
import ProductCart from "../../components/common/ProductCart/ProductCart";
import { useSelector } from "react-redux";
function Cart() {
  const cartListStore = useSelector((state) => state.cart.list);

  const [show, setShow] = useState(false);
  const [cartList, setCartList] = useState(cartListStore);
  useEffect(() => {
    cartList.length === 0 ? setShow(false) : setShow(true);
  }, [cartList]);
  

  function removeProduct(id) {
    var cartProduct = cartList.filter((product) => product.id !== id);
    return setCartList(cartProduct);
  }


  return (
    <BoxColum>
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
      {show && (
        <table>
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
            {cartList.map((item) => (
              <ProductCart
                removeProduct={removeProduct}
                key={item.id}
                data={item}
              ></ProductCart>
            ))}
          </tbody>
        </table>
      )}
     
    </BoxColum>
  );
}
export default Cart;
