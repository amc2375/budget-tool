import { useEffect, useState } from 'react';
import CouncilDistrictInput from './CouncilDistrictInput.js';
import ZipCodeInput from './ZipCodeInput.js';
import BudgetFamiliarityInput from './BudgetFamiliarityInput.js';
import styles from './Inputs.module.scss';

export default function Inputs({
    zipCode,
    districts,
    district,
    setDistrict,
    setZipCode,
    budgetFamiliarity,
    setBudgetFamiliarity,
    modalBackgroundClass,
    modalBodyClass
  }) {

  const [isDisabled, setIsDisabled ] = useState(
    false
  );

  useEffect(() => {
    if (zipCode.length === 5 && budgetFamiliarity && district) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [zipCode, district, budgetFamiliarity])

  const handleContinue = (e) => {
    const background = document.getElementsByClassName(`${modalBackgroundClass}`);
    const modal = document.getElementsByClassName(`${modalBodyClass}`);
    if (background[0]) background[0].remove();
    if (modal[0]) modal[0].remove();
  }

  return (
    <section className={styles.container}>
      <strong>{"Bronx Residents"}</strong>
      <BudgetFamiliarityInput
        budgetFamiliarity={budgetFamiliarity}
        setBudgetFamiliarity={setBudgetFamiliarity}/>
      <CouncilDistrictInput
        districts={districts}
        setDistrict={setDistrict}/>
      <ZipCodeInput
        zipCode={zipCode}
        setZipCode={setZipCode}/>
      <button
        type={"button"}
        onClick={handleContinue}
        disabled={isDisabled}
        className={isDisabled ? styles.buttonDisabled : styles.buttonEnabled}>{"Continue"}</button>
    </section>
  );
};
