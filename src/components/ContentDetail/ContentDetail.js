import React from 'react'
import clsx from 'clsx'
import TextHeading from '../common/TextHeading/TextHeading'
import style from "./ContentDetail.module.css"
import { Link } from 'react-router-dom'
function ContentDetail({paragrap,convers}) {
    console.log(paragrap);
    const classes = clsx(
        style.contentdetail,{ [style.convers]:convers}
        )
  return (
    <div className={classes}>
        <img className={style.contentdetail_img} src={paragrap.img} alt="thanhlich"/>
        <div class={style.contentdetail_body}>
            <TextHeading>{paragrap.title}</TextHeading>
            <p class={style.contentdetail_text}>
              {paragrap.text}
            </p>
            <TextHeading >
            <Link to='/category'> XEM TẤT CẢ <i class="fa-solid fa-angle-right"></i></Link> 
            </TextHeading>
          </div>
    </div>
  )
}

export default ContentDetail