import React ,{ useState , useContext} from 'react'
import { multiStepContext } from './StepContext'

const Card = () => {
  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState("");

  const handleSelectChange = (e) => {
    setInp(e.target.value)
    setData({
       ...data,
       cards: e.target.value,
     });
 };

 const handleSubmit = () => {
  if(inp === "yes"){
    setStep(81)
  }else{
    setStep(81)
  }
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Does your business accepts card payments?</h1>
      <select value={data} onSelect={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      </select><br />
      <button onClick={()=>setStep(7)}>Previous</button>
      <button type='submit'>Next </button>
      </form>
    </div>
  )
}

export default Card
