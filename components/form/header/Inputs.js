import React from "react";
import CouncilDistrictInput from './CouncilDistrictInput.js';
import ZipCodeInput from './ZipCodeInput.js';

export default function Inputs({
    districts,
    setDistrict,
    setZipCode
  }) {

  return (
    <React.Fragment>
      <CouncilDistrictInput
        districts={districts}
        setDistrict={setDistrict}/>
      <ZipCodeInput
        setZipCode={setZipCode}/>
    </React.Fragment>
  );
};
