import React from 'react';

import './styles.css';
import TopNav from '../../components/top-nav';
import Filters from '../../components/filters';
import GridItem from '../../components/repository-grid/grid-item';
import RepositoryGrid from '../../components/repository-grid';
import RepositoryList from '../../components/repository-list';

class FeedContainer extends React.Component {
  render() {
    return (
      <div className="page-wrap">
        <TopNav/>

        <div className="container mt-4">
          <div className="header-row clearfix">
            <div className="group-heading">
              <h4>Today <span className="small text-muted">July 12, 2019</span></h4>
            </div>
            <div className="group-filters">
              <Filters/>
            </div>
          </div>
          <div className="body-row">
            <RepositoryList/>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedContainer;
