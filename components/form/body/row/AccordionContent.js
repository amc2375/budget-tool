import styles from './AccordionContent.module.scss';
import {
  billionsAmountString,
  categoryPercentage,
  convertAmountToWordsForContext
} from '../../../../utilities/helpers.js';
import ExternalLink from '../../../../static/external-link.svg';
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
    budgetCategoryData.contexts.forEach(context => {
      let amount = convertAmountToWordsForContext(context.amount);
      elementCollection.push(constructBudgetInContextLine(
        amount,
        context.description
      ));
    })

    return elementCollection;
  }

  const constructLink = (name, url) => {
    return (
      <a className={styles.link} key={name} href={url} target='_blank' rel="noreferrer">{name}<div className={styles.svgWrapper}><ExternalLink/></div></a>
    )
  }

  const generateLinks = () => {
    let elementCollection = [];
    budgetCategoryData.links.forEach(link => {
      elementCollection.push(constructLink(
        link.name,
        link.url
      ));
    })

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
          <div><p>{budgetCategoryData.description}</p></div>
          <div>{generateLinks().map(element => element)}</div>
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
        <p>{budgetCategoryData.description}</p>
        <label className={styles.linksLabel}>{"Departments Included:"}</label>
        <div className={styles.links}>{generateLinks().map(element => element)}</div>
      </div>
      <div className={styles.accordionContentRight}>
        <p>{"The Budget in Context:"}</p>
        <div>{generateBudgetInContext().map(element => element)}</div>
      </div>
    </section>
  );
};
