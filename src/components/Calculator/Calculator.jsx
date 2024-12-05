import './Calculator.css';

import React, { useState } from 'react';

import Button from '../../components/Button/Button';

const Calculator = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  const handleCalculation = (name) => {
    
    if (name === "=") {
        if (!value) {
            setText('Error');
            // return;
          }else{
            setText(eval(value));
          }
      
    } else if (name === "C") {
      setText("");
      setValue("");
    } else {
      setValue((prev) => prev + name);
    }
  };

  return (
    <React.Fragment>
        <div className='calculator'>
      <h1>React Calculator</h1>
      <input
        type="text"
        name="display"
        id="display"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <div className='displayResult'>{text}</div>
      <div className='buttonsContainer'>
      {buttons.map((ele) => (
        <Button name={ele} calculation={handleCalculation} key={ele} />
      ))}
      </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
