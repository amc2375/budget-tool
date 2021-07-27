import styles from './AccordionContent.module.scss';

export default function AccordionContent({ content, open }) {
  return(
    <section
      className={styles.accordionContent}
      style={open ? {} : {display: 'none'}}
      dangerouslySetInnerHTML={{ __html: content }}/>
  );
};
