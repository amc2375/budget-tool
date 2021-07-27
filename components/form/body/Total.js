import { billionsAmountString } from '../../../utilities/helpers.js';
import styles from './Total.module.scss';

export default function Total({
    totalBudget,
    budgetValues,
    setBudgetValues,
    allocatedTotal
  }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  return (
    <section className={styles.container}>
      <label>{"Total"}</label>
      <div>
        <span>{`${(allocatedTotal).toFixed(2)}%`}</span>
        <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
      </div>
  </section>
  );
};
