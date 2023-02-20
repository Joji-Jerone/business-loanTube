import React , {useContext} from 'react'
import { useState } from 'react';
import { multiStepContext } from './StepContext';

const Loan = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  }

  return (
    <div>
      <h1>How much would you like to borrow? </h1>
      <form>
      <label>Loan amount <br/> </label>
      <input
      id="standard-adornment-amount"
      type="number"
      value={inp}
      inputMode="numeric"
      required
      onKeyDown={handleKeyDown}
      
      onChange={(e) => {
         if (e.target.value.length <= 7 && e.target.value <= 5000000 && e.target.value >= 0) {
           setInp(e.target.value);
          setData({
            ...data,
            loanAmount: e.target.value,
          });
        }
      }}
      >
      </input><br />
      <h1>What do you need this loan for?</h1>
      <select>
          <option value="Business Growth%">Business Growth%</option>
          <option value="Additional Cashflow">Additional Cashflow</option>
          <option value="Stock & Inventory Purchase">Stock & Inventory Purchase</option>
          <option value="Plant & Machinery Purchase">Plant & Machinery Purchase</option>
          <option value="Vehicle Purchase">Vehicle Purchase</option>
          <option value="Existing Loan Refinance">Existing Loan Refinance</option>
          <option value="Other Purposes">Other Purposes</option>
      </select><br />
      <button onClick={()=>setStep(2)}>Next</button>
      </form>
    </div>
  )
}

export default Loan