import React , {useContext} from 'react';
import './App.css';
import Loan from './Components/Loan';
import Business from './Components/Business'
import Businessmanu from './Components/Businessmanu'
import Mobile from './Components/Mobile'
import Revenue from './Components/Revenue'
import Address from './Components/Address'
import Director from './Components/Director'
import Directoraddress from './Components/Directoraddress';
import Email from './Components/Email';
import Terms from './Components/Terms'
import {multiStepContext} from './Components/StepContext';

function App() {
  const {currentStep} = useContext(multiStepContext)
  function showStep(step) {
    switch(step) {
      case 1 : return <Loan />
      case 2 : return <Business />
      case 3 : return <Businessmanu />
      case 4 : return <Mobile />
      case 5 : return <Revenue />
      case 6 : return <Director />
      case 7 : return <Directoraddress />
      case 8 : return <Address />
      case 9 : return <Email />
      case 10 : return <Terms />

      default : return <h1>Loan Tube Page Loading</h1>
    }
  }
  return (
    <div className="App">
      { showStep(currentStep)}
    </div>
  )
}

export default App;