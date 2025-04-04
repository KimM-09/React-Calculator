import React from 'react';
import './Display.css';

const Display = ({input, handleChange}) => {
    return(
        <div className="display">
        <div id="display">
            <input value={input} onChange={handleChange}/>
        </div>
        <div className="row">
        <button id="clear" value="" onClick={handleChange}>C</button>
        <button id="divide" value="/" onClick={handleChange}>/</button>
        <button id="multiply" value="*" onClick={handleChange}>X</button>
      </div>
      <div className="row">
        <button id="seven" value="7" onClick={handleChange}>7</button>
        <button id="eight" value = "8" onClick={handleChange}>8</button>
        <button id="nine" value="9" onClick={handleChange}>9</button>
        <button id="subtract" value="-" onClick={handleChange}>-</button>
      </div>
      <div className="row">
        <button id="four" value="4" onClick={handleChange}>4</button>
        <button id="five" value="5" onClick={handleChange}>5</button>
        <button id="six" value="6" onClick={handleChange}>6</button>
        <button id="add" value="+" onClick={handleChange}>+</button>
      </div>
      <div className="row">
        <button id="one" value="1" onClick={handleChange}>1</button>
        <button id="two"value="2" onClick={handleChange}>2</button>
        <button id="three" value="3" onClick={handleChange}>3</button>
        <button id="equals">=</button>
      </div>
      <div className="row">
        <button id="zero" value= "0" onClick={handleChange}>0</button>
        <button id="decimal" value="." onClick={handleChange}>.</button>
      </div>
      </div>
    )
}

export default Display;