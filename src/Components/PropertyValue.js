import React , {useContext} from 'react'
import { useState } from 'react';
import { multiStepContext } from './StepContext';

const PropertyValue = () => {

  const [inp, setInp] = useState([]);
  const {setStep , data , setData} = useContext(multiStepContext)

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  }

  return (
    <div>
      <form onSubmit={()=>setStep(19)}>
      <h1>What is the current value of your property?</h1>
         <label>Property Value </label>
         <input
         id="standard-adornment-amount"
         type="number"
         value={inp}
         inputMode="numeric"
         required
         onKeyDown={handleKeyDown}
         onChange={(e) => {
           if (e.target.value.length <= 10 && e.target.value >= 0) {
             setInp(e.target.value);
             setData({
               ...data,
               propvalue: e.target.value,
             });
           }
         }}></input><br />
         <button onClick={()=>setStep(17)} >Previous</button>
        <button type='submit' >Next</button>
        </form>
    </div>
  )
}

export default PropertyValue
