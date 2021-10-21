import { useEffect, useState } from 'react';
import styles from './SubmitButton.module.scss';

export default function SubmitButton({
  handleSubmit,
  allocatedTotal,
  district,
  budgetFamiliarity,
  zipCode
}) {

  const handle = (e) => {
    handleSubmit(e);
  }

  const [isDisabled, setIsDisabled ] = useState(
    false
  );

  useEffect(() => {
    if (allocatedTotal && (allocatedTotal).toFixed(1) == "100.0") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [allocatedTotal, zipCode, district, budgetFamiliarity])

  return (
    <button
      type={"button"}
      onClick={handle}
      className={isDisabled ? styles.buttonDisabled : styles.buttonEnabled}>{"Submit"}</button>
  );
};
