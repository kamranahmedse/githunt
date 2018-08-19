import React from 'react';
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
        <a href="#" className="btn btn-primary">Weekly</a>
        <a href="#" className="btn btn-light">Monthly</a>
        <a href="#" className="btn btn-light">Daily</a>
      </div>
    </div>
  </div>
);

export default TopNav;
