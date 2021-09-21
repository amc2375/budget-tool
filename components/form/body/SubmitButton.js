import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './SubmitButton.module.scss';

export default function SubmitButton({ handleSubmit, allocatedTotal }) {

  const router = useRouter();

  const route = () => {
    router.push('/thank-you');
  }

  const handle = (e) => {
    handleSubmit(e);
    route();
  }

  const [isDisabled, setIsDisabled ] = useState(
    false
  );

  useEffect(() => {
    if (allocatedTotal && (allocatedTotal).toFixed(1) == "100.00") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [allocatedTotal])

  return (
    <button
      type={"button"}
      onClick={handle}
      className={isDisabled ? styles.buttonDisabled : styles.buttonEnabled}
      disabled={isDisabled}>{"Submit"}</button>
  );
};
