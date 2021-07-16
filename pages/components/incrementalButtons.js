import React, { useState, useEffect } from "react";
import s from '../../styles/styles.module.scss';

export default function IncrementalButtons(props) {

  const {
    domElementName,
    leftButtonClassName,
    leftButtonValue,
    leftDisplayBefore,
    leftDisplayAfter,
    rightButtonClassName,
    rightButtonValue,
    rightDisplayBefore,
    rightDisplayAfter,
    handler,
    side
  } = props;

  return (
    <button
      name={domElementName}
      value={leftButtonValue}
      className={leftButtonClassName}
      onClick={handler}>{leftDisplayBefore}</button>
  )
};
