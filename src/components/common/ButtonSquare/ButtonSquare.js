import clsx from 'clsx'
import React from 'react'
import style from './ButtonSquare.module.css'
function ButtonSquare({children, className}) {
  return (
    <div className={ clsx(style.buttonsquare,className)}>{children}</div>
  )
}
export default ButtonSquare