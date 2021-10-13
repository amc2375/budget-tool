import styles from './BudgetFamiliarityInput.module.scss';

export default function BudgetFamiliarityInput({
    budgetFamiliarity,
    setBudgetFamiliarity
  }) {

  const handler = (e) => {
    setBudgetFamiliarity(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label>How familiar are you with the NYC Budget?</label>
      <input type="radio" name="editList" id="1" value="1"/>
      <label htmlFor="1">1</label>
      <input type="radio" name="editList" id="2" value="2"/>
      <label htmlFor="2">2</label>
      <input type="radio" name="editList" id="3" value="3"/>
      <label htmlFor="3">3</label>
      <input type="radio" name="editList" id="4" value="4"/>
      <label htmlFor="4">4</label>
      <input type="radio" name="editList" id="5" value="5"/>
      <label htmlFor="5">5</label>
      <div>
        <label>(Not Familiar)</label>
        <label>(Very Familiar)</label>
      </div>
    </div>
  );
};
