import { useRouter } from 'next/router';
import styles from './SubmitButton.module.scss';

export default function SubmitButton({ handleSubmit }) {

  const router = useRouter();

  const route = () => {
    router.push('/thank-you');
  }

  const handle = (e) => {
    handleSubmit(e);
    route();
  }

  return (
    <button
      type={"button"}
      onClick={handle}
      className={styles.button}>{"Submit"}</button>
  );
};
