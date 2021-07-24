import React from 'react';
import Headings from './Headings.js';
import Rows from './Rows.js';
import Total from './Total.js';

export default function FormBody({
    data,
    budgetValues,
    setBudgetValues,
    allocatedTotal
  }) {

  return (
    <React.Fragment>
      <Headings/>
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
    </React.Fragment>
  );
};
