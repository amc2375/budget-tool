export default function SnapButton({
    allocatedTotal,
    budgetValues,
    setBudgetValues
  }) {

    const handler = (e) => {
      e.preventDefault();
      let newBudgetValues = {};
      let categoryKeys = Object.keys(budgetValues);
      let multiplier = 100 / parseFloat(allocatedTotal);
      let nonZeroFlag = false;
      categoryKeys.forEach(key => {
        let value = budgetValues[key]
        if (value != "0" && value != "" ) {
          nonZeroFlag = true;
          let precision = 2;
          value = (parseFloat(budgetValues[key]) * multiplier).toFixed(precision).toString();
        } else {
          value = "0"
        }
        newBudgetValues = {
          ...newBudgetValues,
          [key]: value
        };
      });
      if (nonZeroFlag) setBudgetValues(newBudgetValues);
    }

    return <button type={"button"} onClick={handler}>{"Snap to 100%"}</button>;
};
