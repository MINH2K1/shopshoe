import React from 'react'
import style from './BoxColum.module.css'
function BoxColum({children}) {
  return (
    <div className={style.boxcolum}>{children}</div>
  )
}

export default BoxColum