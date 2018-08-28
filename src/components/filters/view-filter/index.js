import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

class ViewFilter extends React.Component {
  state = {};

  changeSelected = (viewType) => {
    this.props.updateViewType(viewType);
  };

  render() {
    return (
      <div className="view-type-wrap">
        <div className="view-type btn shadowed cursor-default">
          <button onClick={ () => this.changeSelected('grid') } className={ classNames({ active: this.props.selectedViewType === 'grid' }) }>
            <i className="fa fa-table mr-2"></i>
            Grid
          </button>
          <button onClick={ () => this.changeSelected('list') } className={ classNames({ active: this.props.selectedViewType === 'list' }) }>
            <i className="fa fa-list mr-2"></i>
            List
          </button>
        </div>
      </div>
    );
  }
}

ViewFilter.propTypes = {
  updateViewType: PropTypes.func.isRequired,
  selectedViewType: PropTypes.string,
};

export default ViewFilter;
