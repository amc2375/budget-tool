import React, {useState } from 'react';
import Row from './row/Row.js';
import styles from './Rows.module.scss';

export default function Rows({
    data,
    budgetValues,
    setBudgetValues,
    totalBudget
  }) {

  let defaultAccordionState = {};
  data.categories.forEach(budgetCategory => {
    defaultAccordionState[budgetCategory.id] = false
  })

  const [accordionState, setAccordionState] = useState(
    defaultAccordionState
  );

  const toggleAccordion = (budgetCategoryId) => {
    let open = true;
    if (accordionState[budgetCategoryId]) {
      open = false;
    }
    setAccordionState({
      ...defaultAccordionState,
      [budgetCategoryId]: open
    });
  }

  const setBudgetValue = (key) => {
    return function(value) {
      setBudgetValues({
        ...budgetValues,
        [key]: value
      })
    }
  };

  return (
    <React.Fragment>
    {data.categories.map(budgetCategory => (
      <Row
        key={budgetCategory.id}
        budgetCategory={budgetCategory}
        budgetValue={budgetValues[budgetCategory.id]}
        setBudgetValue={setBudgetValue(budgetCategory.id)}
        totalBudget={totalBudget}
        accordionOpen={accordionState[budgetCategory.id]}
        toggleAccordion={() => toggleAccordion(budgetCategory.id)}/>
    ))}
    </React.Fragment>
  );
};
