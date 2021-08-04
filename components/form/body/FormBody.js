import Headings from './Headings.js';
import Rows from './Rows.js';
import Total from './Total.js'
import styles from './FormBody.module.scss';

export default function FormBody({
    data,
    budgetValues,
    setBudgetValues,
    allocatedTotal,
    createDefaultBudgetValues
  }) {

  return (
    <section className={styles.container}>
      <Headings
        totalBudget={data.totalBudget}
        setBudgetValues={setBudgetValues}
        allocatedTotal={allocatedTotal}
        createDefaultBudgetValues={createDefaultBudgetValues}/>
      <Rows
        data={data}
        budgetValues={budgetValues}
        setBudgetValues={setBudgetValues}
        totalBudget={data.totalBudget}/>
      <Total
        totalBudget={data.totalBudget}
        budgetValues={budgetValues}
        setBudgetValues={setBudgetValues}
        allocatedTotal={allocatedTotal}/>
      <div className={styles.divider}/>
    </section>
  );
};
