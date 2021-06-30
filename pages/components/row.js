import React, { useState, useEffect } from "react";
import s from '../../styles/styles.module.scss';
import ChevronDown from '../../assets/chevron-down.svg';

/* https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3 */
export default function row(props) {

  const {
    budgetCategory,
    accordionState,
    handleAccordion,
    userSelectedBudgetValues,
    handleBudgetValueInput,
  } = props;

  const amountInBillions = Number(Math.round(budgetCategory.amount/1000000000 + 'e4') + 'e-4');
  const formattedAmount = amountInBillions != 0 ? `$${amountInBillions} Billion` : "$0";

  return(
    <div>
      <div key={budgetCategory.id} className={s.formRow}>
        <section
          className={s.formRowSectionHover}
          id={budgetCategory.id}
          onClick={handleAccordion}>
          <ChevronDown
            className={s.chevron}
            id={budgetCategory.id}
            style={accordionState[budgetCategory.id] ? {transform: 'rotate(180deg)'} : {}}/>
          <div
            className={s.categoryTitle}
            id={budgetCategory.id}>{budgetCategory.name}</div>
        </section>
        <section className={s.formRowSection}>
        <label>{`${budgetCategory.percentage_of_total}% (${formattedAmount})`}</label>
        </section>
        <section className={s.formRowSectionSlider}>
          <input
            name={budgetCategory.id}
            value={userSelectedBudgetValues[budgetCategory.id]}
            onChange={handleBudgetValueInput}
            type="range"
            min={0}
            max={100}
            step = {0.01}
            required
            className="slider"/>
          <figcaption className="user-allocation-percentage">{userSelectedBudgetValues[budgetCategory.id] + "%"}</figcaption>
        </section>
      </div>
      <div
        className={s.formRow}
        style={accordionState[budgetCategory.id] ? {} : {display: 'none'}}>
        <section
          className={s.accordionTextWrapper}
          dangerouslySetInnerHTML={{ __html: budgetCategory.descriptive_html }}/>
      </div>
    </div>
  );
};
