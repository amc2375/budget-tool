import React from 'react';
import { useRouter } from 'next/router';
import styles from './CallToAction.module.scss';
export default function CallToAction({ text, path }) {

  const router = useRouter();
  const route = () => {
    router.push('/budget-survey')
  }

  // uses an scss function to pass the scss variable name for the color of the button
  return (
    <button
      onClick={route}
      className={styles.button}>{ text }</button>
  );
};
