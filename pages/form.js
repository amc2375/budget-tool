import useSwr from "swr";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import s from '../styles/styles.module.scss';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function form() {

  // get from api/form
  const { data, error } = useSwr(
    '/api/form',
    fetcher
  );

  // initialize state variables for controlling inputs in the form
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

  // helper function for sorting data alphabetically
  const alphabetSort = (a, b) => (
    (a > b) ? 1 : ((b > a) ? -1 : 0)
  );

  /* helper function used to initialize and reset userSelectedBudgetValues;
  map category ID (key) to default value (value) in pairs */
  const resetAssignedBudgetCategoryValues = () => {
    data.categories.sort((a, b) => alphabetSort(a.name, b.name));
    let assignedBudgetCategoryValues = {};
    data.categories.map(budgetCategory => {
      assignedBudgetCategoryValues[budgetCategory.id] = parseFloat(budgetCategory.percentage_of_total);
    });
    // save the object of category keys and budget point values
    setUserSelectedBudgetValues(assignedBudgetCategoryValues);
  };


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

  }, [data]);


  /* userSelectedBudgetValues is the variable that points to a slice
  of state that looks like the assignedBudgetCategoryValues object.
  function setUserInputValues can be used to update the values
  stored in the state. and there is a variable to track the user's
  district selection and function to update it. */

  /* now we need some handlers for changed values and form submission */

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
    let key = event.target.name;
    let value = parseFloat(parseFloat(event.target.value).toFixed(2));
    setUserSelectedBudgetValues({
      ...userSelectedBudgetValues,
      [key]: value
    });
  }

  // this should run after handleBudgetValueInput, before render
  useEffect(() => {
    if (Object.values(userSelectedBudgetValues).length > 0) {
      setAllocatedTotal(Object.values(userSelectedBudgetValues).reduce((a, b) => a + b));
    }
  }, [userSelectedBudgetValues])

  function handleSnap(event) {
    event.preventDefault();
    let newSelectedBudgetValues = {};
    let categoryKeys = Object.keys(userSelectedBudgetValues);
    let countOfKeys = categoryKeys.length
    let multiplier = 100 / allocatedTotal;
    console.log(multiplier);
    categoryKeys.forEach(key => {
      let value = parseFloat((userSelectedBudgetValues[key] * multiplier).toFixed(2));
      newSelectedBudgetValues = {
        ...newSelectedBudgetValues,
        [key]: value
      };
    });
    setUserSelectedBudgetValues(newSelectedBudgetValues);
  }

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

  /* now for HTML generation */
  // helper function to create the form rows
  function createCategoryRowHTML(budgetCategory) {
    let amountInBillions = Number(Math.round(budgetCategory.amount/1000000000 + 'e4') + 'e-4');
    let formattedAmount = amountInBillions != 0 ? `$${amountInBillions} Billion` : "$0";
    return (
      <div key={budgetCategory.id} className="form-row">
        <label className="category-name">{budgetCategory.name}</label>
        <label className="current-allocation-percentage">{budgetCategory.percentage_of_total + "%"}</label>
        <label className="current-allocation-dollar-amount">{formattedAmount}</label>
        <input
          name={budgetCategory.id}
          value={userSelectedBudgetValues[budgetCategory.id]}
          onChange={handleBudgetValueInput}
          type="range"
          min={0}
          max={100}
          step = {0.01}
          required
          className="slider"/>
        <figcaption className="user-allocation-percentage">{userSelectedBudgetValues[budgetCategory.id] + "%"}</figcaption>
        <details className="accordion-details"
          dangerouslySetInnerHTML={{ __html: budgetCategory.descriptive_html }}/>
      </div>
    )
  }

  // finally the exported react component's return method:
  if (Boolean(data) && Object.keys(userSelectedBudgetValues).length != 0){
    return (
      <div className={s.body}>
        <form className={s.form}>
          <header className={s.formTitle}>
            <strong>People's Vision for the Bronx</strong>
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
                <p>One department's budget must be <strong>decreased</strong> before increasing another.</p>
              </div>
            </div>
            {data.categories.map(budgetCategory => createCategoryRowHTML(budgetCategory))}
            <section className="surplus-display">
              <label>Surplus</label>
              <div>{allocatedTotal.toFixed(2)}</div>
            </section>
          </main>
          <button name="reset" onClick={handleReset}>Reset</button>
          <button name="snap-to-100" onClick={handleSnap}>Snap to 100%</button>
          <button name="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
};
