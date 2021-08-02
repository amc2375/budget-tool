import Headings from './Headings.js';
import Rows from './Rows.js';
import Total from './Total.js';
import styles from './FormBody.module.scss';

export default function FormBody({
    data,
    budgetValues,
    setBudgetValues,
    allocatedTotal
  }) {

  return (
    <section className={styles.container}>
      <Headings
        totalBudget={data.totalBudget}
        allocatedTotal={allocatedTotal}/>
      <Rows
        data={data}
        budgetValues={budgetValues}
        setBudgetValues={setBudgetValues}
        totalBudget={data.totalBudget}/>
      <div className={styles.divider}/>
      <Total
        totalBudget={data.totalBudget}
        budgetValues={budgetValues}
        setBudgetValues={setBudgetValues}
        allocatedTotal={allocatedTotal}/>
    </section>
  );
};
