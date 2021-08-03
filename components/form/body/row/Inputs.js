import MinusButton from './MinusButton.js';
import Slider from './Slider.js';
import PlusButton from './PlusButton.js';
import Text from './Text.js';
import styles from './Inputs.module.scss';

export default function Inputs({
    budgetValue,
    setBudgetValue,
    totalBudget
  }) {

  return (
    <div className={styles.container}>
      <Text
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}
        totalBudget={totalBudget}/>
      <MinusButton
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
      <PlusButton
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
      <Slider
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
    </div>
  );
};
