import { useEffect, useState } from 'react';
import styles from './MobileSlider.module.scss';
import Slider from './Slider.js';

export default function MobileSlider({
  budgetValue,
  budgetCategory,
  accordionOpen,
  setAccordionOpen
}) {

  const handler = (e) => {
    setBudgetValue((e.target.value / 100).toFixed(1));
  };

  let [sliderWidth, setSliderWidth] = useState(
    0
  );

// if percentage = .5, position = .5 * clientWidth
// if percentage = 0, position = .05 * clientWidth
// if percentage = 1, position = .95 * client width
// f(p) = 0.9w + 0.05
  useEffect(() => {
    const slider = document.getElementById(budgetCategory);
    const percentageOfSliderProgress = (budgetValue/100);
    const calculatedPosition = ((0.95 * percentageOfSliderProgress) + 0.025) * slider.clientWidth;
    setSliderWidth(slider === null ? 0 : calculatedPosition);
  }, [sliderWidth, budgetCategory, budgetValue]);

  const handleAccordion = (e) => {
    e.preventDefault();
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className={styles.container} onClick={(e) => handleAccordion(e)}>
      <Slider budgetValue={budgetValue} id={budgetCategory}/>
      <div
        style={{left: `${sliderWidth}px`}}
        className={styles.label}>{`${budgetValue}%`}</div>
    </div>
  )
};
