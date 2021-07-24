import React from "react";
import Inputs from './Inputs.js';

export default function FormHeader({ districts }) {

  return (
    <React.Fragment>
      <header>
        <strong>People&apos;s Vision for the Bronx</strong>
        <p>Participatory Budgeting Survey</p>
      </header>
      <Inputs districts={districts}/>
    </React.Fragment>
  );
};
