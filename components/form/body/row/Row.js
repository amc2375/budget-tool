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
  totalBudget,
  accordionOpen,
  toggleAccordion
}) {

  return (
    <React.Fragment>
      <div className={accordionOpen ? styles.containerSelected : styles.container}>
        <Label
          label={budgetCategory.name}
          amount={budgetCategory.amount}
          totalBudget={totalBudget}
          accordionOpen={accordionOpen}
          toggleAccordion={toggleAccordion}/>
        <DesktopInputs
          budgetValue={budgetValue}
          setBudgetValue={setBudgetValue}
          totalBudget={totalBudget}/>
        <MobileSlider
          budgetValue={budgetValue}
          totalBudget={totalBudget}
          budgetCategory={budgetCategory}
          accordionOpen={accordionOpen}
          toggleAccordion={toggleAccordion}/>
      </div>
      <AccordionContent
        open={accordionOpen}
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}
        totalBudget={totalBudget}
        budgetCategoryData={budgetCategory}/>
    </React.Fragment>
  );
};
