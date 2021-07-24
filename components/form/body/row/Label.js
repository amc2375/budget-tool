import ChevronDown from '../../../../static/chevron-down.svg';

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
    <section onClick={handleAccordion}>
      <ChevronDown
        className={s.chevron}
        style={accordionOpen ? {transform: 'rotate(180deg)'} : {}}/>
      <div>{label}</div>
      <div>{`${percentageOfTotal}% (${formattedAmount(amount)})`}</div>
    </section>
  );
};

// helper
const amountInBillions = (amount) => (
  Number(Math.round(amount/1000000000 + 'e2') + 'e-2')
);

// helper
const formattedAmount = (amount) => {
  let rowAmountInBillions = amountInBillions(amount);
  return rowAmountInBillions != 0 ? `$${rowAmountInBillions} Billion` : "$0";
};
