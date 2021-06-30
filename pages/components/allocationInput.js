import React, { useState, useEffect } from "react";
import s from '../../styles/styles.module.scss';

export default function AllocationInput(props) {

  const {
    inputScheme,
    name,
    value,
    handler,
    caption,
  } = props;

  let className, type, after;

  switch(inputScheme) {
    case "slider":
      className = s.formRowSectionSlider;
      type = "range";
      break;
    case "amountAsText":
      className = s.formRowSectionAmountAsText;
      type = "text";
      break;
    case "percentageAsText":
      className = s.formRowSectionPercentageAsText;
      type = "text";
      after = "%";
      break;
    case "incremental":
      className = s.formRowSectionIncremental;
      type = "range";
      break;
  }

  return(
    <section className={className}>
      <input
        name={name}
        value={value}
        onChange={handler}
        type={type}
        min={0}
        max={100}
        step = {0.01}
        required/>
      <div className={s.afterInput}>{after}</div>
      <figcaption>{caption}</figcaption>
    </section>
  );
};
