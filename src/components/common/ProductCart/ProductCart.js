import React, { useReducer, useRef } from "react";
import Quantity from "../Quantity/Quantity";
import style from "./ProductCart.module.css";
import Button from "../ButtonSquare/ButtonSquare.js";
function ProductCart({ removeProduct, data }) {
  const UP_ACTION = "up";
  const DOWN_ACTION = "down";
  var initstate = data.quantity
  const reducer =(status,action) => {
    switch (action) {
      case UP_ACTION: {
        return  status+1;
      }
      case DOWN_ACTION: {
        return status-1;
      }
      default:
        throw new Error("lôiz");
    }
  };
  const [counts, dispatch] = useReducer(reducer,initstate);
  data.quantity=counts




  function IncreaseCartQuantity() {
   
    dispatch(UP_ACTION);
  }
  function DecreaseCartQuantity() {
    if(counts>1)
    dispatch(DOWN_ACTION);
  }

  return (
    <tr>
      <td className={style.id}>{data.id}</td>
      <td className={style.cart_img}>
        <img className={style.cart_img_item} src={data.url} alt="lm" />
      </td>
      <td className={style.cart_name}>{data.name}</td>
      <td>
        <Quantity
          IncreaseCartQuantity={IncreaseCartQuantity}
          DecreaseCartQuantity={DecreaseCartQuantity}
          quantity={data.quantity}
        ></Quantity>
      </td>
      <td>{data.price}</td>
      <td>{data.price * data?.quantity}</td>
      <td>
        <Button
          onClick={() => {
            removeProduct(data.id);
          }}
        >
          {" "}
          Xóa{" "}
        </Button>
      </td>
    </tr>
  );
}

export default ProductCart;
