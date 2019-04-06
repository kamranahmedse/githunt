import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import moment from 'moment';
import Star from '../../icons/star';
import Fork from '../../icons/fork';
import Watcher from '../../icons/watcher';

class ListItem extends React.Component {
  render() {
    return (
      <div className="col-12 list-item-container">
        <div className="list-item-body">
          <div className="repo-header">
            <h3>
              <a href={ this.props.repository.html_url } rel="noopener noreferrer" target="_blank">
                <span className="text-normal">{ this.props.repository.owner.login } / </span>
                { this.props.repository.name }
              </a>
            </h3>
            <p className="repo-meta text-muted small">Built by &middot; <a href={ this.props.repository.owner.html_url } rel="noopener noreferrer" target="_blank">{ this.props.repository.owner.login }</a> &middot; { moment(this.props.repository.created_at).format('MMMM D YYYY') }</p>
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
               rel="noopener noreferrer"
               target="_blank">
              <Star/>
              { this.props.repository.stargazers_count.toLocaleString() }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/network/members` }
               rel="noopener noreferrer"
               target="_blank">
              <Fork/>
              { this.props.repository.forks.toLocaleString() }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/watchers` }
               rel="noopener noreferrer"
               target="_blank">
              <Watcher/>
              { this.props.repository.subscribers_count.toLocaleString() }
            </a>
          </div>
        </div>

        <a href={ this.props.repository.owner.html_url }
           target="_blank"
           rel="noopener noreferrer"
           className="author-link d-none d-lg-block d-xl-block d-md-block">
          <img className='author-img'
               src={ this.props.repository.owner.avatar_url }
               onError={ (e) => {
                 e.target.src = '/img/logo.svg';
               } }
               alt={ this.props.repository.owner.login }/>
        </a>
      </div>
    );
  }
}

ListItem.propTypes = {
  repository: PropTypes.object.isRequired
};

export default ListItem;
