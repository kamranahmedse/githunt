import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './styles.css';
import TopNav from '../../components/top-nav';
import Filters from '../../components/filters';
import { fetchTrending } from '../../redux/github/actions';
import RepositoryGrid from '../../components/repository-grid';
import RepositoryList from '../../components/repository-list';
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
      dateRange.start = moment(lastRecords.start).subtract(1, dateJump).format('YYYY-MM-DD');
      dateRange.end = lastRecords.start;
    } else {
      dateRange.start = moment().add(1, 'day').subtract(1, dateJump).format('YYYY-MM-DD');
      dateRange.end = moment().format('YYYY-MM-DD');
    }

    return dateRange;
  }

  render() {
    return (
      <div className="page-wrap">
        <TopNav
          updateDateJump={ this.props.updateDateJump }
          selectedDateJump={ this.props.preference.dateJump }
        />

        <div className="container mt-4 mb-5 pb-4">
          <div className="header-row clearfix">
            <div className="group-heading">
              <h4>Today <span className="small text-muted">July 12, 2019</span></h4>
            </div>
            <div className="group-filters">
              <Filters
                selectedLanguage={ this.props.preference.language }
                selectedViewType={ this.props.preference.viewType }
                updateLanguage={ this.props.updateLanguage }
                updateViewType={ this.props.updateViewType }
              />
            </div>
          </div>
          <div className="body-row">
            { this.props.preference.viewType === 'grid' ? <RepositoryGrid/> : <RepositoryList/> }
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
