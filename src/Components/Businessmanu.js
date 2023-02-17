import React from 'react'

const Businessmanu = () => {
  return (
    <div>
      <form>
      <h1>Type your business name manually</h1>
      <label>Business name<br/> </label>
      <input></input><br/>
      <label>What is your business type?</label> <br/>
      <select>
          <option value="sole">Sole Trader</option>
          <option value="2">2 years</option>
          <option value="2-3">2 - 3 years</option>
          <option value="3">More than 3 years</option>
      </select>
      <h1>How long you've been trading for?</h1>
      <label>Business Age</label><br />
      <select>
          <option value="1<">Less than 1 year</option>
          <option value="2">2 years</option>
          <option value="2-3">2 - 3 years</option>
          <option value="3">More than 3 years</option>
      </select>
      <button>Previous</button>
      <button>Next</button>
      </form>
    </div>
  )
}

export default Businessmanu
