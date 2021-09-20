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
        <label className={styles.mobileLabel}>ALLOCATION</label>
        <div className={styles.mobileAccordionInputs}>
          <PlusButton
            budgetValue={budgetValue}
            setBudgetValue={setBudgetValue}/>
          <Text
            budgetValue={budgetValue}
            setBudgetValue={setBudgetValue}
            totalBudget={totalBudget}/>
          <MinusButton
            budgetValue={budgetValue}
            setBudgetValue={setBudgetValue}/>
        </div>
        <div className={styles.lineBreak}/>
        <br/>
      </div>
      <div
        className={styles.accordionContentLeft}
        dangerouslySetInnerHTML={{ __html: content }}/>
      <div className={styles.accordionContentRight}>{"Placeholder text"}</div>
    </section>
  );
};
