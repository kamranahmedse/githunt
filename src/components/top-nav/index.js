import React from 'react';

import './styles.css';
import Logo from '../icons/logo';

class TopNav extends React.Component {
  tweet = 'GitHunt – Most starred projects on Github by @kamranahmedse https://github.com/kamranahmedse/githunt';

  render() {
    // We need that to show the extension button only if not running in extension
    const isRunningExtension = window.chrome &&
      window.chrome.runtime &&
      window.chrome.runtime.id;

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
              <p className="text-muted d-none d-sm-inline-block d-md-inline-block d-xl-inline-block d-lg-inline-block">Most starred projects on GitHub</p>
              <p className="text-muted d-inline-block d-sm-none d-md-none d-xl-none d-lg-none">Top Github Projects</p>
            </div>
          </a>
          <div className="float-right external-btns">
            <a href='http://github.com/kamranahmedse/githunt'
               target='_blank'
               rel="noopener noreferrer"
               className="btn btn-dark"><i className="fa fa-github mr-1"></i> View Source</a>
            {
              !isRunningExtension && (
                <a href='https://goo.gl/e7YP1h'
                   target='_blank'
                   rel="noopener noreferrer"
                   className="btn btn-danger d-none d-sm-none d-md-inline-block d-xl-inline-block d-lg-inline-block">
                  <i className="fa fa-chrome mr-1"></i> Use Extension
                </a>
              )
            }
            {
              isRunningExtension && (
                <a href='https://twitter.com/kamranahmedse'
                   target='_blank'
                   rel="noopener noreferrer"
                   className="btn btn-danger d-none d-sm-none d-md-inline-block d-xl-inline-block d-lg-inline-block">
                  <i className="fa fa-comment mr-1"></i> Give Feedback
                </a>
              )
            }
            <a href={ `https://twitter.com/intent/tweet?text=${this.tweet}` }
               target='_blank'
               rel="noopener noreferrer"
               className="btn btn-primary btn-tweet d-none d-sm-none d-md-none d-xl-inline-block d-lg-inline-block">
              <i className="fa fa-twitter mr-1"></i> Tweet
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
