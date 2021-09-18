import { useEffect, useState } from 'react';
import styles from './MobileSlider.module.scss';
import Slider from './Slider.js';

export default function MobileSlider({ budgetValue, budgetCategory }) {

  const handler = (e) => {
    setBudgetValue((e.target.value / 100).toFixed(2));
  };

  let [sliderWidth, setSliderWidth] = useState(
    0
  );

  useEffect(() => {
    const slider = document.getElementById(budgetCategory);
    setSliderWidth(slider === null ? 0 : slider.clientWidth);
  }, [sliderWidth, budgetCategory]);

  return (
    <div className={styles.container}>
      <Slider budgetValue={budgetValue} id={budgetCategory}/>
      <div
        style={{left: `${(budgetValue/100) * sliderWidth}px`}}
        className={styles.label}>{`${budgetValue}%`}</div>
    </div>
  )
};
