import styles from './Headings.module.scss';
import { billionsAmountString } from '../../../utilities/helpers.js';

export default function Headings({ totalBudget, allocatedTotal }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  const overUnderBudgetText = (allocatedTotal) => {
    let difference = parseFloat(allocatedTotal) - 100;
    if (difference >= 0) {
      return `${difference.toFixed(2)}% Over Budget`;
    } else if (difference < 0) {
      return `${(difference * -1).toFixed(2)}% Under Budget`
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <label>NYC Budget</label>
        <div>{billionsAmountString(totalBudget)}</div>
        <p>Click a department to learn more</p>
      </div>
      <div className={styles.right}>
        <div>
          <label>Your Allocation</label>
          <div>{`${(allocatedTotal).toFixed(2)}%`}</div>
          <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
          <p>Drag the slider or enter a percentage.</p>
        </div>
        <div className={styles.rightSub}>
          <label>Reset Values</label>
          <div>{overUnderBudgetText(allocatedTotal)}</div>
          <p>{allocatedTotal < 100 ? "Increase" : "Decrease"} your spending by this amount</p>
        </div>
      </div>
    </section>
  );
};
