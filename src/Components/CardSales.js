import React ,{ useState , useContext}from 'react'
import { multiStepContext } from './StepContext'

const CardSales = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);

  const handleSelectChange = (e) => {
    setData({
       ...data,
       businesstype: e.target.value,
     });
 };

  return (
    <div>
      <form onSubmit={()=>setStep(10)}>
      <h1>How much of your business sales come from card payments?</h1>
      <select value={data} onChange={handleSelectChange} required>
          <option value="">-- Select an option --</option>
          <option value="0">0%</option>
          <option value="up to 25%">up to 25%</option>
          <option value="25% - 50%">25% - 50%</option>
          <option value="50% - 75%">50% - 75%</option>
          <option value="more than 75%">more than 75%</option>
      </select><br />
      <button onClick={()=>setStep(8)}>Previous</button>
      <button type='submit'>Next </button>
      </form>
    </div>
  )
}

export default CardSales
