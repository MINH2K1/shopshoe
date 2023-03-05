import React from 'react'
import style from  "./Banner.module.css"
function Banner({img,heigth}) {
  return (
    <div className={style.Banner}>
        <img src={img} style={{height:`${heigth}`}} alt="banner"/>
    </div>
  )
}

export default Banner