import useSwr from "swr";
import Link from "next/link";
import React, { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function Index() {
//   const { data, error } = useSwr('/api/users', fetcher)

//   if (error) return <div>Failed to load users</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <div>
//     <h1>Test</h1>
//     <ul>
//       {data.map((user) => (
//         <li key={user.name}>
//           <Link href="/user/[id]" as={`/user/${user.name}`}>
//             <a>{`User ${user.name}`}</a>
//           </Link>
//         </li>
//       ))}
//     </ul></div>
//   )
// }

// http://jsfiddle.net/EL4tf/

// {Object.keys(sliderValues).map((slider) => (
//   <div>
//     <label>{sliderValues[slider]}</label>

//     <input
//       name={slider}
//       type="range"
//       min={1}
//       max={100}
//       value={sliderValues[slider]}
//       onChange={checkIfMaxReached}
//       required
//     />
//   </div>
// ))}

// const [sliderValues, setSliderValues] = useState({
//   slider1: 30,
//   slider2: 60,
// });

const maxTotal = 100;

const budgetForm = () => {

  const [sliderValues, setSliderValues] = useState({
    slider1: 5,
    slider2: 10,
    slider3: 0,
  });

  const getTotal = () => Object.values(sliderValues).reduce((a, b) => a + b, 0);

  function handleChange(event) {
    const name = event.target.name; // Name of this slider.
    const oldVal = sliderValues[name] // Current value in state.
    const newVal = parseInt(event.target.value); // Value of change event.
    
    /*
    * Get the current total from state, 
    * minus the "old"/CURRENT value and
    * plus the "new"/THIS value
    * (we're just updating the old value with the new one).
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

    // If not, don't do anything.
    return null
  }

  return (
    <div>
      <h2>Fake form</h2>

      <div style={{ paddingBottom: "20px" }}>
        <div>
          <label>{sliderValues.slider1}</label>
        </div>

        <input
          name="slider1"
          type="range"
          min={0}
          max={100}
          value={sliderValues.slider1}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <div>
          <label>{sliderValues.slider2}</label>
        </div>
        <input
          name="slider2"
          type="range"
          min={0}
          max={100}
          value={sliderValues.slider2}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ paddingTop: "20px"}}>
        <div>
          <label>{sliderValues.slider3}</label>
        </div>

        <input
          name="slider3"
          type="range"
          min={0}
          max={100}
          step="1"
          value={sliderValues.slider3}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default budgetForm;


// async function handleSubmit(e) {
//   e.preventDefault();
//   // Get form data
//   let cat_1 = e.currentTarget.slider1.value;
//   let cat_2 = e.currentTarget.slider2.value;
//   console.log(cat_1, cat_2);
//   try {
//     fetch("/api/form", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(cat_1),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// <form onSubmit={handleSubmit}>
//   <div>
//     <div>
//    {maxReached ?
//       <input name="slider1" type="range" min={1} max={100} defaultValue = {slider1}
//       value = {slider1} onChange = {handleSlide} required />
//         :
//         <input name="slider1" type="range" min={1} max={100} defaultValue = {slider1}
//         onChange = {handleSlide} required />
//       }
//     </div>
//     <div>
//      {maxReached ?
//       <input name="slider2" type="range" min={1} max={100} defaultValue = {slider2}
//       value = {slider2} onChange = {handleSlide} required />
//         :
//         <input name="slider2" type="range" min={1} max={100} defaultValue = {slider2}
//         onChange = {handleSlide} required />
//       }
//      {/* <input name="slider2" type="range" min={1} max={100} defaultValue = {slider2}
//          required />*/}
//     </div>
//     <div>
//       <input name="cat_3" type="number" defaultValue = "30" required />
//     </div>
//   </div>
//   <div>
//     <button type="submit">Submit</button>
//   </div>
// </form>
