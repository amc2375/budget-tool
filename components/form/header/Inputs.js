import CouncilDistrictInput from './CouncilDistrictInput.js';
import ZipCodeInput from './ZipCodeInput.js';
import BudgetFamiliarityInput from './BudgetFamiliarityInput.js';
import styles from './Inputs.module.scss';

export default function Inputs({
    zipCode,
    districts,
    setDistrict,
    setZipCode,
    budgetFamiliarity,
    setBudgetFamiliarity
  }) {

  return (
    <section className={styles.container}>
      <BudgetFamiliarityInput
        budgetFamiliarity={budgetFamiliarity}
        setBudgetFamiliarity={setBudgetFamiliarity}/>
      <CouncilDistrictInput
        districts={districts}
        setDistrict={setDistrict}/>
      <ZipCodeInput
        zipCode={zipCode}
        setZipCode={setZipCode}/>
    </section>
  );
};
