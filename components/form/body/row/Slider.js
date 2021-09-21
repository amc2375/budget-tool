import styles from './Slider.module.scss';

export default function Slider({ budgetValue, setBudgetValue, id }) {

  const handler = (e) => {
    if (setBudgetValue) {
      setBudgetValue((e.target.value / 100).toFixed(1));
    }
  };

  return (
    <input
      className={styles.slider}
      value={budgetValue * 100}
      onChange={handler}
      type={"range"}
      min={0}
      max={10000}
      step={1}
      id={id}
      required/>
  )
};
