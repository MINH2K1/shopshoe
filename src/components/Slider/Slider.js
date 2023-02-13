import React, { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import "./Slider.css";

function Slider({ slider }) {
  const [indexCurrent, setIndexCurrent] = useState(0);

  function handelSliderPrve() {
    const isFirst = 0;
    indexCurrent === isFirst
      ? setIndexCurrent(slider.length - 1)
      : setIndexCurrent(indexCurrent - 1);
  }
  function handelSliderNext() {
    const isLast = slider.length - 1;
    indexCurrent === isLast
      ? setIndexCurrent(0)
      : setIndexCurrent(indexCurrent + 1);
  }
  const isLast = slider.length - 1;
  useEffect(()=>{const timeId= setTimeout(() => {
      indexCurrent === isLast
        ? setIndexCurrent(0)
        : setIndexCurrent( indexCurrent + 1);
    }, 8000)
    return ()=>{
      clearTimeout(timeId);
    }
  },[indexCurrent, isLast]);
  return (
    <div className="slider" style={{}}>
      <Button className="slider_prev" handel={handelSliderPrve}>
        <i className="fa-solid fa-caret-left"></i>
      </Button>
      <Button className="slider_next" handel={handelSliderNext}>
        <i className="fa-solid fa-caret-right"></i>
      </Button>
      <div className="image_slider">
        <img src={slider[indexCurrent]} alt="ảnh" />
      </div>
    </div>
  );
}

export default Slider;
