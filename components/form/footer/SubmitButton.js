import styles from './SubmitButton.module.scss';

export default function SubmitButton({ handleSubmit }) {
    return (
      <button
        type={"button"}
        onClick={handleSubmit}
        className={styles.button}>{"Submit"}</button>
    );
};
