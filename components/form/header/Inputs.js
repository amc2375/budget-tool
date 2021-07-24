import React from "react";
import CouncilDistrictInput from './CouncilDistrictInput.js';
import ZipCodeInput from './ZipCodeInput.js';

export default function Inputs({ districts }) {

  return (
    <React.Fragment>
      <CouncilDistrictInput districts={districts}/>
      <ZipCodeInput/>
    </React.Fragment>
  );
};
