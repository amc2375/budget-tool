import React from 'react';
import styles from './Info.module.scss';
export default function Info() {

  return (
    <React.Fragment>
      <div className={styles.container}>
        <p>{"Home"}</p>
        <p>{"Participatory Budgeting Survey"}</p>
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
