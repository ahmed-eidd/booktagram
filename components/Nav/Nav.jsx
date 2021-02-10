import React from 'react';
import classes from './Nav.module.scss';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Button from '../Button/Button';

const Nav = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={classes.container}>
      <div className={classes.logo}>Booktagram</div>
      <div className={classes.navItems}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link href="/news">
              <a>{f('nav_news')}</a>
            </Link>
          </li>
          <li className={classes.navItem}>
            {' '}
            <Link href="/news">
              <a>{f('nav_events')}</a>
            </Link>
          </li>
          <li className={classes.navItem}>
            {' '}
            <Link href="/news">
              <a>{f('nav_liberies')}</a>
            </Link>
          </li>
        </ul>
        <Button type="link" to="/signup">
          {f('join')}
        </Button>
      </div>
    </div>
  );
};

export default Nav;
