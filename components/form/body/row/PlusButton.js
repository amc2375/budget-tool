import styles from './PlusButton.module.scss';

export default function PlusButton({ budgetValue, setBudgetValue }) {

  const handler = (e) => {
    e.preventDefault();
    if (parseFloat(budgetValue) <= 99.9) {
      setBudgetValue((parseFloat(budgetValue) + 0.1).toFixed(2));
    }
  }

  return (
    <button
    type={"button"}
    onClick={handler}
    className={styles.button}>{"+"}</button>
  );
};
