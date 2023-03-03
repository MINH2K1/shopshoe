import React, { useEffect, useState } from "react";
import Button from "../../common/Button/Button";
import ProductItem from "../../common/ProductItem/ProductItem";
import style from "./Gallery.module.css";
import styled, { keyframes } from "styled-components";
function Gallery({ gallery }) {
  const [nameAnimation, setNameAnimation] = useState("");
  const moveLeft = keyframes`
  to{
    transform: translateX(100px);
  }
  `;
  const moveRight = keyframes`
  from{
    transform: translateX(150px);
  }
  to{
    transform: translateX(-150px);
  }
  `;

  const Move = styled.div`
    animation: ${nameAnimation} linear 1s;
    animation-fill-mode: forwards;
  `;
  function move_left() {
    setNameAnimation(moveRight);
  }
  function move_right() {
    setNameAnimation(moveLeft);
  }
  // useEffect(()=>{},
  // [])
  return (
    <div className={style.gallery}>
      <Button className={style.gallery_prev} handel={move_left}>
        <i className="fa-solid fa-caret-left"></i>
      </Button>
      <Move className={style.gallery_list}>
        {gallery.map((item) => {
          return <ProductItem item={item} key={item.id} />;
        })}
      </Move>
      <Button className={style.gallery_next} handel={move_right}>
        <i className="fa-solid fa-caret-right"></i>
      </Button>
    </div>
  );
}

export default Gallery;
