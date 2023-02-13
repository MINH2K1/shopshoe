import React from 'react'
import clsx from 'clsx'
import button from "./Button.module.css"


function Button({handel,className,children }) { 
  
  return (
    <div  className={clsx(className,button.button)}  onClick={handel}>{children}</div>
  )
}

export default Button