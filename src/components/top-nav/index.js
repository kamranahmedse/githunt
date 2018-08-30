import React from 'react';

import './styles.css';
import Logo from '../icons/logo';

class TopNav extends React.Component {
  render() {
    return (
      <div className='top-nav'>
        <div className="container clearfix">
          <a href='https://github.com/kamranahmedse/githunt'
             rel="noopener noreferrer"
             target='_blank'
             className="logo clearfix float-left">
            <Logo/>
            <div className="logo-text">
              <h4>GitHunt</h4>
              <p className="text-muted">Most starred projects on GitHub</p>
            </div>
          </a>
          <div className="float-right external-btns">
            <a href='http://github.com/kamranahmedse/githunt'
               target='_blank'
               rel="noopener noreferrer"
               className="btn btn-dark"><i className="fa fa-github mr-1"></i> View Source</a>
            <a href='http://github.com/kamranahmedse/githunt'
               target='_blank'
               rel="noopener noreferrer"
               className="btn btn-danger"><i className="fa fa-chrome mr-1"></i> Use Extension</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
