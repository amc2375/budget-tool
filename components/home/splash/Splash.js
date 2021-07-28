import React from 'react';
import Headline from './Headline.js';
import SubHeadline from './SubHeadline.js';
import SplashImage from './SplashImage.js';
import styles from './Splash.module.scss';
export default function Splash() {

  return (
    <React.Fragment>
      <Headline/>
      <SubHeadline/>
      <SplashImage/>
    </React.Fragment>
  );
};
