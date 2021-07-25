import ChevronDown from '../../../../static/chevron-down.svg';
import { billionsAmountString } from '../../../../utilities/helpers.js';
import styles from './Label.module.scss';

export default function Label({
    label,
    amount,
    percentageOfTotal,
    accordionOpen,
    setAccordionOpen
  }) {

    /* when a user clicks on the ChevronDown component, the value of
    accordionOpen will invert and the html components will be
    styled..........accordingly */
    const handleAccordion = () => {
      setAccordionOpen(!accordionOpen);
    };

  return (
    <section onClick={handleAccordion} className={styles.container}>
      <ChevronDown
        style={accordionOpen ? {transform: 'rotate(180deg)'} : {}}/>
      <div>{label}</div>
      <div>{`${percentageOfTotal}% (${billionsAmountString(amount)})`}</div>
    </section>
  );
};
