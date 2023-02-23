import React , { useState ,useContext } from 'react'
import { multiStepContext } from './StepContext'

const DirectorAddressmanual = () => {

      const {setStep , data , setData} = useContext(multiStepContext)

   function handleKeyDown(event) {
      // Check if the key pressed is a number or backspace
      if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
        event.preventDefault();
      }
    }

  return (
    <div>
      <form onSubmit={()=>setStep(17)}>
         <h1> Kindly Enter Your Address Manually</h1>
      <input 
              id="standard-adornment-amount" 
              type="number" 
              onKeyDown={handleKeyDown}
              value={data.DirectorPostcode}
              onChange={(e) => {
                if (e.target.value >= 0 && e.target.value.length <= 6 ) {
                  setData({
                    ...data,
                    DirectorPostcode: e.target.value,
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
              value={data.Directorhouseno}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0 ) {
                  setData({
                    ...data,
                    Directorhouseno: e.target.value,
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
              value={data.Directorflatno}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    Directorflatno: e.target.value,
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
              value={data.DirectorHouseName}
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    DirectorHouseName: e.target.value,
                  });
                }
              }}
            /> <br />
            <input
              id="standard-basic"
              label="Street"
              variant="standard"
              placeholder='Street'
              value={data.DirectorStreet}
              required
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    DirectorStreet: e.target.value,
                  });
                }
              }}
            /> <br />
            <input
              id="standard-basic"
              label="Country/District"
              variant="standard"
              placeholder = 'Country/District'
              value={data.DirectorCountry}
              required
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    DirectorCountry: e.target.value,
                  });
                }
              }}
            /> <br />
            <input
              id="standard-basic"
              label="City"
              variant="standard"
              placeholder = 'City'
              value={data.DirectorCity}
              required
              onChange={(e) => {
                if (e.target.value.length <= 4 && e.target.value >= 0) {
                  setData({
                    ...data,
                    DirectorCity: e.target.value,
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
              value={data.DirectorYears}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value < 50 && e.target.value >= 0) {
                  setData({
                    ...data,
                    DirectorYears: e.target.value,
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
              value={data.DirectorMonths}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value <= 11 && e.target.value >= 0) {
                  setData({
                    ...data,
                    DirectorMonths: e.target.value,
                  });
                }
              }}
              placeholder="Months"
              required
            /> <br />
      <button onClick={()=>setStep(15)}>Previous</button>
      <button type='submit'>Next </button>
      </form>
    </div>
  )
}

export default DirectorAddressmanual
