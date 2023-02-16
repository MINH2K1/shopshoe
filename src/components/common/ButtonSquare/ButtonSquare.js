import clsx from 'clsx'
import React from 'react'
import style from './ButtonSquare.module.css'
import { Link } from 'react-router-dom'
function ButtonSquare({children,product ,className,onClick,param}) {
  return (
    <div  onClick={()=>onClick(product)} className={ clsx(style.buttonsquare,className)}><Link to={param}>{children}</Link></div>
  )
}
export default ButtonSquare