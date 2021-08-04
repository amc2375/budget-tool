import React from 'react';
import Image from 'next/image';
import splashImage from '../../../static/peoples-plan.png';
import styles from './SplashImage.module.scss';
export default function SplashImage() {

  return (
    <Image src={splashImage} alt={"Bronx Mural"}/>
  );
};
