import React, { useState } from "react";
import FormHeader from './header/FormHeader.js';
import FormBody from './body/FormBody.js';
import FormFooter from './footer/FormFooter.js';

import { createDefaultBudgetValues } from './handlers.js';

function Form({ data }) {

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
    createDefaultBudgetValues(data)
  );

  const [allocatedTotal, setAllocatedTotal] = useState(
    100
  );

  return <div></div>

  // return (
  //   <form>
  //     <FormHeader
  //       districts={data.districts}/>
  //     <FormBody/>
  //     <FormFooter/>
  //   </form>
  // );
}

export default Form;
