import React from 'react'
import Nav from '../Nav/Nav'
import classes from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div>
   <Nav/>
   <div className={classes.container}>

   {children}
   </div>
   </div>
  )
}

export default Layout
