import React from 'react';
import Row from './row/Row.js';

export default function Rows({
    data,
    budgetValues,
    setBudgetValues
  }) {

  return (
    <React.Fragment>
    {data.categories.map(budgetCategory => (
      <Row
        key={budgetCategory.id}
        budgetCategory={budgetCategory}
        budgetValues={budgetValues}
        setBudgetValues={setBudgetValues}
        totalBudget={data.totalBudget}/>
    ))}
    </React.Fragment>
  );
};
