import ChevronDown from '../../../../static/chevron-down.svg';
import {
  billionsAmountString,
  categoryPercentage
 } from '../../../../utilities/helpers.js';
import styles from './Label.module.scss';

export default function Label({
    label,
    amount,
    totalBudget,
    accordionOpen,
    toggleAccordion
  }) {

  /* when a user clicks on the ChevronDown component, the value of
  accordionOpen will invert and the html components will be
  styled..........accordingly */
  const handleAccordion = () => {
    toggleAccordion();
  };

  let percentage = categoryPercentage(amount, totalBudget);
  let displayAmount = amount;

  return (
    <section onClick={handleAccordion} className={styles.container}>
      <label>{label}</label>
      <p>{`${percentage}% `}<span>{`(${billionsAmountString(displayAmount)})`}</span></p>
      <ChevronDown
        style={accordionOpen ? {transform: 'rotate(180deg)'} : {}}/>
    </section>
  );
};
