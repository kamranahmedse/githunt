import React from 'react';
import classNames from 'classnames';

import './styles.css';

class ViewFilter extends React.Component {
  state = {
    selected: 'grid'
  };

  changeSelected = (viewType) => {
    this.setState({
      selected: viewType
    });
  };

  render() {
    return (
      <div className="view-type-wrap">
        <div className="view-type btn shadowed cursor-default">
          <a onClick={ () => this.changeSelected('grid') } href="javascript:void(0)" className={ classNames({ active: this.state.selected === 'grid' }) }>
            <i className="fa fa-table mr-2"></i>
            Grid
          </a>
          <a onClick={ () => this.changeSelected('list') } href="javascript:void(0)" className={ classNames({ active: this.state.selected === 'list' }) }>
            <i className="fa fa-list mr-2"></i>
            List
          </a>
        </div>
      </div>
    );
  }
}

export default ViewFilter;
