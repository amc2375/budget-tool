import styles from './ZipCodeInput.module.scss';
import { validateZipCode } from '../../../utilities/helpers.js'

export default function ZipCodeInput({ zipCode, setZipCode }) {

  const handler = (e) => {
    e.preventDefault();
    if (validateZipCode(e.target.value)) setZipCode(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label>Enter your Zip Code</label>
      <input
        type="text"
        name="zip-code"
        placeholder="10451"
        onChange={handler}
        value={zipCode}>
      </input>
    </div>
  );
};
