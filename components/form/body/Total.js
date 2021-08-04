import {
  billionsAmountString,
  overUnderBudgetText
} from '../../../utilities/helpers.js';
import SubmitButton from './SubmitButton.js';
import styles from './Total.module.scss';

export default function Total({
    totalBudget,
    budgetValues,
    setBudgetValues,
    allocatedTotal,
    handleSubmit
  }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  return (
  <div className={styles.container}>
    <div className={styles.left}/>
    <div className={styles.right}>
      <div className={styles.row}>
        <div className={styles.total}>
          <p>{`${(allocatedTotal).toFixed(2)}%`}</p>
          <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
        </div>
        <div className={styles.overUnder}>
          <p>{overUnderBudgetText(allocatedTotal)}</p>
        </div>
      </div>
      <div className={styles.divider}/>
      <div className={styles.row}>
        <p className={styles.caption}>{"Your Allocation"}</p>
        <p className={styles.caption}>{allocatedTotal < 100 ? "Increase" : "Decrease"} your spending by this amount</p>
      </div>
      <div className={styles.row}>
        <div/>
        <SubmitButton handleSubmit={handleSubmit}/>
      </div>
    </div>
  </div>
  );
};
