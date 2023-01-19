import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Quote.module.css';

const myQuotes = [
  {
    id: 1,
    quote: 'Mathematics is the language in which God has written the universe.',
    author: 'Galileo Galilei',
  },
  {
    id: 2,
    quote: 'Mathematics is the queen of the sciences and number theory is the queen of mathematics.',
    author: 'Carl Friedrich Gauss',
  },
  {
    id: 3,
    quote: 'Without mathematics theres nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    author: 'Shakuntala Devi',
  },
  {
    id: 4,
    quote: 'Mathematics is the science which uses easy words for hard ideas.',
    author: 'James Roy Newman',
  },
  {
    id: 5,
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    id: 6,
    quote: 'Mathematics is the key and door to the sciences.',
    author: 'Galileo Galilei',
  },
  {
    id: 7,
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester',
  },
  {
    id: 8,
    quote: 'The essence of mathematics is not to make simple things complicated, but to make complicated things simple.',
    author: 'S. Gudder',
  },
  {
    id: 9,
    quote: 'Mathematics is the art of giving the same name to different things.',
    author: 'J.H. Poincaré',
  },
  {
    id: 10,
    quote: 'Mathematics is not only real, but it is the only reality. That is that entire universe is made of matter, obviously. And matter is made of particles. It s made of protons, electrons, and neutrons.',
    author: 'Max Tegmark',
  },
];

const QuotePage = () => {
  const navigate = useNavigate();
  const number = Math.floor(Math.random() * 10) + 1;
  const randomQuote = myQuotes.find((quote) => quote.id === number);

  const reflesh = () => {
    navigate('/quote');
  };

  if (!randomQuote) {
    return <h3>No quotes displayed</h3>;
  }
  return (
    <div className={classes.quote_part}>
      <button
        className={classes.reflesh_btn}
        type="button"
        onClick={reflesh}
      >
        Refresh
      </button>
      <card className={classes.quote}>
        <h3>{randomQuote.quote}</h3>
        <span>{`-${randomQuote.author}`}</span>
      </card>
    </div>
  );
};

export default QuotePage;
