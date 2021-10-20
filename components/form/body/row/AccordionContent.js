import styles from './AccordionContent.module.scss';
import {
  billionsAmountString,
  categoryPercentage
} from '../../../../utilities/helpers.js';
import Text from './Text.js';
import PlusButton from './PlusButton.js';
import MinusButton from './MinusButton.js';

export default function AccordionContent({
  budgetCategoryData, open, budgetValue, setBudgetValue, totalBudget
}) {

  const constructBudgetInContextLine = (amount, description) => {
    return (
      <div className={styles.contextLine} key={amount}>
        <label>{amount}</label>
        <article>{description}</article>
      </div>
    )
  }

  const generateBudgetInContext = () => {
    let elementCollection = [];

    if (budgetCategoryData.context_amount_1 != null) {
      elementCollection.push(constructBudgetInContextLine(
        budgetCategoryData.context_amount_1,
        budgetCategoryData.context_description_1
      ));
    }

    if (budgetCategoryData.context_amount_2 != null) {
      elementCollection.push(constructBudgetInContextLine(
        budgetCategoryData.context_amount_2,
        budgetCategoryData.context_description_2
      ));
    }

    if (budgetCategoryData.context_amount_3 != null) {
      elementCollection.push(constructBudgetInContextLine(
        budgetCategoryData.context_amount_3,
        budgetCategoryData.context_description_3
      ));
    }

    return elementCollection;
  }

  let percentage = categoryPercentage(budgetCategoryData.amount, totalBudget);
  let displayAmount = (percentage / 100) * totalBudget;

  return(
    <section
      style={open ? {} : {display: 'none'}}
      className={styles.container}>
      <div className={styles.accordionTopMobile}>
        <div className={styles.accordionContentDepartmentDetails}>
          <label>{"Department Details"}</label>
          <div className={styles.mobileDetail}><p>{`2021 Budget: ${percentage}% (${billionsAmountString(displayAmount)})`}</p></div>
          <div className={styles.readMore}><p>{budgetCategoryData.description}</p></div>
        </div>
        <div className={styles.mobileAccordionInputWrapper}>
          <label className={styles.mobileLabelAllocate}>Tap to Enter Value</label>
          <div className={styles.mobileAccordionInputs}>
            <MinusButton
              budgetValue={budgetValue}
              setBudgetValue={setBudgetValue}/>
            <Text
              budgetValue={budgetValue}
              setBudgetValue={setBudgetValue}
              totalBudget={totalBudget}/>
            <PlusButton
              budgetValue={budgetValue}
              setBudgetValue={setBudgetValue}/>
          </div>
        </div>
      </div>
      <div className={styles.accordionContentLeft}>
        <label>{"Department Details"}</label>
        <div><p>{budgetCategoryData.description}</p></div>
      </div>
      <div className={styles.accordionContentRight}>
        <p>{"The Budget in Context:"}</p>
        <div>{generateBudgetInContext().map(element => element)}</div>
      </div>
    </section>
  );
};
