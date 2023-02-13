import React from 'react'
// import Button from '../common/Button/Button'
import ProductItem from '../common/ProductItem/ProductItem'
import style from "./Gallery.module.css"
function Gallery({gallery}) {

  return (
    <div className={style.gallery}>
      {/* <Button className="gallery_next" >
          <i className="fa-solid fa-caret-right"></i>
      </Button> */}
      <div className={style.gallery_list}>
      {gallery.map((item)=>{
        return <ProductItem item={item} key={item.id}/>
      })}
       {/* <Button className="gallery_prev"  >
        <i className="fa-solid fa-caret-left"></i>
      </Button> */}

      </div>
    </div>
  )
}

export default Gallery