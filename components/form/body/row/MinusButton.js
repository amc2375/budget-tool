export default function MinusButton({ budgetValue, setBudgetValue }) {

  const handler = (e) => {
    setBudgetValue((parseFloat(budgetValue) - 0.1).toFixed(2));
  }

  return (
    <button
      onClick={handler}>{"-"}</button>
  );
};
