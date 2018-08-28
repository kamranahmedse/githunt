import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../icons/logo';

const TopNav = (props) => (
  <div className='top-nav'>
    <div className="container clearfix">
      <Link to="/" className="logo clearfix float-left">
        <Logo/>
        <div className="logo-text">
          <h4>GitHunt</h4>
          <p className="text-muted">Most starred projects on GitHub</p>
        </div>
      </Link>
      <div className="float-right duration-btns">
        <button onClick={ () => props.updateDateJump('year') }
                className={
                  classNames('btn', {
                    'btn-primary': props.selectedDateJump === 'year',
                    'btn-light': props.selectedDateJump !== 'year',
                  })
                }>
          Yearly
        </button>
        <button onClick={ () => props.updateDateJump('month') }
                className={
                  classNames('btn', {
                    'btn-primary': props.selectedDateJump === 'month',
                    'btn-light': props.selectedDateJump !== 'month',
                  })
                }>
          Monthly
        </button>
        <button onClick={ () => props.updateDateJump('week') }
                className={
                  classNames('btn', {
                    'btn-primary': props.selectedDateJump === 'week',
                    'btn-light': props.selectedDateJump !== 'week',
                  })
                }>
          Weekly
        </button>
        <button onClick={ () => props.updateDateJump('day') }
                className={
                  classNames('btn', {
                    'btn-primary': props.selectedDateJump === 'day',
                    'btn-light': props.selectedDateJump !== 'day',
                  })
                }>
          Daily
        </button>
      </div>
    </div>
  </div>
);

TopNav.propTypes = {
  updateDateJump: PropTypes.func.isRequired,
  selectedDateJump: PropTypes.string
};

export default TopNav;
