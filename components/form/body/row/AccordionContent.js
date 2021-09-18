import styles from './AccordionContent.module.scss';
import Text from './Text.js';

export default function AccordionContent({
  content, open, budgetValue, setBudgetValue, totalBudget
}) {
  return(
    <section
      style={open ? {} : {display: 'none'}}
      className={styles.container}>
      <div className={styles.accordionTopMobile}>
        <br/>
        <label>Allocation</label>
        <Text
          budgetValue={budgetValue}
          setBudgetValue={setBudgetValue}
          totalBudget={totalBudget}/>
        <br/>
      </div>
      <div
        className={styles.accordionContentLeft}
        dangerouslySetInnerHTML={{ __html: content }}/>
      <div className={styles.accordionContentRight}>{"Placeholder text"}</div>
    </section>
  );
};
