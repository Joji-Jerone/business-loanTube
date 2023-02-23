import React , {useState} from 'react'
import App from '../App';


export const multiStepContext = React.createContext();
   const StepContext = () => {
      const [currentStep,setStep] = useState(1);
      const [data, setData] = useState([])

  return (
    <div>
      <multiStepContext.Provider value = {{currentStep,setStep,data, setData}} >
         <App />
      </multiStepContext.Provider>
    </div>
  )
  }

export default StepContext