import React, { useState, useEffect } from "react";
import s from '../../styles/styles.module.scss';
import IncrementalButtons from './incrementalButtons.js';

export default function AllocationInput(props) {

  const {
    inputScheme,
    name,
    value,
    handler,
    caption,
  } = props;

  let className, type, before, after;

  switch(inputScheme) {
    case "slider":
      className = s.formRowSectionSlider;
      type = "range";
      break;
    case "amountAsText":
      className = s.formRowSectionAmountAsText;
      type = "text";
      before = "$";
      after = "Billion"
      break;
    case "percentageAsText":
      className = s.formRowSectionPercentageAsText;
      type = "text";
      after = "%";
      break;
    case "incremental":
      className = s.formRowSectionIncremental;
      type = "range";
      before = <IncrementalButtons
        domElementName={name}
        leftButtonClassName={s.decreaseButtonOne}
        leftButtonValue={-1}
        leftDisplayBefore={""}
        leftDisplayAfter={"%"}
        rightButtonClassName={s.decreaseButtonPointOne}
        rightButtonValue={-0.1}
        rightDisplayBefore={""}
        rightDisplayAfter={"%"}
        handler={handler}/>;
      after = <IncrementalButtons
        domElementName={name}
        leftButtonClassName={s.increaseButtonPointOne}
        leftButtonValue={0.1}
        leftDisplayBefore={"+"}
        leftDisplayAfter={"%"}
        rightButtonClassName={s.increaseButtonOne}
        rightButtonValue={1}
        rightDisplayBefore={"+"}
        rightDisplayAfter={"%"}
        handler={handler}/>;
      break;
  }

  const content = (
    <React.Fragment>
      <div className={s.beforeInput}>{before}</div>
      <input
        disabled={(inputScheme == "incremental") ? true : false}
        name={name}
        value={value}
        onChange={handler}
        type={type}
        min={0}
        max={100}
        step = {0.01}
        required/>
      <div className={s.afterInput}>{after}</div>
    </React.Fragment>
  );


  if (inputScheme == "incremental") {
    return(
      <section className={className}>
        <div className={s.incrementalInputWrapper}>
          {content}
        </div>
        <figcaption>{caption}</figcaption>
      </section>
    );
  } else {
    return(
      <section className={className}>
        {content}
        <figcaption>{caption}</figcaption>
      </section>
    );
  }
};
