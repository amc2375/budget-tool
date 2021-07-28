import React from 'react';
import Image from 'next/image';
import bronxSeal from '../../../static/bronx_seal.png';
import styles from './Seal.module.scss';
export default function Seal() {

  return (
    <Image src={bronxSeal} alt={"Bronx Seal"}/>
  );
};
