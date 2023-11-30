import React, { useState } from 'react';

const TwoInputAddition = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [sum, setSum] = useState();

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    const result = number1 + number2;
    setSum(result);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h2>Some of Two Numbers</h2>
      <label>
        Number 1:
        <input type="number" value={number1} onChange={handleNumber1Change} />
      </label>
      <br />
      <label>
        Number 2:
        <input type="number" value={number2} onChange={handleNumber2Change} />
      </label>
      <br />
      <button style={{padding:"5px 20px", backgroundColor:"green", margin:"15px 0px", borderRadius:"6px"}} onClick={handleAddition}>Add</button>
      <p style={{fontSize:"25px"}}>Sum: {sum}</p>
    </div>
  );
};

export default TwoInputAddition;

