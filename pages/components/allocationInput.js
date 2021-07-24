import React, { useState, useEffect } from 'react';
import s from '../../styles/styles.module.scss';
import IncrementalButtons from './incrementalButtons.js';

export default function AllocationInput(props) {

  const {
    name,
    value,
    handler,
    caption,
  } = props;

  let className, type, before, after;
  className = s.formRowSectionCombo;
  type = "range";
  before = <IncrementalButtons
    domElementName={name}
    leftButtonClassName={s.decreaseButtonPointOne}
    leftButtonValue={-1}
    leftDisplayBefore={"-"}
    handler={handler}
    side={"left"}/>;
  after = (
    <React.Fragment>
      <IncrementalButtons
        domElementName={name}
        leftButtonClassName={s.increaseButtonPointOne}
        leftButtonValue={1}
        leftDisplayBefore={"+"}
        handler={handler}
        side={"right"}/>
      <input
        name={name}
        value={value}
        onChange={handler}
        type={"text"}
        min={0}
        max={100}
        step = {0.01}
        required/>
      <div className={s.afterInput}>{"%"}</div>
    </React.Fragment>
  );

  const content = (
    <React.Fragment>
      {before}
      <input
        name={name}
        value={value * 100}
        onChange={handler}
        type={type}
        min={0}
        max={10000}
        step = {1}
        required/>
      {after}
    </React.Fragment>
  );

  return(
    <section className={className}>
        {content}
      <figcaption>{caption}</figcaption>
    </section>
  );
};
