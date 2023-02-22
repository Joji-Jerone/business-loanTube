import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'

const Otp = () => {

   const {setStep , data , setData} = useContext(multiStepContext)
   const [inp, setInp] = useState([]);

   function handleKeyDown(event) {
      // Check if the key pressed is a number or backspace
      if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
        event.preventDefault();
      }
    }
  return (
    <div>
      <h1> Mobile Verification </h1>
      <form onSubmit = {()=>setStep(7)}> 
    <label> 4-digit code | Please enter the code sent to +44 7760 628710 |</label><br />
    <input
    id="standard-adornment-amount"
    type="number"
    value={inp}
    inputMode="numeric"
    required
    onKeyDown={handleKeyDown}
    onChange={(e) => {
      if (e.target.value.length <= 4 && e.target.value >= 0) {
        setInp(e.target.value);
        setData({
          ...data,
          otp: e.target.value,
        });
      }
    }}
    ></input><br />
    <button onClick={()=>setStep(5)}>Previous</button>
    <button type='submit'>Next</button>
    </form>
    </div>
  )
}

export default Otp
