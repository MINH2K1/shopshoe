import React from "react";
import Box from "../../components/common/Box/Box";
import style from "./Connect.module.css";
function Connect() {
  return (
    <Box className={style.connect}>
      <div className={style.information}>
        <div className={style.Adress}>Địa Chỉ <span style={{marginLeft: "10px"}}> Diễn trường, Diễn Châu Nghệ An</span></div>
        <div className={style.email}>Email <span style={{marginLeft: "10px"}}>tranducminh2001.word.@gmail.com</span></div>
        <div className={style.phone}>Số Điện Thoại <span style={{marginLeft: "10px"}}> 0833832976</span></div>
        <div className={style.branch}>Chi Nhánh  <span style={{marginLeft: "10px"}}>Hoàng  Mai </span></div>
      </div>
    </Box>
  );
}

export default Connect;
