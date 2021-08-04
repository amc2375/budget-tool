import styles from './AccordionContent.module.scss';

export default function AccordionContent({ content, open }) {
  return(
    <section
      style={open ? {} : {display: 'none'}}
      className={styles.container}>
      <div
        className={styles.accordionContentLeft}
        dangerouslySetInnerHTML={{ __html: content }}/>
      <div className={styles.accordionContentRight}>{"Placeholder text"}</div>
    </section>
  );
};
