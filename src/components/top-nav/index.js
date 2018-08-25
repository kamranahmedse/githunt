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
           onClick={ () => props.updateDateType('year') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'year',
               'btn-light': props.selectedDateType !== 'year',
             })
           }>
          Yearly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateType('month') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'month',
               'btn-light': props.selectedDateType !== 'month',
             })
           }>
          Monthly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateType('week') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'week',
               'btn-light': props.selectedDateType !== 'week',
             })
           }>
          Weekly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateType('day') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'day',
               'btn-light': props.selectedDateType !== 'day',
             })
           }>
          Daily
        </a>
      </div>
    </div>
  </div>
);

TopNav.propTypes = {
  updateDateType: PropTypes.func.isRequired,
  selectedDateType: PropTypes.string
};

export default TopNav;
