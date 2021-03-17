import React from 'react'
import Image from 'next/image';
import Button from '../Button/Button';
import classes from './Header.module.scss';

const Header = () => {
  return (

       <section className={classes.container}>
        <Image src="/assests/Group_3642x.png" width={700} height={500}
        layout='intrinsic' />
        <div className={classes.HeaderText}>
          <h3>
            booktagram
          </h3>
          <p>
            A site dedicated to reading lovers that enables them to follow cultural news and events taking place in the region Reading groups can be establishedand used books can be bought and sold.
          </p>
          <Button type="link" to="#" style={{marginRight: 'auto'}}>Sign up</Button>
        </div>
      </section>
  )
}

export default Header
