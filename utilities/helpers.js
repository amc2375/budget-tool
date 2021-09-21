// validate user input for integers and floats <= 99.99
export const validateUserInput = (value) => {
  const re = /^([0-9]|[1-9][0-9])(\.[0-9]?[0-9]?)?$/;
  return value === '' || re.test(value);
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

export const categoryPercentage = (amount, total) => {
  return (amount * 100 / total).toFixed(1);
}

export const overUnderBudgetText = (allocatedTotal) => {
    let difference = parseFloat(allocatedTotal) - 100;
    if (difference >= 0) {
      return `${difference.toFixed(1)}% Over Budget`;
    } else if (difference < 0) {
      return `${(difference * -1).toFixed(1)}% Under Budget`
    }
  }

export const createDefaultBudgetValues = (data) => {
  let values = {};
  data.categories.map(category => {
      values[category.id] = categoryPercentage(
        category.amount, data.totalBudget
      );
  });
  return values;
};
