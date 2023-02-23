import React from 'react'
import { useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const BusinessNameManual = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s-.]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      Business: e.target.value,
    });
  };

  return (
    <div>
      
      <h1>Type your business name manually</h1>
      <form onSubmit={()=>setStep(41)}>
      <label>Business name<br/> </label>
      <input
      id="standard-adornment-amount"
      type="text"
      name = "Business Name"
      value={data.Business}
      required   
      onKeyDown={handleKeyPress}
      onChange={handleChange}
      ></input><br/>
      <button onClick={()=>setStep(3)}>Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default BusinessNameManual
