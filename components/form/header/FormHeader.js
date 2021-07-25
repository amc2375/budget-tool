import React from 'react';
import Inputs from './Inputs.js';
import styles from './FormHeader.module.scss';

export default function FormHeader({
    districts,
    setDistrict,
    setZipCode
  }) {

  return (
    <React.Fragment>
      <header className={styles.header}>
        <strong>People&apos;s Vision for the Bronx</strong>
        <p>Participatory Budgeting Survey</p>
      </header>
      <Inputs
        districts={districts}
        setDistrict={setDistrict}
        setZipCode={setZipCode}/>
    </React.Fragment>
  );

};
