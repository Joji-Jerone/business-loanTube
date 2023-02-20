import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const Directoraddress = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  }

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
      <h1>
      What is your residential address?
      </h1>
      <input
      type = "text" 
      name = "Business Name"
      onKeyDown={handleKeyPress}
      onChange={handleChange}></input>
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
        <button onClick={()=>setStep(6)} >Previous</button>
        <button onClick={()=>setStep(8)} >Next</button>
    </div>
    
  )
}

export default Directoraddress
