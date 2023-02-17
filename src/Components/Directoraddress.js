import React from 'react'
import { useState } from 'react';

const Directoraddress = () => {

  const { data, setData } = useState('');
  const [inp, setInp] = useState([]);

  return (
    <div>
      <h1>
      What is your residential address?
      </h1>
      <input></input>
      <h1>Are you a homeowner?</h1>
         <select>
            <option value="yes, with a mortgage">Yes, with a mortgage</option>
            <option value="yes, without a mortgage">Yes, without a mortgage</option>
            <option value="no">No</option>
         </select><br />

      <h1>What is the current value of your property?</h1>
         <label>Property Value </label>
         <input
         id="standard-adornment-amount"
         type="number"
         value={inp}
         inputMode="numeric"
         required
         onkeypress={(e) => {
           if (isNaN(Number(e.key))) {
             e.preventDefault();
           }
         }}
         onChange={(e) => {
           if (e.target.value.length <= 10 && e.target.value >= 0) {
             setInp(e.target.value);
             setData({
               ...data,
               propvalue: e.target.value,
             });
           }
         }}></input>
    </div>
    
  )
}

export default Directoraddress
