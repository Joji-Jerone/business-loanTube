import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'

const Revenue = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  }


  return (
    <div>
      <form onSubmit={()=>setStep(8)}>
      <h1>How much is total annual revenue/receipts of your business?</h1>
      <label>Total annual revenue / receipts</label><br />
      <input
      id="standard-adornment-amount"
      type="number"
      value={data.Revenue}
      inputMode="numeric"
      required
      onKeyDown={handleKeyDown}
      onChange={(e) => {
        if (e.target.value.length <= 10 && e.target.value >= 0) {
          setData({
            ...data,
            Revenue: e.target.value,
          });
        }
      }}></input><br />
      <button onClick={()=>setStep(5)}>Previous</button>
      <button type='submit'>Next </button>
      </form>
    </div>
  )
}

export default Revenue