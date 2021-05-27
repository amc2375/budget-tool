import useSwr from "swr";
import Link from "next/link";
import React, { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

/* Useful Example: http://jsfiddle.net/EL4tf/ */
const budgetForm = () => {
  const {data} = useSwr(
    `/api/form`,
    fetcher
  );
  console.log(data)
  const [sliderValues, setSliderValues] = useState({
    slider1:3.6,
    slider2:3.9,
    slider3:31.6,
    slider4:0.5,
    slider5:17.0,
    slider6:8.1,
    slider7:1.3,
    slider8:1.5,
    slider9:3.1,
    slider10:1.9,
    slider11:1.5,
    slider12:0.8,
    slider13:10.9,
    slider14:2.3,
    slider15:12.1
  });

  const sliderNames = {
    slider1:"Debt Service",
    slider2:"General Government",
    slider3:"Education",
    slider4:"Libraries",
    slider5:"Social Services",
    slider6:"Police & Corrections",
    slider7:"Transportation",
    slider8:"Housing",
    slider9:"Health",
    slider10: "Sanitation",
    slider11: "Environmental Protection",
    slider12: "Recreation & Culture",
    slider13: "Pension & Fringe Benefits",
    slider14: "Fire",
    slider15: "Misc"
  }

  const getTotal = () => Object.values(sliderValues).reduce((a, b) => a + b, 0);

  async function handleSubmit(e) {
    e.preventDefault();
    const location = e.currentTarget.location.value
    const data = {
      location: location, 
      sliderValues: sliderValues
    }
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
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    const name = event.target.name; // Name of this slider.
    const oldVal = sliderValues[name]; // Current value in state.
    const newVal = parseFloat(event.target.value); // Value of change event.

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
      <h2>Budget Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <select 
            name = "location"
            defaultValue = ""
            required
            >
              <option value = "">Select location</option>
              <option value = "bronx">The Bronx</option>
              <option value = "not_bronx">Outside The Bronx</option>
          </select>
        </div>
        <div>
          {Object.keys(sliderValues).map((slider) => (
            <div style={{ paddingTop: "20px;" }} key = {slider}>
              <div>
              <label>{sliderNames[slider]}</label>
                
              </div>

              <input
                name={slider}
                type="range"
                min={0}
                max={100}
                value={sliderValues[slider]}
                onChange={handleChange}
                step = {0.1}
                required
              />
              <div><label>{sliderValues[slider]}</label></div>
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
