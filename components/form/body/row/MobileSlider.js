import styles from './MobileSlider.module.scss';
import Slider from './Slider.js';

export default function MobileSlider({ budgetValue }) {

  const handler = (e) => {
    setBudgetValue((e.target.value / 100).toFixed(2));
  };

  return (
    <div className={styles.container}>
      <Slider budgetValue={budgetValue}/>
    </div>
  )
};
