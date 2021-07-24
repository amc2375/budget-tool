import React from 'react';
import Label from './Label.js';
import Inputs from '.;Inputs.js';
import AccordionContent from './AccordionContent.js';

export default function Row({
  budgetCategory,
  budgetValue,
  setBudgetValue
}) {

  const [accordionOpen, setAccordionOpen] = useState(
    false
  );

  return (
    <React.Fragment>
      <Label
        label={budgetCategory.name}
        amount={budgetCategory.amount}
        percentageOfTotal={budgetCategory.percentage_of_total}
        accordionOpen={accordionOpen}
        setAccordionOpen={setAccordionOpen}/>
      <Inputs
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
      <AccordionContent
        open={accordionOpen}
        content={budgetCategory.descriptive_html}/>
    </React.Fragment>
  );
};
