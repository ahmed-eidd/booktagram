import React from 'react';
import Link from 'next/link';
import classes from './Button.module.scss';

const Button = ({ children, type, to, isLoading,variant, onClick, style, ...props }) => {
  const btnClass = variant === 'outline' ? [classes.btn, classes.outline].join(' ') : [classes.btn, classes.filled].join(' ')
  return (
    <>
      {type === 'link' &&  (
        <Link href={to} >
       
          <a className={btnClass} onClick={onClick} style={style}>{isLoading ? <div className={classes.loader}>Loading...</div> : children}</a>
        </Link>
      )}
      {type !== 'link' &&  (
        <button onClick={onClick} style={style} className={btnClass} type={type}>
          {isLoading ? <div className={classes.loader}>Loading...</div> : children}
        </button>
      )}
    </>
  );
};

export default Button;
