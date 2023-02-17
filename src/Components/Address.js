import React from 'react'

const Address = () => {
  return (
    <div>
      <h1>Does your business send invoices to customers?</h1>
         <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
         </select><br />
      <h1>What is your business trading address?</h1>
      <select>
          <option value="test1<">test1</option>
          <option value="test2">test2</option>
          <option value="test3<">test3</option>
          <option value="test4">test4</option>
          <option value="test5<">test5</option>
          <option value="test6">test6</option>
          <option value="test7<">test7</option>
          <option value="test8">test8</option>
          <option value="default">My address isn't listed here</option>
      </select><br />
      <button>Previous</button>
      <button>Next</button>
      
      
    </div>
  )
}

export default Address
