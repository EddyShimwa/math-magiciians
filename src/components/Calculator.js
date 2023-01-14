import React, { useState } from 'react';
import calculate from './logic/calculate';
// import operate from './logic/operate';
import './calculator.css';

const Calculator = () => {
  const [calculationState, setCalculationState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const result = calculate(calculationState, e.target.textContent);
    setCalculationState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  const { total, next } = calculationState;

  return (
    <div className="calculator-container">
      <div className="input-holder">
        <div className="input" type="text">{ next || total || 0}</div>
      </div>
      <ul className="rows">
        <li className="row">
          <button className="operator-btn" type="button" onClick={clickHandler}>
            AC
          </button>
          <button className="operator-btn" type="button" onClick={clickHandler}>
            +/-
          </button>
          <button className="operator-btn" type="button" onClick={clickHandler}>
            %
          </button>
          <button className="operator-btn-orange" type="button" onClick={clickHandler}>
            &#247;
          </button>
        </li>
        <li className="row">
          <button className="digit-btn" type="button" onClick={clickHandler}>
            7
          </button>
          <button className="digit-btn" type="button" onClick={clickHandler}>
            8
          </button>
          <button className="digit-btn" type="button" onClick={clickHandler}>
            9
          </button>
          <button className="operator-btn-orange" type="button" onClick={clickHandler}>
            x
          </button>
        </li>
        <li className="row">
          <button className="digit-btn" type="button" onClick={clickHandler}>
            4
          </button>
          <button className="digit-btn" type="button" onClick={clickHandler}>
            5
          </button>
          <button className="digit-btn" type="button" onClick={clickHandler}>
            6
          </button>
          <button className="operator-btn-orange" type="button" onClick={clickHandler}>
            -
          </button>
        </li>
        <li className="row">
          <button className="digit-btn" type="button" onClick={clickHandler}>
            1
          </button>
          <button className="digit-btn" type="button" onClick={clickHandler}>
            2
          </button>
          <button className="digit-btn" type="button" onClick={clickHandler}>
            3
          </button>
          <button className="operator-btn-orange" type="button" onClick={clickHandler}>
            +
          </button>
        </li>
        <li className="row">
          <button className="digit-btn zero" type="button" onClick={clickHandler}>
            0
          </button>
          <button className="operator-btn" type="button" onClick={clickHandler}>
            .
          </button>
          <button className="operator-btn-orange" type="button" onClick={clickHandler}>
            =
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Calculator;
