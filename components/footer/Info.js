import React from 'react';
import Link from 'next/link';
import styles from './Info.module.scss';
export default function Info() {

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Link href={"/"}>
          <a>{"Home"}</a>
        </Link>
        <Link href={"/budget-survey"}>
          <a>{"Bronx People's Budget Survey"}</a>
        </Link>
      </div>
      <div className={styles.container}>
        <p>{"Bronx Cooperative Development Initiative"}</p>
        <p>{"Barnard College"}</p>
      </div>
      <div className={styles.container}>
        <figcaption>{"COPYRIGHT 2021"}</figcaption>
      </div>
    </React.Fragment>
  );
};
