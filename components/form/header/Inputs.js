import CouncilDistrictInput from './CouncilDistrictInput.js';
import ZipCodeInput from './ZipCodeInput.js';
import styles from './Inputs.module.scss';

export default function Inputs({
    zipCode,
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
        zipCode={zipCode}
        setZipCode={setZipCode}/>
    </section>
  );
};
