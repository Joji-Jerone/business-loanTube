import React ,  { useContext} from 'react'
import { multiStepContext } from './StepContext';

const BusinessType = () => {

   const {setStep , data , setData} = useContext(multiStepContext)
    
      const handleSelectChange = (e) => {
         setData({
            ...data,
            businesstype: e.target.value,
          });
      };
  return (
    <div>
      <form onSubmit={()=>setStep(42)}>
      <h1>What is your business type?</h1> <br/>
      <select value={data} onChange={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="sole">Sole Trader</option>
          <option value="2">2 years</option>
          <option value="2-3">2 - 3 years</option>
          <option value="3">More than 3 years</option>
      </select><br />
      <button onClick={()=>setStep(3)} >Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default BusinessType
