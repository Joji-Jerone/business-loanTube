import React , { useState ,useContext } from 'react'
import { multiStepContext } from './StepContext'


const BusinessAddressManual = () => {

   const {setStep , data , setData} = useContext(multiStepContext)

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
              value={data.BusinessPostcode}
              onChange={(e) => {
                if (e.target.value >= 0 && e.target.value.length <= 6 ) {
                  setData({
                    ...data,
                    BusinessPostcode: e.target.value,
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
              value={data.Businesshouseno}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0 ) {
                  
                  setData({
                    ...data,
                    Businesshouseno: e.target.value,
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
              value={data.Businessflatno}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    Businessflatno: e.target.value,
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
              value={data.BusinessHousename}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    BusinessHousename: e.target.value,
                  });
                }
              }}
            /> <br />
            <input
              id="standard-basic"
              label="Street"
              variant="standard"
              placeholder='Street'
              value={data.BusinessStreet}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    BusinessStreet: e.target.value,
                  });
                }
              }}
              required
            /> <br />
            <input
              id="standard-basic"
              label="Country/District"
              variant="standard"
              placeholder = 'Country/District'
              required
              value={data.BusinessCountry}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    BusinessCountry: e.target.value,
                  });
                }
              }}
            /> <br />
            <input
              id="standard-basic"
              label="City"
              variant="standard"
              placeholder = 'City'
              required
              value={data.BusinessCity}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    BusinessCity: e.target.value,
                  });
                }
              }}
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
              value={data.Businessageyears}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value < 50 && e.target.value >= 0) {
                  setData({
                    ...data,
                    Businessageyears: e.target.value,
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
              value={data.Businessagemonths}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value <= 11 && e.target.value >= 0) {
                  setData({
                    ...data,
                    Businessagemonths: e.target.value,
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
