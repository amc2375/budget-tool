import styles from './Headings.module.scss';
import ResetLink from './ResetLink.js';
import {
  billionsAmountString,
  overUnderBudgetText
} from '../../../utilities/helpers.js';

export default function Headings({
    totalBudget,
    allocatedTotal,
    createDefaultBudgetValues,
    setBudgetValues
  }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  const warningText = (allocatedTotal) => {
    return allocatedTotal.toFixed(1) != 100.00 ? overUnderBudgetText(allocatedTotal) : "";
  }

  const warningTextCaption = (allocatedTotal) => {
    return allocatedTotal.toFixed(1) != 100.00 ? `${allocatedTotal < 100 ? "Increase" : "Decrease"} spending` : "";
  }

  return (
    <section className={styles.container}>

      <div className={styles.one}>
        <div className={styles.top}>
          <label>NYC Budget</label>
        </div>
        <div className={styles.middle}>
          <div className={styles.billions}>{billionsAmountString(totalBudget)}</div>
        </div>
        <div className={styles.bottom}/>
      </div>

      <div className={styles.two}>
        <div className={styles.leftSub}>
          <div className={styles.top}>
            <label>Your Allocation</label>
          </div>
          <div className={styles.middle}>
            <div className={styles.allocated}>{`${(allocatedTotal).toFixed(1)}%`}</div>
            <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
          </div>
          <div className={styles.bottom}/>
        </div>
        <div className={styles.divider}/>
        <div className={styles.rightSub}>
          <div className={styles.top}>
          <ResetLink
            setBudgetValues={setBudgetValues}
            createDefaultBudgetValues={createDefaultBudgetValues}/>
          </div>
          <div className={styles.middle}>
            <div className={styles.overAmount}>{warningText(allocatedTotal)}</div>
            <p>{warningTextCaption(allocatedTotal)}</p>
          </div>
        </div>
      </div>

    </section>
  );
};
