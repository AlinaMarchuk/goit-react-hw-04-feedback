import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.value}>Good: {good}</p>
      <p className={styles.value}>Neutral: {neutral}</p>
      <p className={styles.value}>Bad: {bad}</p>
      <p className={styles.value}>Total: {total}</p>
      <p className={styles.value}>
        Positive feedback: {good !== 0 ? `${positivePercentage}%` : '0'}
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
