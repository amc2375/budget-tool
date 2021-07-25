import styles from './Headings.module.scss';

export default function Headings() {

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <label>Current Allocation</label>
        <p>Click a department to learn more</p>
      </div>
      <div className={styles.right}>
        <label>Your Allocation</label>
        <p>Drag the slider or enter a percentage.</p>
      </div>
    </section>
  );
};
