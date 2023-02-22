import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const Mobile = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  }

  const handleSubmit = (event) => {
    if(inp.startsWith("07")){
        setStep(6)
    }
    else {
      event.preventDefault()
      alert("Enter a valid number starting with 07 and has 10 digits")
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
      value={inp}
      inputMode="numeric"
      required
      onKeyDown={handleKeyDown}
      onChange={(e) => {
        if (e.target.value.length <= 10 && e.target.value >= 0) {
          setInp(e.target.value);
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
