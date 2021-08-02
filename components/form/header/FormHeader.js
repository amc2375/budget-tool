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
        <p>People&apos;s Vision for the Bronx</p>
        <strong>Participatory Budgeting Survey</strong>
      </header>
      <Inputs
        districts={districts}
        setDistrict={setDistrict}
        setZipCode={setZipCode}/>
    </React.Fragment>
  );

};
