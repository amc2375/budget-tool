import React from 'react';
import ResetButton from './ResetButton.js';
import SnapButton from './SnapButton.js';
import SubmitButton from './SubmitButton.js';

export default function FormFooter({
    allocatedTotal,
    budgetValues,
    setBudgetValues,
    handleSubmit,
    createDefaultBudgetValues
  }) {

  return (
    <React.Fragment>
      <ResetButton
        setBudgetValues={setBudgetValues}
        createDefaultBudgetValues={createDefaultBudgetValues}/>
      <SnapButton
        budgetValues={budgetValues}
        setBudgetValues={setBudgetValues}
        allocatedTotal={allocatedTotal}/>
      <SubmitButton
        handleSubmit={handleSubmit}/>
    </React.Fragment>
  );
};
