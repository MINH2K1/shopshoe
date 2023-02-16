import React from 'react'
import style from './BoxColum.module.css'
import clsx from 'clsx'
function BoxColum({children}) {
  return (
    <div className={clsx(style.boxcolum)}>{children}</div>
  )
}

export default BoxColum