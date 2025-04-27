import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // Store input expression
  const [result, setResult] = useState(""); // Store result after calculation

  const handleClick = (value) => {
    setInput(input + value);
  };
  

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // Replace '×' with '*' and '÷' with '/' for JavaScript compatibility
      const sanitizedInput = input.replace("×", "*").replace("÷", "/");
      
      // Evaluate the sanitized expression
      setResult(eval(sanitizedInput));
    } catch (error) {
      setResult("Error");
    }
  };
  
  

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculator App</h2>
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("×")}>×</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick("÷")}>÷</button>

          <button onClick={handleClear} className="clear-button">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
