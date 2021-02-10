import React from 'react'
import Link from 'next/link'
import classes from './Button.module.scss'

const Button = ({children,type, to}) => {
  return (
    <>
    {
      type === 'link' && <Link href={to}>
      <a className={classes.btn}>{children}</a></Link>
    }
    { type && type !== 'link' &&
      <button className={classes.btn} type={type}>
     {children}
   </button>}
   </>
  )
}

export default Button
