import React from 'react';

import './styles.css';

class GridItem extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 repository-container">
        <div className="repository-body">
          <div className="author-header clearfix">
            <a href="#">
              <div className="author-img">
                <img src="https://avatars0.githubusercontent.com/u/4921183?s=460&v=4"/>
              </div>
              <div className="author-details">
                <h5>kamranahmedse</h5>
                <p className="small text-muted">View Profile</p>
              </div>
            </a>
          </div>
          <div className="repo-header">
            <h5>
              <a href="#"><span className="repo-name">design-patterns-for-humans</span></a>
            </h5>
            <p className="repo-meta text-muted small">Built by &middot; <a href="#">kamranahmedse</a> &middot; July 12, 2018</p>
          </div>
          <div className="repo-body">
            <p>Create React apps with no build configuration</p>
          </div>
          <div className="repo-footer">
            <span className="d-inline-block mr-3">
              <span className="repo-language-color ml-0"></span>
              <span itemProp="programmingLanguage">
                PHP
              </span>
            </span>
            <a className="muted-link d-inline-block mr-3" href="/ValveSoftware/Proton/stargazers">
              <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
                <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>
              </svg>
              1,532
            </a>
            <a className="muted-link d-inline-block mr-3" href="/ValveSoftware/Proton/network">
              <svg viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
                <path fillRule="evenodd"
                      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
              </svg>
              30
            </a>
            <a className="muted-link d-inline-block mr-3" href="/ValveSoftware/Proton/network">
              <svg className="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
              </svg>
              55
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GridItem;
