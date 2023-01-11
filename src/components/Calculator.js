import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="input-holder">
          <input className="input" type="text" value="0" readOnly />
        </div>
        <ul className="rows">
          <li className="row">
            <button className="operator-btn" type="button">
              AC
            </button>
            <button className="operator-btn" type="button">
              +/-
            </button>
            <button className="operator-btn" type="button">
              %
            </button>
            <button className="operator-btn-orange" type="button">
              &#247;
            </button>
          </li>
          <li className="row">
            <button className="digit-btn" type="button">
              7
            </button>
            <button className="digit-btn" type="button">
              8
            </button>
            <button className="digit-btn" type="button">
              9
            </button>
            <button className="operator-btn-orange" type="button">
              x
            </button>
          </li>
          <li className="row">
            <button className="digit-btn" type="button">
              4
            </button>
            <button className="digit-btn" type="button">
              5
            </button>
            <button className="digit-btn" type="button">
              6
            </button>
            <button className="operator-btn-orange" type="button">
              -
            </button>
          </li>
          <li className="row">
            <button className="digit-btn" type="button">
              1
            </button>
            <button className="digit-btn" type="button">
              2
            </button>
            <button className="digit-btn" type="button">
              3
            </button>
            <button className="operator-btn-orange" type="button">
              +
            </button>
          </li>
          <li className="row">
            <button className="digit-btn zero" type="button">
              0
            </button>
            <button className="operator-btn" type="button">
              .
            </button>
            <button className="operator-btn-orange" type="button">
              =
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
