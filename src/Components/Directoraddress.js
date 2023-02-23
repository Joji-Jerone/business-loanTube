import React ,{ useState , useContext} from 'react';
import { multiStepContext } from './StepContext';


const DirectorAddress = () => {

  const {setStep , data , setData} = useContext(multiStepContext)
  const [inp, setInp] = useState([]);

  

  function handleKeyDown(event) {
    // Check if the key pressed is a number or backspace
    if (event.keyCode !== 8 && (!/^[0-9]$/.test(event.key))) {
      event.preventDefault();
    }
  }

  const handleKeyPress = (e) => {
    const re = /^[a-zA-Z\s-.]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      DirectorAddress: e.target.value,
    });
  };
  
  const handleSubmit = () => {
    if(data.DirectorAddress === "default"){
      setStep(16)
    }else{
      setStep(17)
    }
   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>
      What is your residential address?
      </h1>
      <select
      type = "text" 
      value={data.DirectorAddress}
      required
      onKeyDown={handleKeyPress}
      onChange={handleChange}>
       <option value="">-- Select an option --</option>
        <option value="test">test</option>
        <option value="default">My address isn't listed here</option>
        </select>

      <br />
        <button onClick={()=>setStep(11)} >Previous</button>
        <button type='submit' >Next</button>
        </form>
    </div>
  )
}

export default DirectorAddress

