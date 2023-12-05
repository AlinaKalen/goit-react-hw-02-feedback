import css from './FeedbackOption.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.ButtonCont}>
      {options.map(option => (
  <button className={css.ButtonStyle} onClick={() => onLeaveFeedback(option)} key={option}>
  {option}
</button>
))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
