import { useEffect, useState } from 'react';
import { amountInBillions } from '../../../../utilities/helpers.js';
import styles from './MobileSlider.module.scss';
import Slider from './Slider.js';

export default function MobileSlider({
  budgetValue,
  totalBudget,
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

  let [subLabelMaxWidth, setSubLabelMaxWidth] = useState(
    0
  );

// if percentage = .5, position = .5 * clientWidth
// if percentage = 0, position = .05 * clientWidth
// if percentage = 1, position = .95 * client width
// f(p) = 0.9w + 0.05
  useEffect(() => {
    const slider = document.getElementById(budgetCategory);
    const percentageOfSliderProgress = (budgetValue/100);
    const calculatedPosition = ((0.92 * percentageOfSliderProgress) + 0.04) * slider.clientWidth;
    setSliderWidth(slider === null ? 0 : calculatedPosition);
    setSubLabelMaxWidth(percentageOfSliderProgress <= .78 ? 120 : 75);
  }, [sliderWidth, budgetCategory, budgetValue]);

  const handleAccordion = (e) => {
    e.preventDefault();
    setAccordionOpen(!accordionOpen);
  };

  const caption = () => {
    if (!accordionOpen) return '';
    if (budgetValue == '' || budgetValue == 0) {
      return "$0";
    } else {
      let multiplier = parseFloat(budgetValue)/100;
      return `$${amountInBillions(totalBudget * multiplier)} Billion`;
    }
  }

  return (
    <div className={styles.container} onClick={(e) => handleAccordion(e)}>
      <Slider budgetValue={budgetValue} id={budgetCategory}/>
      <div
        style={{left: `${sliderWidth}px`}}
        className={styles.label}>{`${budgetValue}%`}</div>
        <div
        style={{left: `${sliderWidth}px`, 'max-width': `${subLabelMaxWidth}px`}}
        className={styles.subLabel}>{caption()}</div>
    </div>
  )
};
