import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'

const Invoices = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);


  return (
    <div>
      <form onSubmit={()=>setStep(8)}>
      <h1>Does your business send invoices to customers?</h1>
         <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
         </select><br />
      <button onClick={()=>setStep(7)}>Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default Invoices
