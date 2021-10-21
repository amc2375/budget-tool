import React from 'react';
import AlertTriangle from '../../../static/alert-triangle.svg';
import X from '../../../static/x.svg';
import styles from './Toast.module.scss';

export default function FormModal({ allocatedTotal, exitToastHandler }) {

  const percentage = () => {
    return Math.abs(allocatedTotal - 100).toFixed(1);
  }

  const overUnder = () => {
    return allocatedTotal > 100 ? "over" : "under";
  }

  const moreLess = () => {
    return allocatedTotal > 100 ? "more" : "less";
  }

  return (
    <div className={styles.toastContainer}>
      <div className={styles.x} onClick={exitToastHandler}><X /></div>
      <div className={styles.triangleDesktop}><AlertTriangle /></div>
      <div className={styles.content}>
        <div className={styles.mobileHeader}>
          <div className={styles.triangleMobile}><AlertTriangle /></div>
          <h1>{`Looks like you're ${percentage()}% ${overUnder()} budget.`}</h1>
        </div>
        <p>{`You might want the city to spend ${moreLess()} money (many people agree), but right now we’re only allowing balanced submissions.`}</p>
        <p>{"Allocate 100% of the budget before submitting your survey."}</p>
      </div>
    </div>
  );

};
