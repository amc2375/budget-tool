import React from 'react';
import Row from './row/Row.js';

export default function Rows({
    data,
    budgetValues,
    setBudgetValues,
    totalBudget
  }) {

  const setBudgetValue = (key) => {
    return function(value) {
      console.log(key);
      console.log(value);
      setBudgetValues({
        ...budgetValues,
        [key]: value
      })
    }
  };

  console.log(budgetValues);

  return (
    <React.Fragment>
    {data.categories.map(budgetCategory => (
      <Row
        key={budgetCategory.id}
        budgetCategory={budgetCategory}
        budgetValue={budgetValues[budgetCategory.id]}
        setBudgetValue={setBudgetValue(budgetCategory.id)}
        totalBudget={totalBudget}/>
    ))}
    </React.Fragment>
  );
};
