import useSwr from "swr";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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

  const [userSelectedBudgetValues, setUserSelectedBudgetValues] = useState(
    {}
  );

  /* useEffect takes two arguments - one is a callback defining
  the operation(s) to perform as part of the Hook, and the other is
  an array of dependencies, such that if none of the dependencies
  have changed between the previous render and the next render,
  then this effect will be skipped for this render. */

  useEffect(() => {

      // map category ID (key) to default value (value) in pairs
    let assignedBudgetCategoryValues = {};
    if (Boolean(data)) {

      data.categories.map(budgetCategory => {
        assignedBudgetCategoryValues[budgetCategory.id] = parseFloat(budgetCategory.default_value);
      });

      // save the object of category keys and budget point values
      setUserSelectedBudgetValues(assignedBudgetCategoryValues);

    };

  }, [data]);


  /* userSelectedBudgetValues is the variable that points to a slice
  of state that looks like the assignedBudgetCategoryValues object.
  function setUserInputValues can be used to update the values
  stored in the state. and there is a variable to track the user's
  district selection and function to update it. */

  /* the first effect will handle updates related to district selection */
  // useEffect(function district() {
  //
  // });

  /* the second effect is used for updating the userInputValues
  state variable with the user's changes on the page */
  // useEffect(function userSelection() {
  //   console.log("userSelectedBudgetValues:");
  //   console.log(userSelectedBudgetValues);
  // });

  /* need some handlers for changed values and form submission */

  function handleDistrictSelection(event) {
    setUserSelectedDistrict(event.target.value);
  }

  function handleBudgetValueInput(event) {
    let key = event.target.name;
    let value = parseFloat(event.target.value);
    setUserSelectedBudgetValues({
      ...userSelectedBudgetValues,
      [key]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const submissionData = {
      district: userSelectedDistrict,
      reallocations: userSelectedBudgetValues
    }

    console.log(submissionData);

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

  if (Boolean(data) && Object.keys(userSelectedBudgetValues).length != 0){
    return (
      <form onSubmit={handleSubmit}>
        <select
          value={userSelectedDistrict}
          required={true}
          onChange={handleDistrictSelection}>

          {data.districts.map(district => (
            <option
              key={district.id}
              value={district.id}>
              {district.name}
            </option>
          ))}

        </select>

        {data.categories.map(budgetCategory => (
            <div key={budgetCategory.id}>
              <label>{budgetCategory.category}</label>
              <input
                name={budgetCategory.id}
                value={userSelectedBudgetValues[budgetCategory.id]}
                onChange={handleBudgetValueInput}
                type="range"
                min={0}
                max={100}
                step = {0.1}
                required />
            </div>
          ))}

        <button>Submit</button>
      </form>
    )
  } else {
    return (
      <div></div>
    )
  }
};
