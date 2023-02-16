import React from 'react'
import style from './UrlLink.module.css'

function UrlLink(props) {

const search = window.location.pathname;
  return (
    <div className={style.urllink}>Trang Chủ {search}</div>
  )
}
export default UrlLink