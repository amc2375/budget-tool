import styles from './ResetLink.module.scss';

export default function ResetLink({
    createDefaultBudgetValues,
    setBudgetValues
  }) {

  const handler = (e) => {
    e.preventDefault();
    setBudgetValues(createDefaultBudgetValues());
  }

  return (
    <label
      className={styles.link}
      onClick={handler}>{"Reset Values"}</label>
  );
};
