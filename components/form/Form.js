import React, { useState, useEffect } from 'react';
import Nav from '../nav/Nav.js';
import FormModal from './modal/FormModal.js';
import FormHeader from './header/FormHeader.js';
import FormBody from './body/FormBody.js';
import Footer from '../footer/Footer.js';
import { createDefaultBudgetValues } from '../../utilities/helpers.js';
import styles from './Form.module.scss';

function Form({ data }) {

  /* initialize state variables for controlling inputs in the form.
  these variable references and the functions to set are passed
  down so children can update state values. */
  const [district, setDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [budgetFamiliarity, setBudgetFamiliarity] = useState('');
  const [allocatedTotal, setAllocatedTotal] = useState(100);
  const [budgetValues, setBudgetValues] = useState(
    createDefaultBudgetValues(data)
  );

  console.log(allocatedTotal);

    // this should run after handleBudgetValueInput before render
  useEffect(() => {
    if (Object.values(budgetValues).length > 0) {
      setAllocatedTotal(Object.values(budgetValues).reduce((a, b) => {
        let addendA = (a == "") ? 0 : parseFloat(a);
        let addendB = (b == "") ? 0 : parseFloat(b);
        return addendA + addendB;
      }));
    }
  }, [budgetValues, setAllocatedTotal])

  // post the results of the survey
  async function handleSubmit(e) {
    e.preventDefault();
    const submissionData = {
      district: district,
      zipCode: zipCode,
      budgetFamiliarity: budgetFamiliarity,
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

    // create formatted object to store in local storage
    const storedData = [];
    Object.keys(submissionData.budgetValues).forEach(id => {
      storedData.push({
        id: id,
        percentageValue: submissionData.budgetValues[id]
      });
    })

    // store to local storage
    window.localStorage.setItem(
      'peoplesBudgetSubmission',
      JSON.stringify(storedData)
    );
  }

  return (
    <div className={styles.body}>
      <Nav />
      <form className={styles.form}>
        <FormModal
          zipCode={zipCode}
          districts={data.districts}
          setDistrict={setDistrict}
          setZipCode={setZipCode}
          budgetFamiliarity={budgetFamiliarity}
          setBudgetFamiliarity={setBudgetFamiliarity}/>
        <FormHeader
          zipCode={zipCode}
          districts={data.districts}
          setDistrict={setDistrict}
          setZipCode={setZipCode}
          budgetFamiliarity={budgetFamiliarity}
          setBudgetFamiliarity={setBudgetFamiliarity}/>
        <FormBody
          data={data}
          district={district}
          zipCode={zipCode}
          budgetFamiliarity={budgetFamiliarity}
          budgetValues={budgetValues}
          setBudgetValues={setBudgetValues}
          allocatedTotal={allocatedTotal}
          totalBudget={data.totalBudget}
          createDefaultBudgetValues={() => createDefaultBudgetValues(data)}
          handleSubmit={handleSubmit}/>
      </form>
      <Footer />
    </div>
  );
}

export default Form;

// https://usehooks.com/useLocalStorage/
// Hook
function useLocalStorage(key, initialValue) {

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      console.log("item: " + JSON.parse(item));
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
