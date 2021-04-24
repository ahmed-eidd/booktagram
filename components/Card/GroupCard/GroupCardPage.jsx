import React from 'react';
import Image from 'next/image';
import Button from '../../Button/Button';
import { Grid } from '@chakra-ui/layout';
import classes from './GroupCardPage.module.scss';

const GroupCardPage = () => {
  return (
    <Grid templateColumns="1fr repeat(8,minmax(min-content, 10rem)) 1fr">
      <div className={classes.BgImgContainer}>
        <Image
          src="/assests/news/Background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classes.ClubImgContainer}>
        <Image src="/assests/news/test.png" layout="fill" objectFit="cover" />
      </div>
      <div className={classes.TextContainer}>
        <h3>Lorem Ipsum Book Club</h3>
        <div className={classes.IconsContainer}>
          <div>
            <i className="fas fa-users"></i>888 memebers
          </div>
          <div className={classes.Divider}></div>
          <div>
            <i className="fas fa-globe-africa"></i>Public Group
          </div>
        </div>
      </div>
      <Button className={classes.JoinBtn}>Join This Club</Button>
      <div className={classes.Tabs}>Tabs</div>
    </Grid>
  );
};

export default GroupCardPage;
