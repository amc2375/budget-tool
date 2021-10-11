import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './NavLink.module.scss';
export default function NavButton({ text, path, action }) {

  const router = useRouter();
  const currentPath = router.pathname;
  console.log("paths:")
  console.log(router.pathname)
  console.log(path)

  return (
    <Link href={ path }>
      <a className={currentPath === path ? styles.selectedLink : styles.link} onClick={action}>{ text }</a>
    </Link>
  );
};
