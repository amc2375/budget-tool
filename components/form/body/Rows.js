import React from 'react';
import Row from './row/Row.js';

export default function Rows({
    data,
    budgetValues,
    setBudgetValues,
    totalBudget
  }) {

  const setBudgetValue = (key, value) => {
    setBudgetValues({
      ...budgetValues,
      [key]: value
    })
  };

  return (
    <React.Fragment>
    {data.categories.map(budgetCategory => (
      <Row
        key={budgetCategory.id}
        budgetCategory={budgetCategory}
        budgetValue={budgetValues[budgetCategory.id]}
        setBudgetValue={setBudgetValue}
        totalBudget={totalBudget}/>
    ))}
    </React.Fragment>
  );
};
