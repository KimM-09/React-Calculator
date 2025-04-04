import React from 'react';
import './Calculator.css';

const Calculator = () => {
  const [equation, setEquation] = React.useState('0');
  const [answer, setAnswer] = React.useState('');
 
 
  const isOperator = (fig) => {
    return /[*/+-]/.test(fig)
  }
 
  const handleClearClick = () => {
    setEquation("0");
    setAnswer("")
  }
 
  const handleNumberClick = (number) => {
    if(equation === "0") {
      setEquation(String(number));
    } else {
      setEquation(equation + number)
    }
  }
 
  const handleOpClick = (fig) => {
    if(isOperator(fig)) {
      setEquation(equation.trim() + " " + fig + " ")
    }
  }
 
  const handleDecimalClick = (fig) => {
    const last = equation.split(/[-+/*]/g).pop();
    if(!last) return;
    if(last?.includes(".")) return;
    setEquation(equation + fig);
 
  }
 
  const handleEqualsClick = () => {
    const parts = equation.trim().split(" ");
    const newParts = [];
   
    for(let i = parts.length - 1; i >=0; i--) {
      if(["*", "/", "+"].includes(parts[i]) && isOperator(parts[i-1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i - 1;
        while(isOperator(parts[k])) {
          k--;
          j++
        }
        i-=j
      } else {
        newParts.unshift(parts[i])
      }
    }
    const newEquation = newParts.join(' ');
    if(isOperator(newEquation.charAt(0))) {
      setAnswer(eval(answer + newEquation))
    } else {
      setAnswer(eval(newEquation))
    }
    setEquation("")
  }
 
  return(
    <div className="container">
      <h2>React Calculator App</h2>
      <div id="calculator">
        <div className="display" id="display">
          <div className="answer">{answer}</div>
          <div className="equation">{equation}</div>
        </div>
        <button id="clear" onClick={() => handleClearClick("clear")}>C</button>
        <button id="divide" onClick={() => handleOpClick("/")}>/</button>
        <button id="seven" onClick={() => handleNumberClick("7")}>7</button>
        <button id="eight" onClick={() => handleNumberClick("8")}>8</button>
        <button id="nine" onClick={() => handleNumberClick("9")}>9</button>
        <button id="multiply" onClick={() => handleOpClick("*")}>*</button>
        <button id="four" onClick={() => handleNumberClick("4")}>4</button>
        <button id="five" onClick={() => handleNumberClick("5")}>5</button>
        <button id="six" onClick={() => handleNumberClick("6")}>6</button>
        <button id="subtract" onClick={() => handleOpClick("-")}>-</button>
        <button id="one" onClick={() => handleNumberClick("1")}>1</button>
        <button id="two"onClick={() => handleNumberClick("2")}>2</button>
        <button id="three" onClick={() => handleNumberClick("3")}>3</button>
        <button id="add" onClick={() => handleOpClick("+")}>+</button>
        <button id="zero" onClick={() => handleNumberClick("0")}>0</button>
        <button id="decimal" onClick={() => handleDecimalClick(".")}>.</button>
        <button id="equals" onClick={() => handleEqualsClick("=")}>=</button>
      </div>
    </div>
  )
}

export default Calculator;