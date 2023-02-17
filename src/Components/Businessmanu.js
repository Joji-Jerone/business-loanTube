import React from 'react'
import { useState } from 'react';

const Businessmanu = () => {
  const { data, setData } = useState('');
  const [inp, setInp] = useState([]);


  return (
    <div>
      <form>
      <h1>Type your business name manually</h1>
      <label>Business name<br/> </label>
      <input
      id="standard-adornment-amount"
      type="text"
      value={inp}
      required   
      onChange={(e) => {
        if (e.target.value.length <= 7 && e.target.value <= 5000000 && e.target.value >= 0) {
          setInp(e.target.value);
         setData({
           ...data,
           loanAmount: e.target.value,
         });
       }
     }}
       
      ></input><br/>
      <label>What is your business type?</label> <br/>
      <select>
          <option value="sole">Sole Trader</option>
          <option value="2">2 years</option>
          <option value="2-3">2 - 3 years</option>
          <option value="3">More than 3 years</option>
      </select>
      <h1>How long you've been trading for?</h1>
      <label>Business Age</label><br />
      <select>
          <option value="1<">Less than 1 year</option>
          <option value="2">2 years</option>
          <option value="2-3">2 - 3 years</option>
          <option value="3">More than 3 years</option>
      </select><br />
      <button>Previous</button>
      <button>Next</button>
      </form>
    </div>
  )
}

export default Businessmanu
