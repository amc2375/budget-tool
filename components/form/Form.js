import React, { useState, useEffect } from 'react';
import Nav from '../nav/Nav.js';
import FormHeader from './header/FormHeader.js';
import FormBody from './body/FormBody.js';
import Footer from '../footer/Footer.js';
import { categoryPercentage } from '../../utilities/helpers.js';
import styles from './Form.module.scss';

function Form({ data }) {

  /* initialize state variables for controlling inputs in the form.
  these variable references and the functions to set are passed
  down so children can update state values. */
  const [district, setDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [allocatedTotal, setAllocatedTotal] = useState(100);
  const [budgetValues, setBudgetValues] = useState(
    createDefaultBudgetValues(data)
  );

    // this should run after handleBudgetValueInput before render
  useEffect(() => {
    if (Object.values(budgetValues).length > 0) {
      setAllocatedTotal(Object.values(budgetValues).reduce((a, b) => {
        let addendA = (a == "") ? 0 : parseFloat(a);
        let addendB = (b == "") ? 0 : parseFloat(b);
        return addendA + addendB;
      }));
    }
  }, [budgetValues])

  // post the results of the survey
  async function handleSubmit(e) {
    e.preventDefault();
    const submissionData = {
      district: district,
      zipCode: zipCode,
      budgetValues: budgetValues
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
    <div className={styles.body}>
      <Nav />
      <form className={styles.form}>
        <FormHeader
          districts={data.districts}
          setDistrict={setDistrict}
          setZipCode={setZipCode}/>
        <FormBody
          data={data}
          budgetValues={budgetValues}
          setBudgetValues={setBudgetValues}
          allocatedTotal={allocatedTotal}
          totalBudget={data.totalBudget}
          createDefaultBudgetValues={() => createDefaultBudgetValues(data)}/>
      </form>
      <Footer />
    </div>
  );
}

/*

<FormFooter
  allocatedTotal={allocatedTotal}
  budgetValues={budgetValues}
  setBudgetValues={setBudgetValues}
  handleSubmit={handleSubmit}/>

*/

export default Form;

// helper to create the object used in the state to track user input
const createDefaultBudgetValues = (data) => {
  let values = {};
  data.categories.map(category => {
      values[category.id] = categoryPercentage(
        category.amount, data.totalBudget
      );
  });
  return values;
};
