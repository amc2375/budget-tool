import styles from './AccordionContent.module.scss';
import Text from './Text.js';
import PlusButton from './PlusButton.js';
import MinusButton from './MinusButton.js';

export default function AccordionContent({
  budgetCategoryData, open, budgetValue, setBudgetValue, totalBudget
}) {

  const constructBudgetInContextLine = (amount, description) => {
    return (
      <div>
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

  return(
    <section
      style={open ? {} : {display: 'none'}}
      className={styles.container}>
      <div className={styles.accordionTopMobile}>
        <div className={styles.lineBreak}/>
        <label className={styles.mobileLabelAllocate}>ALLOCATION</label>
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
        <div className={styles.lineBreak}/>
      </div>
      <label className={styles.mobileLabelDetails}>Department Details</label>
      <div
        className={styles.accordionContentLeft}
        dangerouslySetInnerHTML={{ __html: budgetCategoryData.descriptive_html }}/>
      <div className={styles.accordionContentRight}>
        <p>{"The Budget in Context:"}</p>
        <div>{generateBudgetInContext().map(element => element)}</div>
      </div>
    </section>
  );
};
