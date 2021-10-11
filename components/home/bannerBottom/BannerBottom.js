import React from 'react';
import PrimaryText from './PrimaryText.js';
import SecondaryText from './SecondaryText.js';
import styles from './BannerBottom.module.scss';
export default function BannerBottom() {

  return (
    <section className={styles.container}>
      <PrimaryText/>
      <SecondaryText/>
    </section>
  );
};
