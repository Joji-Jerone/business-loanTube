import React , { useState ,useContext } from 'react'
import { multiStepContext } from './StepContext'


const BusinessAddressManual = () => {

   const {setStep , data , setData} = useContext(multiStepContext)
   const [inp, setInp] = useState([]);
   const [inp2, setInp2] = useState([]);
   const [inp3, setInp3] = useState([]);
   const [inp4, setInp4] = useState([]);
   const [inp5, setInp5] = useState([]);

   function handleKeyDown(event) {
      // Check if the key pressed is a number or backspace
      if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
        event.preventDefault();
      }
    }

  return (
    <div>
      <form onSubmit={()=>setStep(11)}>
         <h1> Kindly Enter Your Address Manually</h1>
      <input 
              id="standard-adornment-amount" 
              type="number" 
              onKeyDown={handleKeyDown}
              value={inp}
              onChange={(e) => {
                if (e.target.value >= 0 && e.target.value.length <= 6 ) {
                  setInp(e.target.value);
                  setData({
                    ...data,
                    postcode: e.target.value,
                  });
                }
              }}
              placeholder='Post Code'
              required /> <br />

            <input
              type="number"
              id="standard-basic"
              label="House Number"
              variant="standard"
              onKeyDown={handleKeyDown}
              value={inp2}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0 ) {
                  setInp2(e.target.value);
                  setData({
                    ...data,
                    houseno: e.target.value,
                  });
                }
              }}
              placeholder='House Number'
            /> <br />
            <input
              type="number"
              id="standard-basic"
              label="Flat Number (Optional)"
              variant="standard"
              onKeyDown={handleKeyDown}
              value={inp3}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setInp3(e.target.value);
                  setData({
                    ...data,
                    flatno: e.target.value,
                  });
                }
              }}
              placeholder='Flat Number'
            /> <br />
            <input
              id="standard-basic"
              label="House Name (Optional)"
              variant="standard"
              placeholder='House Name (Optional)'
            /> <br />
            <input
              id="standard-basic"
              label="Street"
              variant="standard"
              placeholder='Street'
              required
            /> <br />
            <input
              id="standard-basic"
              label="Country/District"
              variant="standard"
              placeholder = 'Country/District'
              required
            /> <br />
            <input
              id="standard-basic"
              label="City"
              variant="standard"
              placeholder = 'City'
              required
            /> <br />
            <label mt={4} variant="subtitle1">
              Time At This Adress *
            </label> <br />
            <input
              type="number"
              id="standard-basic"
              label="Years"
              variant="standard"
              placeholder="Years"
              onKeyDown={handleKeyDown}
              value={inp4}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value < 50 && e.target.value >= 0) {
                  setInp4(e.target.value);
                  setData({
                    ...data,
                    houseno: e.target.value,
                  });
                }
              }}
              required
            /> <br />
            <input
              type="number"
              id="standard-basic"
              label="Months"
              variant="standard"
              value={inp5}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value <= 11 && e.target.value >= 0) {
                  setInp5(e.target.value);
                  setData({
                    ...data,
                    houseno: e.target.value,
                  });
                }
              }}
              placeholder="Months"
              required
            /> <br />
      <button onClick={()=>setStep(10)}>Previous</button>
      <button type='submit'>Next </button>
      </form>
    </div>
  )
}

export default BusinessAddressManual
