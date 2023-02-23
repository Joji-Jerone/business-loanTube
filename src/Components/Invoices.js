import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'

const Invoices = () => {

  const {setStep , data , setData} = useContext(multiStepContext)

  const handleSelectChange = (e) => {
    setData({
       ...data,
       Invoices: e.target.value,
     });
 };


  return (
    <div>
      <form onSubmit={()=>setStep(10)}>
      <h1>Does your business send invoices to customers?</h1>
         <select value={data.Invoices} onChange={handleSelectChange} required>
            <option value="">-- Select an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
         </select><br />
      <button onClick={()=>setStep(8)}>Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default Invoices
