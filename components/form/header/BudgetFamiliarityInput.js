import styles from './BudgetFamiliarityInput.module.scss';

export default function BudgetFamiliarityInput({
    budgetFamiliarity,
    setBudgetFamiliarity
  }) {

  const handler = (e) => {
    setBudgetFamiliarity(e.target.value);
  }

  return (
    <div className={styles.container} onChange={handler}>
      <label>How familiar are you with the NYC Budget?</label>
      <div className={styles.radioButtons}>
      <input type="radio" name="editList" id="1" value="1" checked={budgetFamiliarity === "1"}/>
      <input type="radio" name="editList" id="2" value="2" checked={budgetFamiliarity === "2"}/>
      <input type="radio" name="editList" id="3" value="3" checked={budgetFamiliarity === "3"}/>
      <input type="radio" name="editList" id="4" value="4" checked={budgetFamiliarity === "4"}/>
      <input type="radio" name="editList" id="5" value="5" checked={budgetFamiliarity === "5"}/>
      </div>
      <div className={styles.labels}>
      <label htmlFor="1">1</label>
      <label htmlFor="2">2</label>
      <label htmlFor="3">3</label>
      <label htmlFor="4">4</label>
      <label htmlFor="5">5</label>
      </div>
      <div className={styles.subLabels}>
        <label>(Not Familiar)</label>
        <label>(Very Familiar)</label>
      </div>
    </div>
  );
};
