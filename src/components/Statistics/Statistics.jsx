import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100); 

  return (
    <div className={css.StatCont}>
      
      <p>Good: <b>{good}</b></p>
      <p>Neutral: <b>{neutral}</b></p>
      <p>Bad: <b>{bad}</b></p>
      <p>Total: <b>{total}</b></p>
      <p>Positive Feedback: <b>{positivePercentage}%</b></p>
    </div>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};


export default Statistics;
