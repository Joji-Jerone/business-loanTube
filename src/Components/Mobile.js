import React from 'react'
import { useState } from 'react';

const Mobile = () => {

  const { data, setData } = useState('');
  const [inp, setInp] = useState([]);
  const [inp2, setInp2] = useState([]);


  return (
    <div>
      <form>
      <h1>Mobile number</h1>
      <label>Your mobile number</label><br />
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

      <label> 4-digit code | Please enter the code sent to +44 7760 628710 |</label><br />
      <input
      id="standard-adornment-amount"
      type="number"
      value={inp2}
      inputMode="numeric"
      required
      onkeypress={(e) => {
        if (isNaN(Number(e.key))) {
          e.preventDefault();
        }
      }}
      onChange={(e) => {
        if (e.target.value.length <= 6 && e.target.value >= 0) {
          setInp2(e.target.value);
          setData({
            ...data,
            otp: e.target.value,
          });
        }
      }}
      ></input><br />
      <button>Previous</button>
      <button>Next</button>
      </form>
    </div>
  )
}

export default Mobile
