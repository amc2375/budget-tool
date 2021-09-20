import styles from './AccordionContent.module.scss';
import Text from './Text.js';
import PlusButton from './PlusButton.js';
import MinusButton from './MinusButton.js';

export default function AccordionContent({
  content, open, budgetValue, setBudgetValue, totalBudget
}) {
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
        dangerouslySetInnerHTML={{ __html: content }}/>
      <div className={styles.accordionContentRight}>{"Placeholder text"}</div>
    </section>
  );
};
