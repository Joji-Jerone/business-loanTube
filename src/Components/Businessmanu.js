import React from 'react'
import { useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const Businessmanu = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s-.]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <form>
      <h1>Type your business name manually</h1>
      <label>Business name<br/> </label>
      <input
      id="standard-adornment-amount"
      type="text"
      name = "Business Name"
      required   
      onKeyDown={handleKeyPress}
      onChange={handleChange}
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
      <button onClick={()=>setStep(2)}>Previous</button>
      <button type='submit' onClick={()=>setStep(4)}>Next</button>
      </form>
    </div>
  )
}

export default Businessmanu
