import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const TopNav = (props) => (
  <div className='top-nav'>
    <div className="container clearfix">
      <a href='/' className="logo clearfix float-left">
        <img src='/img/logo.svg'/>
        <div className="logo-text">
          <h4>GitHunt</h4>
          <p className="text-muted">Most starred projects on GitHub</p>
        </div>
      </a>
      <div className="float-right duration-btns">
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateJump('year') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateJump === 'year',
               'btn-light': props.selectedDateJump !== 'year',
             })
           }>
          Yearly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateJump('month') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateJump === 'month',
               'btn-light': props.selectedDateJump !== 'month',
             })
           }>
          Monthly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateJump('week') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateJump === 'week',
               'btn-light': props.selectedDateJump !== 'week',
             })
           }>
          Weekly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateJump('day') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateJump === 'day',
               'btn-light': props.selectedDateJump !== 'day',
             })
           }>
          Daily
        </a>
      </div>
    </div>
  </div>
);

TopNav.propTypes = {
  updateDateJump: PropTypes.func.isRequired,
  selectedDateJump: PropTypes.string
};

export default TopNav;
