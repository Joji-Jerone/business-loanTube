import React from 'react'
import { useState } from 'react';

const Revenue = () => {
  const { data, setData } = useState('');
  const [inp, setInp] = useState([]);
  return (
    <div>
      <h1>How much is total annual revenue/receipts of your business?</h1>
      <label>Total annual revenue / receipts</label><br />
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
            mobile: e.target.value,
          });
        }
      }}></input><br />

      <h1>Does your business accepts card payments?</h1>
      <select>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      </select><br />
      <h1>How much of your business sales come from card payments?</h1>
      <select>
          <option value="0">0%</option>
          <option value="up to 25%">up to 25%</option>
          <option value="25% - 50%">25% - 50%</option>
          <option value="50% - 75%">50% - 75%</option>
          <option value="more than 75%">more than 75%</option>
      </select><br />
    </div>
  )
}

export default Revenue