import useSwr from 'swr'
import Link from 'next/link'
import React, { useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json())


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

const budgetForm = () => {
  const [slider1, setSlider1] = useState(30);
  const [slider2, setSlider2] = useState(60);
  const [maxReached, setMaxReached] = useState(false)
  const [currentSlider, setCurrentSlider] = useState(null)
  var dict = {
  "slider1":setSlider1,
  "slider2": setSlider2
  };

  const maxTotal = 100;
  var currentTotal = slider1 + slider2
  function handleSlide(e){
    const name = e.target.name
    setCurrentSlider(name)
    currentTotal = slider1 + slider2
    if(currentTotal > maxTotal){
      setMaxReached(true)
      console.log(maxReached);
      console.log(e.target.value);
      console.log(currentTotal)
      dict[name](parseFloat(e.target.value ) - (currentTotal - maxTotal))

      e.preventDefault()
    }
    else{
      setMaxReached(false)
      console.log(maxReached)
      console.log(currentTotal)
      dict[name](parseFloat(e.target.value))


    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Get form data
    let cat_1 = e.currentTarget.slider1.value;
    let cat_2 = e.currentTarget.slider2.value;
    console.log(cat_1, cat_2);
    try {
      fetch("/api/form", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(cat_1)
      })
    } 
    catch (error){
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Fake form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
         {maxReached ? 
            <input name="slider1" type="range" min={1} max={100} defaultValue = {slider1} 
            value = {slider1} onChange = {handleSlide} required />
              :
              <input name="slider1" type="range" min={1} max={100} defaultValue = {slider1}
              onChange = {handleSlide} required />
            }
          </div>
          <div>
           {maxReached ? 
            <input name="slider2" type="range" min={1} max={100} defaultValue = {slider2} 
            value = {slider2} onChange = {handleSlide} required />
              :
              <input name="slider2" type="range" min={1} max={100} defaultValue = {slider2}
              onChange = {handleSlide} required />
            }
           {/* <input name="slider2" type="range" min={1} max={100} defaultValue = {slider2} 
               required />*/}
          </div>
          <div>
            <input name="cat_3" type="number" defaultValue = "30" required />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default budgetForm;
