import styles from './Headings.module.scss';
import ResetLink from './ResetLink.js';
import { billionsAmountString } from '../../../utilities/helpers.js';

export default function Headings({
    totalBudget,
    allocatedTotal,
    createDefaultBudgetValues,
    setBudgetValues
  }) {

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
        <div className={styles.top}>
          <label>NYC Budget</label>
        </div>
        <div className={styles.middle}>
          <div className={styles.billions}>{billionsAmountString(totalBudget)}</div>
        </div>
        <div className={styles.bottom}>
          <p>Click a department to learn more</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.leftSub}>
          <div className={styles.top}>
            <label>Your Allocation</label>
          </div>
          <div className={styles.middle}>
            <div className={styles.allocated}>{`${(allocatedTotal).toFixed(2)}%`}</div>
            <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
          </div>
          <div className={styles.bottom}>
            <p>Drag the slider or enter a percentage.</p>
          </div>
        </div>
        <div className={styles.rightSub}>
          <div className={styles.top}>
          <ResetLink
            setBudgetValues={setBudgetValues}
            createDefaultBudgetValues={createDefaultBudgetValues}/>
          </div>
          <div className={styles.middle}>
            <div className={styles.overAmount}>{overUnderBudgetText(allocatedTotal)}</div>
            <p>{allocatedTotal < 100 ? "Increase" : "Decrease"} your spending by this amount</p>
          </div>
        </div>
      </div>
    </section>
  );
};
