import React, { useEffect, useState } from 'react';
import classes from './Nav.module.scss';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { Select } from '@chakra-ui/react';
import Button from '../Button/Button';

const Nav = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const [scrollDir, setScrollDir] = useState('scrolling up');
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (window.pageYOffset === 0) {

        setScrolling(false);
      } else {

        setScrolling(true);
      }
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <div
      className={!scrolling ? classes.container : [classes.container, classes.scroll].join(' ')}
      style={{
        transform:
          scrollDir === 'scrolling up' ? 'translateY(0)' : 'translateY(-100vh)',
       }}
    >
      <Link href="/">
        <a className={classes.logo}>Booktagram</a>
      </Link>
      <div className={classes.navItems}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link href="/news">
              <a>{f('nav_home')}</a>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/news">
              <a>{f('nav_news')}</a>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/news">
              <a>{f('nav_events')}</a>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/news">
              <a>{f('nav_shop')}</a>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/news">
              <a>{f('nav_about')}</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.navBtns}>
        <Button style={{ marginRight: '5px' }} type="link" to="/signup">
          {f('nav_signup')}
        </Button>
        <Button type="link" to="/signup" variant="outline">
          {f('nav_login')}
        </Button>
        <Select
          className={classes.langSelect}
          isFullWidth={false}
          colorScheme="green"
          style={{ border: 'none' }}
          size="sm"
          width="auto"
          onChange={() => {
            console.log('changed');
          }}
        >
          <option value="ar">AR</option>
          <option value="en">EN</option>
        </Select>
      </div>
    </div>
  );
};

export default Nav;
