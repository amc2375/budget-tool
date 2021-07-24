import React, { useState } from "react";
import FormHeader from './header/FormHeader.js';
import FormBody from './body/FormBody.js';
import FormFooter from './footer/FormFooter.js';

function Form({ data }) {

  /* initialize state variables for controlling inputs in the form.
  these variable references and the functions to set are passed
  down so children can update state values. */
  const [district, setDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [budgetValues, setBudgetValues] = useState(
    createDefaultBudgetValues(data)
  );
  const [allocatedTotal, setAllocatedTotal] = useState(100);

  // post the results of the survey
  async function handleSubmit(event) {
    event.preventDefault();
    const submissionData = {
      district: district,
      reallocations: budgetValues
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

  return (
    <form>
      <FormHeader
        districts={data.districts}
        setDistrict={setDistrict}
        setZipCode={setZipCode}/>

    </form>
  );
}

export default Form;

// helper to create the object used in the state to track user input
const createDefaultBudgetValues = (data) => {
  let values = {};
  data.categories.map(category => {
      values[category.id] = parseFloat(
        category.percentage_of_total
      ).toString();
  });
  return values;
};
