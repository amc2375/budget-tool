export default function Slider({ budgetValue, setBudgetValue }) {

  const handler = (e) => {
    setBudgetValue((event.target.value / 100).toFixed(2));
  };

  return (
    <input
      name={name}
      value={budgetValue * 100}
      onChange={handler}
      type={"range"}
      min={0}
      max={10000}
      step = {1}
      required/>
  )
};
