import React from 'react';
import ListItem from './list-item';

import './styles.css';

class RepositoryList extends React.Component {
  render() {
    return (
      <div className="repositories-list">
        <div className="row list-container">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <div className="row row-group">
          <div className="group-heading">
            <div className="col">
              <h4>Yesterday <span className="small text-muted">July 11, 2019</span></h4>
            </div>
          </div>
        </div>
        <div className="row list-container">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
      </div>
    );
  }
}

export default RepositoryList;
