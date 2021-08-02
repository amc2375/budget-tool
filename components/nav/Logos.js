import Image from 'next/image';
import BarnardCircle from '../../static/barnard_logo_circle.svg';
import BCDILogoGreyscale from '../../static/BCDI_logo_greyscale.png';
import styles from './Logos.module.scss';
export default function Logos() {

  return (
    <div className={styles.container}>
      <BarnardCircle />
      <Image src={BCDILogoGreyscale} alt={"BCDI Logo"}/>
    </div>
  );
};
