import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import TopNav from '../../components/top-nav';
import Filters from '../../components/filters';
import RepositoryGrid from '../../components/repository-grid';
import { updateLanguage, updateViewType } from '../../redux/preference/actions';
import RepositoryList from '../../components/repository-list';

class FeedContainer extends React.Component {
  render() {
    return (
      <div className="page-wrap">
        <TopNav/>

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
  };
};

const mapDispatchToProps = {
  updateLanguage,
  updateViewType
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
