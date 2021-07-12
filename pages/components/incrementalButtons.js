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
    inputScheme,
    side
  } = props;

  return (inputScheme != "combo") ? (
    <React.Fragment>
      <button
        name={domElementName}
        value={leftButtonValue}
        className={leftButtonClassName}
        onClick={handler}>{leftDisplayBefore}{leftButtonValue}{leftDisplayAfter}</button>
      <button
        name={domElementName}
        value={rightButtonValue}
        className={rightButtonClassName}
        onClick={handler}>{rightDisplayBefore}{rightButtonValue}{rightDisplayAfter}</button>
    </React.Fragment>
  ) : (
    <button
      name={domElementName}
      value={leftButtonValue}
      className={leftButtonClassName}
      onClick={handler}>{leftDisplayBefore}</button>
  )
};
