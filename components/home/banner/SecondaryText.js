import styles from './SecondaryText.module.scss';
export default function SecondaryText() {

  return (
    <article className={styles.container}>
      <p className={styles.text}>{"The New York City Budget reflects the City’s priorities. We want to know what’s important to you and how you would allocate the budget to reflect your needs and priorities."}</p>
    </article>
  );
};
