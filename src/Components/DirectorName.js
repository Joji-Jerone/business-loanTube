import React ,{ useState , useContext , useEffect} from 'react';
import { multiStepContext } from './StepContext'
import axios from 'axios'

const DirectorName = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [data1, setData1] = useState([])
  useEffect(() => {
    dropDown()
  }, [])


  async function dropDown() {
    const res = await axios.get(`https://9x2o8zyo78.execute-api.eu-west-2.amazonaws.com/?cid=${data.Companyid}`)
    console.log(res)
    setData1([...res.data.active_directors, {name : "My name isn't listed here"}])
  }  

  function setter(name) {
    //setVal(name)
    setData1([])
    setData({
      ...data,
      DirectorName: name,
    });
  }

  const handleKeyPress = (event) => {
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  };

 const handleSubmit = () => {
  if(data.DirectorName === "My name isn't listed here"){ 
    setStep(12)
  }else{
    setStep(14)
  }
 } 

  return (
    <div>
      <h1>Which director are you?</h1>
      <form onSubmit = {handleSubmit}>
      <label>Director name <br/> 
      </label>
      <div className="container">
      <label>if you can't find your name kindly select - " My business isn't listed here "</label><br></br>
        <input type="text"
        onKeyDown={handleKeyPress} 
        value={data.DirectorName} 
        placeholder='Company ID'
        required/>
        <div className="suggestion">
          {data1 && data1.map(e => {
            return <div className="list" key={e.id} onClick={() => setter(e.name)}>
              <p className="title">{e.name}</p>
              {e.id && <p className="address">{e.id} | {e.address}</p>}
            </div>
          })}
        </div>
      </div>
      <button onClick={()=>setStep(10)}>Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default DirectorName
