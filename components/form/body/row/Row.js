import React, { useState } from 'react';
import Label from './Label.js';
import Inputs from './Inputs.js';
import AccordionContent from './AccordionContent.js';
import styles from './Row.module.scss';

export default function Row({
  budgetCategory,
  budgetValue,
  setBudgetValue,
  totalBudget
}) {

  const [accordionOpen, setAccordionOpen] = useState(
    false
  );

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Label
          label={budgetCategory.name}
          amount={budgetCategory.amount}
          totalBudget={totalBudget}
          accordionOpen={accordionOpen}
          setAccordionOpen={setAccordionOpen}/>
        <Inputs
          budgetValue={budgetValue}
          setBudgetValue={setBudgetValue}
          totalBudget={totalBudget}/>
      </div>
      <AccordionContent
        open={accordionOpen}
        content={budgetCategory.descriptive_html}/>
    </React.Fragment>
  );
};
