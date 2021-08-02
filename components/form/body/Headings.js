import styles from './Headings.module.scss';
import { billionsAmountString } from '../../../utilities/helpers.js';

export default function Headings({ totalBudget }) {

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <label>NYC Budget</label>
        <div>{billionsAmountString(totalBudget)}</div>
        <p>Click a department to learn more</p>
      </div>
      <div className={styles.right}>
        <label>Your Allocation</label>
        <div></div>
        <p>Drag the slider or enter a percentage.</p>
      </div>
    </section>
  );
};
