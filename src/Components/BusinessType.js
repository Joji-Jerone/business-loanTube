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
      <select value={data.businesstype} onChange={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="sole">Sole Trader</option>
          <option value="limited">Limited Company</option>
          <option value="partnership">Partnership</option>
      </select><br />
      <button onClick={()=>setStep(3)} >Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default BusinessType
