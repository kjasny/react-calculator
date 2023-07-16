import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState("");

  const calculation = () => {
    const numberOne = Number(input1);
    const numberTwo = Number(input2);

    if (operator === "+") {
      setAnswer(numberOne + numberTwo);
    }
    if (operator === "-") {
      setAnswer(numberOne - numberTwo);
    }
    if (operator === "*") {
      setAnswer(numberOne * numberTwo);
    } else if (operator === "/") {
      setAnswer(numberOne / numberTwo);
    }
        return answer
};

  const renderOptions = () => {
    let array = [];
    let operatorArray = ["+", "-", "*", "/"];

    for (let i = 0; i < operatorArray.length; i++) {
      array.push(<option>{operatorArray[i]}</option>);
    }

    return <>{array}</>;
  };

  return (
    <div className="page">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          className="input1"
          name="input1"
          onChange={(event) => setInput1(event.target.value)}
        ></input>
        <select
          className="operator"
          name="operator"
          onChange={(event) => setOperator(event.target.value)}
        >
          {renderOptions()}
        </select>
        <input
          type="text"
          className="input2"
          name="input2"
          onChange={(event) => setInput2(event.target.value)}
        ></input>
        <button className="operator" name="=" onClick={calculation}>
          =
        </button>
        <input
          type="text"
          className="answer"
          value={answer}
          name="answer"
        ></input>
      </div>
      <div className="error">
        {isNaN(answer)
          ? "Please provide a valid number for both operands"
          : null}
      </div>
    </div>
  );
};

export default Calculator;
