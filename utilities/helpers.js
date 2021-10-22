// validate user input for integers and floats <= 99.99
export const validateUserInput = (value) => {
  const re = /^([0-9]|[1-9][0-9])(\.[0-9]?)?$/;
  return value === '' || re.test(value);
}

// validate user input for integers but no more than 5 of them
export const validateZipCode = (value) => {
  const re = /^\d{0,5}$/;
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

export const convertAmountToWordsForContext = (amount) => {
  if (amount >= 1000000000) {
    return `$${Number(Math.round(amount/1000000000 + 'e2') + 'e-2')} Billion`
  } else {
    return `$${Number(Math.round(amount/1000000 + 'e2') + 'e-2')} Million`
  }
}

export const categoryPercentage = (amount, total) => {
  return ((amount * 100 / total)).toFixed(1);
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

  let total = Object.values(values).reduce((a, b) => parseFloat(a) + parseFloat(b));
  if (total > 100) {
    let keys = Object.keys(values).sort((a, b) => values[b] - values[a]);
    let balanced = false;
    let i = 0;
    while (!balanced) {
      values[keys[(i % keys.length)]] = (values[keys[(i % keys.length)]] - 0.1).toFixed(1);
      total -= 0.1;
      i++;
      balanced = total == 100;
    }
  } else if (total < 100) {
    let keys = Object.keys(values).sort((a, b) => values[b] + values[a]);
    let balanced = false;
    let i = 0;
    while (!balanced) {
      values[keys[(i % keys.length)]] = (values[keys[(i % keys.length)]] + 0.1).toFixed(1);
      total += 0.1;
      i++;
      balanced = total == 100;
    }
  }

  return values;
};
