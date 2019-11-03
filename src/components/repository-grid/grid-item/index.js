import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import GithubColors  from 'github-colors';

import './styles.css';
import Star from '../../icons/star';
import Fork from '../../icons/fork';
import Issue from "../../icons/issue";

class GridItem extends React.Component {
  render() {
    const languageColor = GithubColors.get(this.props.repository.language);

    return (
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
        <div className="grid-item-body">
          <div className="author-header clearfix">
            <a href={ this.props.repository.owner.html_url } rel="noopener noreferrer" target="_blank">
              <div className="author-img">
                <img src={ this.props.repository.owner.avatar_url }
                     onError={ (e) => {
                       e.target.src = '/img/logo.svg';
                     } }
                     alt={ this.props.repository.owner.login }/>
              </div>
              <div className="author-details">
                <h5>{ this.props.repository.owner.login }</h5>
                <p className="small text-muted">View Profile</p>
              </div>
            </a>
          </div>
          <div className="repo-header">
            <h5>
              <a href={ this.props.repository.html_url } rel="noopener noreferrer" target="_blank">
                <span className="repo-name">{ this.props.repository.name }</span>
              </a>
            </h5>
            <p className="repo-meta text-muted small">
              Built by &middot; <a target="_blank" rel="noopener noreferrer" href={ this.props.repository.owner.html_url }>{ this.props.repository.owner.login }</a> &middot; { moment(this.props.repository.created_at).format('MMMM D, YYYY') }
            </p>
          </div>
          <div className="repo-body">
            <p>{ (this.props.repository.description && this.props.repository.description.slice(0, 140)) || 'No description given.' }</p>
          </div>
          <div className="repo-footer">
            {
              this.props.repository.language && (
                <span className="d-inline-flex align-items-center mr-3">
                  <span className="repo-language-color" style={{
                    backgroundColor: languageColor ? languageColor.color : '#e8e8e8'
                  }}></span>
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
              { this.props.repository.stargazers_count ? this.props.repository.stargazers_count.toLocaleString() : 0 }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/network/members` }
               rel="noopener noreferrer"
               target="_blank">
              <Fork/>
              { this.props.repository.forks ? this.props.repository.forks.toLocaleString() : 0 }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/issues` }
               rel="noopener noreferrer"
               target="_blank">
              <Issue />
              { this.props.repository.open_issues ? this.props.repository.open_issues.toLocaleString() : 0 }
            </a>
          </div>
        </div>
      </div>
    );
  }
}

GridItem.propTypes = {
  repository: PropTypes.object.isRequired
};

export default GridItem;
