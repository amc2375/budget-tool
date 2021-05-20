import useSwr from "swr";
import Link from "next/link";
import React, { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

/* Useful Example: http://jsfiddle.net/EL4tf/ */
const budgetForm = () => {
  const [sliderValues, setSliderValues] = useState({
    slider1: 5,
    slider2: 10,
    slider3: 0,
  });

  const getTotal = () => Object.values(sliderValues).reduce((a, b) => a + b, 0);

  async function handleSubmit(e) {
    e.preventDefault();
    /*
     * Since the form data is the current state,
     * we don't need to specify the field values
     * via their "name" attribute.
     * We can just POST the state object over to /api/form/
     */
    try {
      fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sliderValues),
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    const name = event.target.name; // Name of this slider.
    const oldVal = sliderValues[name]; // Current value in state.
    const newVal = parseInt(event.target.value); // Value of change event.

    /*
     * Get the current total from state,
     * minus the "old"/current value,
     * plus the "new"/this value
     * (we're updating the old value with the new one).
     */

    const total = getTotal() - oldVal + newVal;

    // If total is less than 100, update state.
    if (total <= 100) {
      const updatedState = {
        ...sliderValues,
        [name]: newVal,
      };
      setSliderValues(updatedState);
    }

    // If total is greater than 100, do nothing.
    return null;
  }

  return (
    <div>
      <h2>Fake form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          {Object.keys(sliderValues).map((slider) => (
            <div style={{ paddingTop: "20px;" }}>
              <div>
                <label>{sliderValues[slider]}</label>
              </div>

              <input
                name={slider}
                type="range"
                min={1}
                max={100}
                value={sliderValues[slider]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>

        <div style={{ paddingTop: "20px;" }}>
          <button style={{ padding: "4px;", background: "#008000" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default budgetForm;
