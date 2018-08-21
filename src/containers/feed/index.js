import React from 'react';

import './styles.css';
import TopNav from '../../components/top-nav';

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
              <a href="#" className="btn btn-light language-filter">
                <i className="fa fa-filter mr-2"></i>
                All Languages
              </a>
              <div className="view-type btn">
                <a href="#" className="active">
                  <i className="fa fa-list mr-2"></i>
                  List
                </a>
                <a href="#">
                  <i className="fa fa-table mr-2"></i>
                  Grid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedContainer;
