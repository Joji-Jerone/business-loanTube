import React , { useState , useContext } from 'react'
import { multiStepContext } from './StepContext'
import axios from 'axios'
 
const BusinessName = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [data1, setData1] = useState([])

  async function dropDown(value) { 
    if (value === '') {
      setData1([])
    } else {
      const res = await axios.get(`https://9x2o8zyo78.execute-api.eu-west-2.amazonaws.com/?q=${value}`)
      
      setData1([...res.data.companies , {name : "My business isn't listed here"}])
    }
  } 


  function setter(name) {
    //setVal(name)
    setData1([])
    setData({
      ...data,
      Business: name,
    });
  }

  function changeHandler(e) {
    //setVal(e.target.value)
    dropDown(e.target.value)
    setData({
      ...data,
      Business: e.target.value,
    });
  }

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s-.]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };


  const handleSubmit = () => {
    if(data.Business === "My business isn't listed here"){
      setStep(4) 
    }
    else {
      setStep(5)
    }
  }
  
  return (
    <div>
      <h1>What is your business name?</h1>
      <form onSubmit = {handleSubmit}>
      <label>Business name <br/> 
      </label>
      <div className="container">
      <label>if you can't find your business kindly select - " My business isn't listed here "</label><br></br>
        <input type="text" onChange={changeHandler} 
        onKeyDown={handleKeyPress} 
        required
        value={data.Business}/>
        <div className="suggestion">
          {data1 && data1.map(e => {
            return <div className="list" key={e.id} onClick={() => setter(e.name)}>
              <p className="title">{e.name}</p>
              {e.id && <p className="address">{e.id} | {e.address}</p>}
            </div>
          })}
        </div>
      </div>
      <button onClick={()=>setStep(2)}>Previous</button>
      <button type='submit'>Next</button>
      </form>
    </div>
  ) 
}

export default BusinessName
