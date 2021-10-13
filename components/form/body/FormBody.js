import Headings from './Headings.js';
import Rows from './Rows.js';
import Total from './Total.js'
import styles from './FormBody.module.scss';

export default function FormBody({
    data,
    district,
    zipCode,
    budgetFamiliarity,
    budgetValues,
    setBudgetValues,
    allocatedTotal,
    createDefaultBudgetValues,
    handleSubmit
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
        district={district}
        zipCode={zipCode}
        budgetFamiliarity={budgetFamiliarity}
        totalBudget={data.totalBudget}
        budgetValues={budgetValues}
        setBudgetValues={setBudgetValues}
        allocatedTotal={allocatedTotal}
        createDefaultBudgetValues={createDefaultBudgetValues}
        handleSubmit={handleSubmit}/>
      <div className={styles.divider}/>
    </section>
  );
};
