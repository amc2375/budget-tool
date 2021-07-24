export default function AccordionContent({ content, open }) {
  return(
    <section
      style={open ? {} : {display: 'none'}}
      dangerouslySetInnerHTML={{ __html: content }}/>
  );
};
