import React from 'react';

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
      <span>{`(${formattedRowAmount(totalAmount)})`}</span>
    </React.Fragment>
  );
};

// helper
const amountInBillions = (amount) => (
  Number(Math.round(amount/1000000000 + 'e4') + 'e-4')
);

// helper
const formattedRowAmount = (amount) => {
  let rowAmountInBillions = amountInBillions(amount);
  return rowAmountInBillions != 0 ? `$${rowAmountInBillions} Billion` : "$0";
};
