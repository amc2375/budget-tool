import React from 'react';
import Primary from './Primary.js';
import Secondary from './Secondary.js';
import styles from './Content.module.scss';
export default function Content() {

  return (
    <section className={styles.container}>
      <Primary/>
      <Secondary/>
    </section>
  );
};
