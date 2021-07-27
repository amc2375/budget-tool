import CouncilDistrictInput from './CouncilDistrictInput.js';
import ZipCodeInput from './ZipCodeInput.js';
import styles from './Inputs.module.scss';

export default function Inputs({
    districts,
    setDistrict,
    setZipCode
  }) {

  return (
    <section className={styles.container}>
      <CouncilDistrictInput
        districts={districts}
        setDistrict={setDistrict}/>
      <ZipCodeInput
        setZipCode={setZipCode}/>
    </section>
  );
};
