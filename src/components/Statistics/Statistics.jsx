import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => (
  <ul className={css.stat__list}>
    <li className={css.stat__item}>
      Good: <span className={css.statistic}>{good}</span>
    </li>
    <li className={css.stat__item}>
      Neutral: <span className={css.statistic}>{neutral}</span>
    </li>
    <li className={css.stat__item}>
      Bad: <span className={css.statistic}>{bad}</span>
    </li>
    <li className={css.stat__item}>
      Total: <span className={css.statistic}>{total}</span>
    </li>
    <li className={css.stat__item}>
      Positive feedback:{' '}
      <span className={css.statistic}>{positivePercentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
