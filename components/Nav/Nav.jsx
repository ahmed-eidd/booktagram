import React from 'react';
import classes from './Nav.module.scss';
import Link from 'next/link';
import { useIntl} from 'react-intl';
import { Select } from '@chakra-ui/react';
import Button from '../Button/Button';

const Nav = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={classes.container}>
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
        <Button style={{marginRight: '5px'}} type="link" to="/signup">
          {f('nav_signup')}
        </Button>
          <Button type="link" to="/signup" variant="outline">
          {f('nav_login')}
        </Button>
       <Select className={classes.langSelect} isFullWidth={false} colorScheme='green' style={{border: 'none'}} size='sm' width='auto' onChange={() => {
         console.log('changed')
       }}> 
          <option value='ar'>AR</option>
          <option value='en'>EN</option>
        </Select> 
      </div>
    </div>
  );
};

export default Nav;
