import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button/Button'
import ProductItem from '../common/ProductItem/ProductItem'
import style from "./Gallery.module.css"
function Gallery({gallery}) {
  function move_rigth(){
      ProductItem = styled.did`
      transform: translateX(300px);
      `
  }
  function move_left(){
    console.log("aaaa");
  }
  return (
    <div className={style.gallery}>
      <Button className={style.gallery_next}  onClick={()=>move_rigth()} >
          <i className="fa-solid fa-caret-right"></i>
      </Button>
      <div className={style.gallery_list}>
      {gallery.map((item)=>{
        return <ProductItem item={item} key={item.id}/>
      })}
       <Button className={style.gallery_prev} onClick={move_left()} >
        <i className="fa-solid fa-caret-left"></i>
      </Button>

      </div>
    </div>
  )
}

export default Gallery