import {
  billionsAmountString,
  overUnderBudgetText
} from '../../../utilities/helpers.js';
import styles from './Total.module.scss';

export default function Total({
    totalBudget,
    budgetValues,
    setBudgetValues,
    allocatedTotal
  }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  return (
  <div className={styles.container}>
    <div className={styles.left}/>
    <div className={styles.right}>
      <div className={styles.row}>
        <div>
          <div>{`${(allocatedTotal).toFixed(2)}%`}</div>
          <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
        </div>
        <div>{overUnderBudgetText(allocatedTotal)}</div>
      </div>
      <div className={styles.break}/>
      <div className={styles.row}>
        <p>{"Your Allocation"}</p>
        <p>{allocatedTotal < 100 ? "Increase" : "Decrease"} your spending by this amount</p>
      </div>
    </div>
  </div>
  );
};
