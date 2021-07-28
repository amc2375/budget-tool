import React from 'react';
import PrimaryText from './PrimaryText.js';
import SecondaryText from './SecondaryText.js';
import Seal from './Seal.js';
import styles from './Banner.module.scss';
export default function Banner() {

  return (
    <React.Fragment>
      <PrimaryText/>
      <SecondaryText/>
      <Seal/>
    </React.Fragment>
  );
};
