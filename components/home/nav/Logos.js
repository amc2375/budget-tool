import React from 'react';
import Image from 'next/image';
import BarnardCircle from '../../../static/barnard_logo_circle.svg';
import BCDILogoGreyscale from '../../../static/BCDI_logo_greyscale.png';
import styles from './Logos.module.scss';
export default function Logos() {

  return (
    <React.Fragment>
      <BarnardCircle />
      <Image src={BCDILogoGreyscale} alt={"BCDI Logo"}/>
    </React.Fragment>
  );
};
