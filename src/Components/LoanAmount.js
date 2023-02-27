import React , {useContext} from 'react'
import { useState } from 'react';
import { multiStepContext } from './StepContext';

const LoanAmount = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  }

  const submitHandler = (e) =>{
    if(data.loanAmount >= 5000){
      setStep(2)  
    }
    else {
      e.preventDefault()
      alert("Enter amount between £5,000 and £5,000,000")
    }
  } 

  return (
    <div>
      <h1>How much would you like to borrow? </h1>
      <form 
      onSubmit = {submitHandler} >
      <label>Loan amount <br/> </label>
      <input
      id="standard-adornment-amount"
      type="number"
      value={data.loanAmount}
      inputMode="numeric"
      required
      onKeyDown={handleKeyDown}
      
      onChange={(e) => {
         if (e.target.value.length <= 7 && e.target.value <= 5000000 && e.target.value >= 0) {
          setData({
            ...data,
            loanAmount: e.target.value,
          });
        }
      }}
      >
      </input><br />
      <button 
      type='submit' >Next</button>
      </form>
    </div>
  )
}

export default LoanAmount