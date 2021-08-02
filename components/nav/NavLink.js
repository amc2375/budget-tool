import React from 'react';
import Link from 'next/link';
import styles from './NavLink.module.scss';
export default function NavButton({ text, path }) {

  return (
    <Link href={ path }>
      <a className={styles.link}>{ text }</a>
    </Link>
  );
};
