import React, { useState, useEffect } from "react";
import s from '../../styles/styles.module.scss';
import AllocationInput from './allocationInput.js';

/* the following works because of the babel-plugin-inline-react-svg
dependency. it converts an svg into a react component so that it
can easily be used in a react script like this. see examples at
https://github.com/vercel/next.js/tree/master/examples/svg-components
and https://gist.github.com/iamchristough/493c60112770058566d559e6860dc4c9 */
import ChevronDown from '../../assets/chevron-down.svg';

/* https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3 */
export default function row(props) {

  const {
    budgetCategory,
    userSelectedBudgetValues,
    handleBudgetValueInput,
  } = props;

  const [accordionOpen, setAccordionOpen] = useState(
    false
  );

  /* when a user clicks on the ChevronDown component, the value of
  accordionOpen will invert and the html components will be
  styled..........accordingly */
  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

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
            style={accordionOpen ? {transform: 'rotate(180deg)'} : {}}/>
          <div
            className={s.categoryTitle}
            id={budgetCategory.id}>{budgetCategory.name}</div>
        </section>
        <section className={s.formRowSection}>
        <label>{`${budgetCategory.percentage_of_total}% (${formattedAmount})`}</label>
        </section>
        <AllocationInput
          inputScheme={"slider"}
          name={budgetCategory.id}
          value={userSelectedBudgetValues[budgetCategory.id]}
          handler={handleBudgetValueInput}
          caption={userSelectedBudgetValues[budgetCategory.id] + "%"}/>
      </div>
      <div
        className={s.formRow}
        style={accordionOpen ? {} : {display: 'none'}}>
        <section
          className={s.accordionTextWrapper}
          dangerouslySetInnerHTML={{ __html: budgetCategory.descriptive_html }}/>
      </div>
    </div>
  );
};
