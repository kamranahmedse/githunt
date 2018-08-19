import React from 'react';

import './styles.css';
import TopNav from '../../components/top-nav';

class FeedContainer extends React.Component {
  render() {
    return (
      <div className="page-wrap">
        <TopNav/>
        <div className="container">
        </div>
      </div>
    );
  }
}

export default FeedContainer;
