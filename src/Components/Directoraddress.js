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

  const handleChange = (event) => {
    setData(event.target.value);
  };
  
  // const handleSelect = (e) => {
  //   if(value === "yes, with a mortgage" || value ==="yes, without a mortgage" ){
  //   }
  // }

  return (
    <div>
      <form onSubmit={()=>setStep(16)}>
      <h1>
      What is your residential address?
      </h1>
      <input
      type = "text" 
      name = "Business Name"
      required
      onKeyDown={handleKeyPress}
      onChange={handleChange}></input>

      <br />
        <button onClick={()=>setStep(11)} >Previous</button>
        <button type='submit' >Next</button>
        </form>
    </div>
  )
}

export default DirectorAddress

