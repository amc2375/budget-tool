import styles from './MinusButton.module.scss';

export default function MinusButton({ budgetValue, setBudgetValue }) {

  const handler = (e) => {
    e.preventDefault();
    if (parseFloat(budgetValue) >= 0.1) {
      setBudgetValue((parseFloat(budgetValue) - 0.1).toFixed(2));
    }
  }

  return (
    <button
    type={"button"}
    onClick={handler}
    className={styles.button}>{"-"}</button>
  );
};
