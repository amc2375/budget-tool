import useSwr from "swr";
import React, { useState, useEffect, useCallback } from "react";
import s from '../../styles/styles.module.scss';
import Row from './row.js';
import FooterRow from './footerRow.js';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Form(props) {

  const { inputScheme } = props;

  // get from api/form
  const { data, error } = useSwr(
    '/api/form',
    fetcher
  );

  /* initialize state variables for controlling inputs in the form.
  these variable references and the functions to set are passed
  down into the child components so that logic can be localized to
  each component, but data is never passed up the tree of react
  components; rather, the child components are furnished with the
  ability to display and set values that can then be submitted from
  this level in the hierarchy.
  */
  const [userSelectedDistrict, setUserSelectedDistrict] = useState(
    ''
  );

  const [userInputZipCode, setUserInputZipCode] = useState(
    ''
  );

  const [userSelectedBudgetValues, setUserSelectedBudgetValues] = useState(
    {}
  );

  const [allocatedTotal, setAllocatedTotal] = useState(
    100
  );

  // helper function for sorting data alphabetically, to-do: move this
  const alphabetSort = (a, b) => (
    (a > b) ? 1 : ((b > a) ? -1 : 0)
  );

  // helper function to calculate total $ amount; move to api side
  const calculateFixedBudgetAmount = () => {
    let sum = 0;
    data.categories.forEach(category => {
      sum = sum + category.amount;
    });
    return sum;
  };

  /* helper function used to initialize and reset userSelectedBudgetValues;
  map category ID (key) to default value (value) in pairs. useCallback
  documentation is here: https://reactjs.org/docs/hooks-reference.html#usecallback */
  const resetAssignedBudgetCategoryValues = useCallback(() => {
    data.categories.sort((a, b) => alphabetSort(a.name, b.name));
    let assignedBudgetCategoryValues = {};
    data.categories.map(budgetCategory => {
      if (inputScheme == "slider" || inputScheme == "percentageAsText" || inputScheme == "incremental" || inputScheme == "combo") {
        assignedBudgetCategoryValues[budgetCategory.id] = parseFloat(budgetCategory.percentage_of_total).toString();
      } else {
        let valueInBillions = parseFloat(budgetCategory.amount)/1000000000
        assignedBudgetCategoryValues[budgetCategory.id] = valueInBillions.toFixed(4).toString();
      }
    });
    // save the object of category keys and budget point values
    setUserSelectedBudgetValues(assignedBudgetCategoryValues);
  }, [data, inputScheme]);

  /* useEffect takes two arguments - one is a callback defining
  the operation(s) to perform as part of the Hook, and the other is
  an array of dependencies, such that if none of the dependencies
  have changed between the previous render and the next render,
  then this effect will be skipped for this render. */
  useEffect(() => {
    if (Boolean(data)) {
      data.districts.sort((a, b) => alphabetSort(a.district_id, b.district_id));
      resetAssignedBudgetCategoryValues();
    };

  }, [data, resetAssignedBudgetCategoryValues]);

  /* handlers for changed values and form submission */
  function handleDistrictSelection(event) {
    setUserSelectedDistrict(event.target.value);
  }

  function handleZipCodeInput(event) {
    setUserInputZipCode(event.target.value);
  }

  /* when a user moves a slider, ensure the value is truncated to
  two decimal places because the range input seems not to always obey
  the 'step' attribute set on it. then save the state*/
  function handleBudgetValueInput(event) {
    event.preventDefault();
    let key = event.target.name;
    switch(inputScheme) {
      case "slider":
        let value = parseFloat(parseFloat(event.target.value).toFixed(2)).toString();
        setUserSelectedBudgetValues({
          ...userSelectedBudgetValues,
          [key]: value
        });
        break;
      case "percentageAsText":
        if (validateUserInput(event.target.value)) {
          console.log(event.target.value);
          setUserSelectedBudgetValues({
            ...userSelectedBudgetValues,
            [key]: event.target.value
          });
        }
        break;
      case "amountAsText":
        if (validateUserInput(event.target.value)) {
          console.log(event.target.value);
          setUserSelectedBudgetValues({
            ...userSelectedBudgetValues,
            [key]: event.target.value
          });
        }
        break;
      case "incremental":
        let incrementalChange = parseFloat(event.target.value);
        let oldValue = parseFloat(userSelectedBudgetValues[key]);
        let newValue = (oldValue + parseFloat(incrementalChange)).toString();
        setUserSelectedBudgetValues({
          ...userSelectedBudgetValues,
          [key]: newValue
        });
        break;
      case "combo":
        let val;
        if (textInput) {

        } else if (sliderInput) {

        } else if (incrementerInput) {

        }

        setUserSelectedBudgetValues({
          ...userSelectedBudgetValues,
          [key]: val
        });
        break;
    }
  }

  // helper to validate user input for integers and floats
  const validateUserInput = (value) => {
    const re = /^([0-9]*)(\.{1})?([0-9]*)+$/;
    return value === '' || re.test(value)
  }

  // this should run after handleBudgetValueInput before render
  useEffect(() => {
    if (Object.values(userSelectedBudgetValues).length > 0) {
      setAllocatedTotal(Object.values(userSelectedBudgetValues).reduce((a, b) => {
        let addendA = (a == "") ? 0 : parseFloat(a);
        let addendB = (b == "") ? 0 : parseFloat(b);
        return addendA + addendB;
      }));
    }
  }, [userSelectedBudgetValues])

  /* handler for snap to 100% button; multiply all values by
  (if percentage input) 100 / current allocated total, or
  (if amount as text input) total budget / current allocated total.
  store float value as string.*/
  function handleSnap(event) {
    event.preventDefault();
    let newSelectedBudgetValues = {};
    let categoryKeys = Object.keys(userSelectedBudgetValues);
    let countOfKeys = categoryKeys.lengthe
    let multiplier;
    if (inputScheme == "slider" || inputScheme == "percentageAsText" || "incremental") {
      multiplier = 100 / parseFloat(allocatedTotal);
    } else {
      multiplier = calculateFixedBudgetAmount() / (parseFloat(allocatedTotal) * 1000000000) ;
    }
    let nonZeroFlag = false;
    categoryKeys.forEach(key => {
      let value = userSelectedBudgetValues[key]
      if (value != "0" && value != "" ) {
        nonZeroFlag = true;
        let precision = (inputScheme == "slider" || inputScheme == "percentageAsText" || "incremental") ? 2 : 4;
        value = (parseFloat(userSelectedBudgetValues[key]) * multiplier).toFixed(precision).toString();
      } else {
        value = "0"
      }
      newSelectedBudgetValues = {
        ...newSelectedBudgetValues,
        [key]: value
      };
    });
    if (nonZeroFlag) setUserSelectedBudgetValues(newSelectedBudgetValues);
  }

  // reset user input values for the budget
  function handleReset(event) {
    event.preventDefault();
    resetAssignedBudgetCategoryValues();
  }

  // post the results of the survey
  async function handleSubmit(event) {
    event.preventDefault();
    const submissionData = {
      district: userSelectedDistrict,
      reallocations: userSelectedBudgetValues
    }

    try {
      fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
    } catch (error) {
      console.log(error);
    };
  }

  const getFormLabelsRow = () => {
    switch(inputScheme) {
      case "combo":
      return (
        <div className={s.formLabelsRow}>
          <div className={s.formLabel}>
            <label>Current Allocation</label>
            <p>Click a department to learn more</p>
          </div>
          <div className={s.formLabel}>
            <label>Your Allocation</label>
            <p>Drag the slider or enter a percentage.</p>
          </div>
          <div className={s.formLabel}>

          </div>
        </div>
      )
      default:
        return (
          <div className={s.formLabelsRow}>
            <div className={s.formLabel}>
              <label>Department</label>
              <p>Click a department to learn more</p>
            </div>
            <div className={s.formLabel}>
              <label>Current Allocation</label>
              <p>As of the 2020 NYC Budget</p>
            </div>
            <div className={s.formLabel}>
              <label>Your Allocation</label>
              <p>One department&apos;s budget must be <strong>decreased</strong> before increasing another.</p>
            </div>
          </div>
        )
    }
  }

  /* now for HTML generation */
  if (Boolean(data) && Object.keys(userSelectedBudgetValues).length != 0){
    console.log(userSelectedBudgetValues);
    return (
      <div className={s.body}>
        <form className={s.form}>
          <header className={s.formTitle}>
            <strong>People&apos;s Vision for the Bronx</strong>
            <p>Participatory Budgeting Survey</p>
          </header>
          <div className={s.localeDetails}>
            <div>
              <label>Choose your City Council District</label>
              <select
                defaultValue="default"
                required={true}
                onChange={handleDistrictSelection}>
                <option value="default" disabled>--</option>
                {data.districts.map(district => (
                  <option
                    key={district.id}
                    value={district.id}>
                    {district.district_id ? district.district_id + " - " + district.name : district.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Enter your Zip Code</label>
              <input
                type="text"
                name="zip-code"
                placeholder="10451"
                onChange={handleZipCodeInput}>
              </input>
            </div>
          </div>
          <main className={s.formBody}>
            {getFormLabelsRow()}
            {data.categories.map(budgetCategory => (
              <Row
                inputScheme={inputScheme}
                key={budgetCategory.id}
                budgetCategory={budgetCategory}
                userSelectedBudgetValues={userSelectedBudgetValues}
                handleBudgetValueInput={handleBudgetValueInput}
                fixedBudgetAmount={calculateFixedBudgetAmount()}/>
            ))}
            <div className={s.formFooterLineBreak}/>
            <section className={s.formFooterRow}>
              <FooterRow
                inputScheme={inputScheme}
                allocatedTotal={allocatedTotal}
                fixedBudgetAmount={calculateFixedBudgetAmount()}/>
            </section>
          </main>
          <div className={s.buttonContainer}>
            <div className={s.leftButtons}>
              <button className={s.buttonReset} onClick={handleReset}>Reset</button>
              <button className={s.buttonSnap} onClick={handleSnap}>Snap to 100%</button>
            </div>
            <div className={s.rightButtons}>
              <button className={s.buttonSubmit} onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
};
