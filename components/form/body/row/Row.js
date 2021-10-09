import React, { useState } from 'react';
import Label from './Label.js';
import DesktopInputs from './DesktopInputs.js';
import AccordionContent from './AccordionContent.js';
import MobileSlider from './MobileSlider.js';
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
      <div className={accordionOpen ? styles.containerSelected : styles.container}>
        <Label
          label={budgetCategory.name}
          amount={budgetCategory.amount}
          totalBudget={totalBudget}
          accordionOpen={accordionOpen}
          setAccordionOpen={setAccordionOpen}/>
        <DesktopInputs
          budgetValue={budgetValue}
          setBudgetValue={setBudgetValue}
          totalBudget={totalBudget}/>
        <MobileSlider
          budgetValue={budgetValue}
          totalBudget={totalBudget}
          budgetCategory={budgetCategory}
          accordionOpen={accordionOpen}
          setAccordionOpen={setAccordionOpen}/>
      </div>
      <AccordionContent
        open={accordionOpen}
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}
        totalBudget={totalBudget}
        budgetCategoryData={budgetCategory}
        />
    </React.Fragment>
  );
};
