import React from 'react'
import style from './Box.module.css'
function Box({children}) {
  return (
    <div className={style.box}>{children}</div>
  )
}

export default Box