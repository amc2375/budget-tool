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
    setAccordionOpen
  }) {

  /* when a user clicks on the ChevronDown component, the value of
  accordionOpen will invert and the html components will be
  styled..........accordingly */
  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  let percentage = categoryPercentage(amount, totalBudget);
  let displayAmount = (percentage / 100) * totalBudget;

  return (
    <section onClick={handleAccordion} className={styles.container}>
      <ChevronDown
        style={accordionOpen ? {transform: 'rotate(180deg)'} : {}}/>
      <label>{label}</label>
      <p>{`${percentage}% `}<span>{`(${billionsAmountString(displayAmount)})`}</span></p>
    </section>
  );
};
