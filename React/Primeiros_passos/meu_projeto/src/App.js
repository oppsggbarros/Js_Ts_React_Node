import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [previousInput, setPreviousInput] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setInput(String(digit));
      setWaitingForOperand(false);
    } else {
      setInput(input === '0' ? String(digit) : input + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setInput('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!input.includes('.')) {
      setInput(input + '.');
    }
  };

  const clearInput = () => {
    setInput('0');
    setPreviousInput(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(input);

    if (previousInput === null) {
      setPreviousInput(inputValue);
    } else if (operation) {
      const currentValue = previousInput || 0;
      let newValue;
      
      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '*':
          newValue = currentValue * inputValue;
          break;
        case '/':
          newValue = currentValue / inputValue;
          break;
        default:
          newValue = inputValue;
      }

      setPreviousInput(newValue);
      setInput(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    if (!operation || previousInput === null) return;
    
    performOperation(null);
    setOperation(null);
  };

  const toggleSign = () => {
    const newValue = parseFloat(input) * -1;
    setInput(String(newValue));
  };

  const inputPercent = () => {
    const currentValue = parseFloat(input);
    const newValue = currentValue / 100;
    setInput(String(newValue));
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        <button className="function" onClick={clearInput}>AC</button>
        <button className="function" onClick={toggleSign}>+/-</button>
        <button className="function" onClick={inputPercent}>%</button>
        <button className="operator" onClick={() => performOperation('/')}>÷</button>
        
        <button onClick={() => inputDigit(7)}>7</button>
        <button onClick={() => inputDigit(8)}>8</button>
        <button onClick={() => inputDigit(9)}>9</button>
        <button className="operator" onClick={() => performOperation('*')}>×</button>
        
        <button onClick={() => inputDigit(4)}>4</button>
        <button onClick={() => inputDigit(5)}>5</button>
        <button onClick={() => inputDigit(6)}>6</button>
        <button className="operator" onClick={() => performOperation('-')}>-</button>
        
        <button onClick={() => inputDigit(1)}>1</button>
        <button onClick={() => inputDigit(2)}>2</button>
        <button onClick={() => inputDigit(3)}>3</button>
        <button className="operator" onClick={() => performOperation('+')}>+</button>
        
        <button className="zero" onClick={() => inputDigit(0)}>0</button>
        <button onClick={inputDecimal}>.</button>
        <button className="operator" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

export default App;