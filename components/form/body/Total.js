import React from 'react';
import { billionsAmountString } from '../../../utilities/helpers.js';

export default function Total({
    totalBudget,
    budgetValues,
    setBudgetValues,
    allocatedTotal
  }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  return (
    <React.Fragment>
      <label>{"Total"}</label>
      <div>{`${(allocatedTotal).toFixed(2)}%`}</div>
      <span>{`(${billionsAmountString(totalAmount)})`}</span>
    </React.Fragment>
  );
};
