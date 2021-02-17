import React from 'react';
import Link from 'next/link';
import classes from './Button.module.scss';

const Button = ({ children, type, to, isLoading, ...props }) => {
  return (
    <>
      {type === 'link' && (
        <Link href={to}>
          <a className={classes.btn} {...props}>{isLoading ? <div className={classes.loader}>Loading...</div> : children}</a>
        </Link>
      )}
      {type && type !== 'link' && (
        <button {...props} className={classes.btn} type={type}>
          {isLoading ? <div className={classes.loader}>Loading...</div> : children}
        </button>
      )}
    </>
  );
};

export default Button;
