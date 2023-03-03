import React from "react";
import data from "../../data/productlistapi";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/actions/addproduct";

function Product() {
  const params = useParams();
  const product = data.find((itemfind) => {
    return itemfind.id === Number(params.id);
  });

  const cartList = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  function handelAddCart(product) {
    if (cartList.filter((item) => item.id === product.id).length === 0) {
      const action = addCart(product);
      dispatch(action);
    } else {
      cartList.includes((item) => item.id !== product.id);
    }
  }
  return (
    <div>
      <ProductDetail
        product={product}
        handelAddCart={handelAddCart}
      ></ProductDetail>
    </div>
  );
}

export default Product;
