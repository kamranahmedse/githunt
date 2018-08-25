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
           onClick={ () => props.updateDateType('yearly') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'yearly',
               'btn-light': props.selectedDateType !== 'yearly',
             })
           }>
          Yearly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateType('monthly') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'monthly',
               'btn-light': props.selectedDateType !== 'monthly',
             })
           }>
          Monthly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateType('weekly') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'weekly',
               'btn-light': props.selectedDateType !== 'weekly',
             })
           }>
          Weekly
        </a>
        <a href="javascript:void(0)"
           onClick={ () => props.updateDateType('daily') }
           className={
             classNames('btn', {
               'btn-primary': props.selectedDateType === 'daily',
               'btn-light': props.selectedDateType !== 'daily',
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
