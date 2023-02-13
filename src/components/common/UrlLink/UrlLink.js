import React from 'react'
import style from './UrlLink.module.css'
 import { useLocation } from 'react-router-dom';
function UrlLink(props) {

const search = useLocation().search;
console.log(search);
  return (
    <div className={style.urllink}>Trang chủ/product</div>
  )
}
export default UrlLink