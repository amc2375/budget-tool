import {
  amountInBillions,
  validateUserInput
} from '../../../../utilities/helpers.js';
import styles from './Text.module.scss';

export default function Text({
    budgetValue,
    setBudgetValue,
    totalBudget
  }) {

  const handler = (e) => {
    e.preventDefault();
    console.log(typeof e.target.value);
    if (validateUserInput(e.target.value) && e.target.value <= 100) {
      setBudgetValue(e.target.value);
    };
  };

  const caption = () => {
    if (budgetValue == '' || budgetValue == 0) {
      return "$0";
    } else {
      let multiplier = parseFloat(budgetValue)/100;
      return `$${amountInBillions(totalBudget * multiplier)} Billion`;
    }
  }

  return (
    <section>
      <div className={styles.inputAndPercentage}>
        <input
          className={styles.input}
          value={budgetValue}
          onChange={handler}
          type={"text"}
          min={0}
          max={100}
          step = {0.01}
          required/>
        <div className={styles.after}>{"%"}</div>
      </div>
      <figcaption className={styles.caption}>{caption()}</figcaption>
    </section>
  );
};
