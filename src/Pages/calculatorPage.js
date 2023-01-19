import React from 'react';

import Calculator from '../components/Calculator';
import Card from '../components/interface/Card';
import classes from './CalculatorPage.module.css';

const CalculatorPage = () => (
  <section className={classes.calculator_part}>
    <Card extraclass={classes.calc_details}>
      <h3>Lets do some Maths!</h3>
      <p>
        Welcome to our calculator app! Quick & easy calculations for students,
        professionals, and more. User-friendly interface & various functions.
        Perform calculations with just a few clicks.
        From basic math to advanced.
        Download now & see how it can make your life easier.
      </p>
    </Card>
    <Calculator />
  </section>
);

export default CalculatorPage;
