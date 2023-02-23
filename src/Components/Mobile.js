import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'
import axios from 'axios';

const Mobile = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  } 

  const generateOTP = async () => {
      const res = await axios.post("https://5i5mzpbxi4.execute-api.eu-west-2.amazonaws.com/sms/otp" , {
        "phone_number": data.mobile
    })
    console.log(res)
      

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(data.mobile.startsWith("07") && data.mobile.length === 11){
      
      generateOTP()
      setStep(6)
    }
    else {
      
      alert("Enter a valid number starting with 07 and has 11 digits")
    }
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <h1>Mobile number</h1>
      <label>Your mobile number</label><br />
      <input
      id="standard-adornment-amount"
      type="number"
      value={data.mobile}
      inputMode="numeric"
      required
      onKeyDown={handleKeyDown}
      onChange={(e) => {
        if (e.target.value.length <= 11 && e.target.value >= 0) {
          setData({
            ...data,
            mobile: e.target.value,
          });
        }
      }}></input><br />

      <button onClick={()=>setStep(3)}>Previous</button>
      <button >Next</button> <br />
      </form>
    </div>
  )
}

export default Mobile
