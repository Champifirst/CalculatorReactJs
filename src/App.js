import React, {useState} from 'react';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if(value === "DELL"){
      setInput(input.slice(0, -1));
    } else if(value === "Poucent"){
      setInput(input + "/" + "100");
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(input));
      // setInput(input);
    } catch (error) {
      setResult('Error');
    }
    //setInput('');
  }

  const clear = () => {
    setResult(0);
    setInput('');
  }

  return (
    <div className="claculator">
      <div className='display'>
        <input type="text" value={input} readOnly/>
        <div className='result'>{result}</div>
      </div>
      <div className='buttons'>
        <button onClick={clear}>C</button>
        <button onClick={() => handleClick('%')}>mod</button>
        <button onClick={() => handleClick('Poucent')}>%</button>
        <button onClick={() => handleClick('DELL')}>DELL</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>x</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
