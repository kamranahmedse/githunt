import React from 'react';
import PropTypes from 'prop-types';

import GridItem from './grid-item';
import './styles.css';
import GroupHeading from '../group-heading';

class RepositoryGrid extends React.Component {
  renderGroup(repositoryGroup, counter) {
    let groupHeading = '';
    // for the first repository group, we have the
    // heading among the filters out of the grid
    if (counter !== 0) {
      groupHeading = (
        <div className="row row-group">
          <GroupHeading
            start={ repositoryGroup.start }
            end={ repositoryGroup.end }
            dateJump={ this.props.dateJump }
          />
        </div>
      );
    }

    const groupKey = `${repositoryGroup.start}_${repositoryGroup.end}_${counter}`;
    const repositories = repositoryGroup.data.items;

    return (
      <div key={ groupKey } data-group-key={ groupKey }>
        { groupHeading }
        <div className="row grid-container">
          { repositories.map(repository => <GridItem repository={ repository } key={ repository.id }/>) }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="repositories-grid">
        {
          this.props.repositories.map((repositoryGroup, counter) => {
            return this.renderGroup(repositoryGroup, counter);
          })
        }
      </div>
    );
  }
}

RepositoryGrid.propTypes = {
  repositories: PropTypes.array.isRequired,
  dateJump: PropTypes.string.isRequired
};

export default RepositoryGrid;
