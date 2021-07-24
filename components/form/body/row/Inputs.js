import React from 'react';
import MinusButton from './MinusButton.js';
import Slider from './Slider.js';
import PlusButton from './PlusButton.js';
import Text from './Text.js';

export default function Inputs({ budgetValue, setBudgetValue }) {

  return (
    <React.Fragment>
      <MinusButton
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
      <Slider
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
      <PlusButton
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
      <Text
        budgetValue={budgetValue}
        setBudgetValue={setBudgetValue}/>
    </React.Fragment>
  );
};
