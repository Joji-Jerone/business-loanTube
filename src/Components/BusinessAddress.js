import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext'
import axios from 'axios'

const BusinessAddress = () => {
  const {setStep , data , setData} = useContext(multiStepContext)
  const [data1, setData1] = useState([])

async function dropDown(value) {
    if (value === '') {
      setData1([])
    } else {
      const res = await axios.get(`https://9x2o8zyo78.execute-api.eu-west-2.amazonaws.com/?postcode=${value}`)
      console.log(res)
      setData1([...res.data , {formatted_address : ["My address isn't listed here"]}])
    }
  }

  function setter(name) {
    //setVal(name)
    setData1([])
    setData({
      ...data,
      BusinessAddress: name,
    });
  }

  function changeHandler(e) {
   
    dropDown(e.target.value)
    setData({
      ...data,
      BusinessAddress: e.target.value,
    });
 
  }

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s0-9]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

 const handleSubmit = (e) => {
      e.preventDefault()
      if(data.BusinessAddress === "My address isn't listed here")
      {
            setStep(101)
          }
          else{
            setStep(11)
        }
  }
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>What is your business trading address?</h1>
      <div className="container">
      <label>if you can't find your business kindly select - " My address isn't listed here "</label><br></br>
        <input type="text" 
        onChange={changeHandler} 
        onKeyDown={handleKeyPress} 
        value={data.BusinessAddress}
        placeholder='PostCode'
        required/>
        <div className="suggestion">
          {data1 && data1.map(e => {
            return <div className="list" key={e.id} onClick={() => setter(e.formatted_address.join(' '))}>
              <p className="title">{e.formatted_address}</p>
              {e.id && <p className="address">{e.id} | {e.address}</p>}
            </div>
          })}
        </div>
      </div>
      <button onClick={()=>setStep(9)}>Previous</button>
      <button type='submit'>Next</button>
    </form> 
    </div>
  )
}

export default BusinessAddress
