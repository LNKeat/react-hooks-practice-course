import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");
  const [counter, setCounter] = useState(0)
  const [numbers, setNumbers] = useState({
    fNum: 0,
    sNum: 0
  })
  const [calc, setCalc] = useState({})
  const [viewCalc, setViewCalc] = useState(false)
  
  
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const numChange = (event) => {
    const newNum = parseInt(event.target.value)
    const name = event.target.name
    const updNums = {...numbers, [name]:newNum}
    setNumbers(updNums)

  }
  
  function calculate() {
    const a = numbers.fNum
    const b = numbers.sNum
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    setCalc({add:add, subtract:subtract, multiply:multiply, divide:divide})
    setViewCalc(true)
  }



  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
      <br />
      <h2>Likes:</h2>
      <input placeholder={counter} />
      <button onClick={() => setCounter(counter + 1)}>Like</button>

      <p>Calculate:</p>
      <label>First number:
        <input
          placeholder="first number"
          name="fNum"
          type="number"
          value={numbers.fNum}
          onChange={numChange}
        />
      </label>
      <br />
      <label>Second Number:
        <input 
          placeholder="second number"
          name="sNum"
          type="number"
          value={numbers.sNum}
          onChange={numChange}
        />
      </label>
      <br />
      <button onClick={() => calculate()}>Calculate Numbers</button>

    {viewCalc && 
      <div style={{textAlign:"left"}}>
        <ul>
        <li>Add: {calc.add}</li>
        <li>Subtract: {calc.subtract}</li>
        <li>Multiply: {calc.multiply}</li>
        <li>Divide: {calc.divide}</li>
        </ul>
        <br />
        <button onClick={() => setViewCalc(false)}>Hide Calculations</button>
      </div>
}




    </div>
  );
};

export default StateTutorial;
