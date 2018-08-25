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
          <a onClick={ () => this.changeSelected('grid') } href="javascript:void(0)" className={ classNames({ active: this.props.selectedViewType === 'grid' }) }>
            <i className="fa fa-table mr-2"></i>
            Grid
          </a>
          <a onClick={ () => this.changeSelected('list') } href="javascript:void(0)" className={ classNames({ active: this.props.selectedViewType === 'list' }) }>
            <i className="fa fa-list mr-2"></i>
            List
          </a>
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
