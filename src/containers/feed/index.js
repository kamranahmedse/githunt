import React from 'react';

import './styles.css';
import TopNav from '../../components/top-nav';
import Filters from '../../components/filters';
import Repository from '../../components/repository';

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
            <div className="row repositories-list">
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
            </div>
            <div className="row row-group">
              <div className="group-heading">
                <div className="col">
                  <h4>Yesterday <span className="small text-muted">July 11, 2019</span></h4>
                </div>
              </div>
            </div>
            <div className="row repositories-list">
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
              <Repository/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedContainer;
