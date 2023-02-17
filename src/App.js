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

function App() {
  return (
      <div className="App">
      <h1>Loan Tube</h1>
      <Loan />
      <Business />
      <Businessmanu />
      <Mobile />
      <Revenue />
      <Director />
      <Directoraddress />
      <Address />
      <Email />
      <Terms />
      </div>
  );
}

export default App;
