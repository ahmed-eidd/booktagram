import React from 'react';
import Image from 'next/image';
import classes from './GroupCard.module.scss';
import Link from 'next/link'

const GroupCard = () => {
  return (
    <div className={classes.GroupCard}>
      <Link  href="/club/randomid"><a className={classes.Link}></a></Link>
      <div className={classes.ImgContainer}>
        <div className={classes.BgImg}>
          <Image
            src="/assests/news/Background.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={classes.ImgCircle}>
          <Image src="/assests/news/test.png" layout="fill" objectFit="cover" />
        </div>
      </div>
      <h3 className={classes.Title}>Loerm Ipsum Book Club</h3>
      <p className={classes.des}>
        Excepteur sint occaecat cupidatat non sint proidenm sunt in culpa qui
        officia indese norunt mollit aim id est sint laborum sunt in culpa qui
        officia indese norunt ml aim id est sint laborum.
      </p>
      <div className={classes.IconsContainer}>
        <div>
          <i className="fas fa-users"></i> 888 members
        </div>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          6 October, Giza
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
