import React, { useState } from "react";
const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e, inputNum) => {
    const value = e.target.value;
    if (inputNum === 1) {
      setInput1(value);
    } else if (inputNum === 2) {
      setInput2(value);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
  };
gi
  const calculateResult = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operator) {
      case "+":
        setResult((num1 + num2).toString());
        break;
      case "-":
        setResult((num1 - num2).toString());
        break;
      case "*":
        setResult((num1 * num2).toString());
        break;
      case "/":
        setResult((num1 / num2).toString());
        break;
      default:
        setResult("Error");
    }
  };
  return (
    <div>
        <div>
      <input
        type="number"
        value={input1}
        onChange={(e) => handleInputChange(e, 1)}
      />
      </div>
      <div>
      <input
        type="number"
        value={input2}
        onChange={(e) => handleInputChange(e, 2)}
      /> 
      </div>
      <div className="btn-space">
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={calculateResult}>=</button>
      </div>
      <span className="result">{result}</span>
    </div>
  );
};

export default Calculator;
