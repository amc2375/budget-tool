import React from 'react';
import Link from 'next/link';
import styles from './NavLink.module.scss';
export default function NavButton({ text, path, action }) {

  return (
    <Link href={ path }>
      <a className={styles.link} onClick={action}>{ text }</a>
    </Link>
  );
};
