import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';
import Alert from '../../components/alert';
import Loader from '../../components/loader';
import TopNav from '../../components/top-nav';
import Filters from '../../components/filters';
import GroupHeading from '../../components/group-heading';
import { fetchTrending } from '../../redux/github/actions';
import RepositoryList from '../../components/repository-list';
import RepositoryGrid from '../../components/repository-grid';
import { updateDateJump, updateLanguage, updateViewType } from '../../redux/preference/actions';

class FeedContainer extends React.Component {
  componentDidMount() {
    const existingRepositories = this.props.github.repositories || [];

    // If there are no loaded repositories before, fetch them
    if (existingRepositories.length === 0) {
      this.fetchNextRepositories();
    }
  }

  fetchNextRepositories() {
    const filters = this.getFilters();
    this.props.fetchTrending(filters);
  }

  componentDidUpdate(prevProps) {
    const currPreferences = this.props.preference;
    const prevPreferences = prevProps.preference;

    // If language or dateJump has been updated, reload
    // the repositories
    if (currPreferences.language !== prevPreferences.language ||
      currPreferences.dateJump !== prevPreferences.dateJump) {
      this.fetchNextRepositories();
    }
  }

  getFilters() {
    const filters = {};

    filters.dateRange = this.getNextDateRange();
    if (this.props.preference.language) {
      filters.language = this.props.preference.language;
    }

    if (this.props.preference.options.token) {
      filters.token = this.props.preference.options.token;
    }

    return filters;
  }

  getNextDateRange() {
    const repositories = this.props.github.repositories || [];
    const dateJump = this.props.preference.dateJump;

    const dateRange = {};
    const lastRecords = repositories[repositories.length - 1];

    if (lastRecords) {
      dateRange.start = moment(lastRecords.start).subtract(1, dateJump).startOf('day');
      dateRange.end = lastRecords.start;
    } else {
      dateRange.start = moment().subtract(1, dateJump).startOf('day');
      dateRange.end = moment().startOf('day');
    }

    return dateRange;
  }

  renderTokenWarning() {
    return !this.props.preference.options.token && (
      <Alert type='warning'>
        Make sure to
        <strong className='ml-1 mr-1'>
          <Link to='/options'>add a token</Link>
        </strong>
        to avoid hitting the rate limit
      </Alert>
    );
  }

  renderErrors() {
    if (!this.props.github.error) {
      return null;
    }

    let message = '';
    switch (this.props.github.error.toLowerCase()) {
      case 'bad credentials':
        message = (
          <span>
            Token is invalid, try <Link to='/options'>updating the token</Link> on the options page
          </span>
        );
        break;
      case 'network error':
        message = 'Error trying to connect to GitHub servers';
        break;
      default:
        message = this.props.github.error;
        break;
    }

    return (
      <Alert type='danger'>
        { message }
      </Alert>
    );
  }

  renderAlerts() {
    const tokenWarning = this.renderTokenWarning();
    const error = this.renderErrors();

    if (tokenWarning || error) {
      return (
        <div className="alert-group">
          { tokenWarning }
          { error }
        </div>
      );
    }

    return null;
  }

  renderRepositoriesList() {
    if (this.props.preference.viewType === 'grid') {
      return <RepositoryGrid
        repositories={ this.props.github.repositories || [] }
        dateJump={ this.props.preference.dateJump }
      />;
    }

    return <RepositoryList
      repositories={ this.props.github.repositories || [] }
      dateJump={ this.props.preference.dateJump }
    />;
  }

  hasRepositories() {
    return this.props.github.repositories && this.props.github.repositories.length !== 0;
  }

  render() {
    return (
      <div className="page-wrap">
        <TopNav/>

        { this.renderAlerts() }

        <div className="container mb-5 pb-4">
          <div className="header-row clearfix">
            {
              this.hasRepositories() && <GroupHeading
                start={ this.props.github.repositories[0].start }
                end={ this.props.github.repositories[0].end }
                dateJump={ this.props.preference.dateJump }
              />
            }
            <div className="group-filters">
              {
                this.hasRepositories() && <Filters
                  selectedLanguage={ this.props.preference.language }
                  selectedViewType={ this.props.preference.viewType }
                  updateLanguage={ this.props.updateLanguage }
                  updateViewType={ this.props.updateViewType }
                  updateDateJump={ this.props.updateDateJump }
                  selectedDateJump={ this.props.preference.dateJump }
                />
              }
            </div>
          </div>
          <div className="body-row">
            { this.renderRepositoriesList() }

            { this.props.github.processing && <Loader/> }

            {
              !this.props.github.processing &&
              this.hasRepositories() &&
              (
                <button className="btn btn-primary shadow load-next-date"
                        onClick={ () => this.fetchNextRepositories() }>
                  <i className="fa fa-refresh mr-2"></i>
                  Load next { this.props.preference.dateJump }
                </button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    preference: store.preference,
    github: store.github
  };
};

const mapDispatchToProps = {
  updateLanguage,
  updateViewType,
  updateDateJump,
  fetchTrending
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
