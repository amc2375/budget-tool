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

  let className, type;

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
      <figcaption>{caption}</figcaption>
    </section>
  );
};
