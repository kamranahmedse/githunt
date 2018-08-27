import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import moment from 'moment';

class ListItem extends React.Component {
  render() {
    return (
      <div className="col-12 list-item-container">
        <div className="list-item-body">
          <div className="repo-header">
            <h3>
              <a href={ this.props.repository.html_url } target="_blank">
                <span className="text-normal">{ this.props.repository.owner.login } / </span>
                { this.props.repository.name }
              </a>
            </h3>
            <p className="repo-meta text-muted small">Built by &middot; <a href={ this.props.repository.owner.html_url } target="_blank">{ this.props.repository.owner.login }</a> &middot; { moment(this.props.repository.created_at).format('MMMM D YYYY') }</p>
          </div>
          <div className="repo-body">
            <p>{ this.props.repository.description || 'No description given.' }</p>
          </div>
          <div className="repo-footer">
            {
              this.props.repository.language && (
                <span className="d-inline-block mr-3">
                  <span className="repo-language-color ml-0"></span>
                  <span itemProp="programmingLanguage">
                    { this.props.repository.language }
                  </span>
                </span>
              )
            }
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/stargazers` }
               target="_blank">
              <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
                <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>
              </svg>
              { this.props.repository.stargazers_count.toLocaleString() }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/network/members` }
               target="_blank">
              <svg viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
                <path fillRule="evenodd"
                      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
              </svg>
              { this.props.repository.forks.toLocaleString() }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/watchers` }
               target="_blank">
              <svg className="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
              </svg>
              { this.props.repository.watchers.toLocaleString() }
            </a>
          </div>
        </div>

        <a href={ this.props.repository.owner.html_url }
           target="_blank"
           className="author-link d-none d-lg-block d-xl-block d-md-block">
          <img className='author-img' src={ this.props.repository.owner.avatar_url }/>
        </a>
      </div>
    );
  }
}

ListItem.propTypes = {
  repository: PropTypes.object.isRequired
};

export default ListItem;
