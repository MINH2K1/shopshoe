import React from 'react'
import style from "./TextHeading.module.css";
function TextContent({children}) {
  return (
    <div className={style.textcontent}>{children}</div>
  )
}

export default TextContent