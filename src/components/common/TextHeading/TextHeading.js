import React from 'react'
import style from "./TextHeading.module.css";
import clsx from 'clsx';
function TextHeading({className,children}) {
  return (
    <div className= {clsx(style.textheading,className)}>{children}</div>
  )
}

export default TextHeading