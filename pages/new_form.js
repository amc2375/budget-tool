import useSwr from "swr";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

/* Useful Example: http://jsfiddle.net/EL4tf/ */
const budgetForm = () => {

  // get the data from the DB - GET in /api/form.js
  const { data, error } = useSwr(
    '/api/form',
    fetcher
  );

  console.log("data:");
  console.log(data);

  // react lifecycle, need real comment here...
  var [initialValues, setInitialValues] = useState(data);

  console.log("initial values:");
  console.log([initialValues, setInitialValues]);

  // defining more react lifecycle, need real comment here too...
  useEffect(() => {

    // short-circuit if JSON response from GET request was empty
    if (data == null) {
      return
    };

    // initialize new state object
    let updatedState = {};

    // map category ID (key) to default value (value)
    data.categories.forEach(category => {
      updatedState[category.id] = parseFloat(category.default_value);
    });

    // what the heck does this do?
    setInitialValues(updatedState);

  }, [data]);

  return(
    <div>defund the police!</div>
  )

};

export default budgetForm;
