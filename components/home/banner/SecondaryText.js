import styles from './SecondaryText.module.scss';
export default function SecondaryText() {

  return (
    <article className={styles.container}>
      <p className={styles.text}>{"How would you allocate the City’s budget?"}</p>
      <p className={styles.text}>{"How much of our money should go to each city department every year?"}</p>
    </article>
  );
};
