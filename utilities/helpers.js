// validate user input for integers and floats
export const validateUserInput = (value) => {
  const re = /^([0-9]*)(\.{1})?([0-9]*)+$/;
  return value === '' || re.test(value)
}

// divide a number by 1 billion and round to 2 decimal places
export const amountInBillions = (amount) => (
  Number(Math.round(amount/1000000000 + 'e2') + 'e-2')
);

// helper
export const billionsAmountString = (amount) => {
  let rowAmountInBillions = amountInBillions(amount);
  return rowAmountInBillions != 0 ? `$${rowAmountInBillions} Billion` : "$0";
};
