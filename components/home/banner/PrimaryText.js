import React from 'react';
import styles from './PrimaryText.module.scss';
export default function PrimaryText() {

  return (
    <article className={styles.container}>
      <p className={styles.text}>{"We want to hear from you"}</p>
    </article>
  );
};
