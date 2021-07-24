export const createDefaultBudgetValues = (data) => {
  let values = {};
  data.categories.map(category => {
      values[category.id] = parseFloat(category.percentage_of_total).toString();
  });
  return values;
};
