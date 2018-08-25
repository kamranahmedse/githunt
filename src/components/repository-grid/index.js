import React from 'react';

import GridItem from './grid-item';
import './styles.css';

class RepositoryGrid extends React.Component {
  render() {
    return (
      <div className="repositories-grid">
        <div className="row grid-container">
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
        </div>
        <div className="row row-group">
          <div className="group-heading">
            <div className="col">
              <h4>Yesterday <span className="small text-muted">July 11, 2019</span></h4>
            </div>
          </div>
        </div>
        <div className="row grid-container">
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
        </div>
      </div>
    );
  }
}

export default RepositoryGrid;
