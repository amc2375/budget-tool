import React, { useState, useEffect } from "react";
import s from '../../styles/styles.module.scss';

/* https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3 */
export default function FooterRow(props) {

  const {
    inputScheme,
    allocatedTotal,
    fixedBudgetAmount
  } = props;

  const formatBillionsOfDollars = (amount) => (
    Number(Math.round(amount/1000000000 + 'e4') + 'e-4')
  );

  const formattedRowAmount = (amount) => {
    let rowAmountInBillions = formatBillionsOfDollars(amount);
    return rowAmountInBillions != 0 ? `$${rowAmountInBillions} Billion` : "$0";
  };

  let className, label, value, after;
  switch(inputScheme) {
    case "incremental":
    case "slider":
      className = s.formFooterRowContentsSurplus;
      label = "Surplus";
      value = `${(100 - allocatedTotal).toFixed(2)}%`
      break;
    case "amountAsText":
      className = s.formFooterRowContentsTotalAmount;
      label = "Total";
      let ratio = (parseFloat(allocatedTotal) * 1000000000) / fixedBudgetAmount;
      console.log("allocatedTotal");
      console.log(allocatedTotal);
      value = `$${(allocatedTotal).toFixed(2)} Billion`;
      after = `(${(ratio * 100).toFixed(2)}%)`;
      break;
    case "percentageAsText":
    case "combo":
      className = s.formFooterRowContentsTotalPercentage;
      label = "Total";
      let totalDollarAmount = (parseFloat(allocatedTotal)/100) * fixedBudgetAmount;
      value = `${(allocatedTotal).toFixed(2)}%`;
      after = `(${formattedRowAmount(totalDollarAmount)})`;
      break;
  };

  return(
    <div className={className}>
      <label>{label}</label>
      <div>{value}</div>
      <span>{after}</span>
    </div>
  );
}
