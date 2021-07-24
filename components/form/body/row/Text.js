import React from 'react';

export default function Text({ budgetValue, setBudgetValue }) {

  const handler = (e) => {
    if (validateUserInput(e.target.value)) {
      setBudgetValue(e.target.value);
    };
  };

  const caption = () => {
    if (budgetValue == '' || budgetValue == '0') {
      return "($0)";
    } else {
      let multiplier = parseFloat(budgetValue)/100;
      return `$${amountInBillions(fixedBudgetAmount * multiplier)} Billion`;
    }
  }

  return (
    <React.Fragment>
      <input
        value={budgetValue}
        onChange={handler}
        type={"text"}
        min={0}
        max={100}
        step = {0.01}
        required/>
      <div>{"%"}</div>
      <figcaption>{caption()}</figcaption>
    </React.Fragment>
  );
};

// helper to validate user input for integers and floats
const validateUserInput = (value) => {
  const re = /^([0-9]*)(\.{1})?([0-9]*)+$/;
  return value === '' || re.test(value)
}

// helper
const amountInBillions = (amount) => (
  Number(Math.round(amount/1000000000 + 'e2') + 'e-2')
);
