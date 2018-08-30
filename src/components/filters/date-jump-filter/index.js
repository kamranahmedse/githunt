import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import './styles.css';

class DateJumpFilter extends React.Component {
  state = {
    dropdownOpen: false
  };

  updateDateJump = (dateJump) => {
    if (dateJump === this.props.selectedDateJump) {
      return;
    }

    this.props.updateDateJump(dateJump);
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  getSelectedDateJump() {
    switch (this.props.selectedDateJump) {
      case 'day':
        return 'Daily';
      case 'month':
        return 'Monthly';
      case 'year':
        return 'Yearly';
      case 'week':
        return 'Weekly';
      default:
        return 'Weekly';
    }
  }

  render() {
    return (
      <Dropdown className='date-jump-wrap' isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
        <DropdownToggle className='date-jump-type shadowed'>
          <i className="fa fa-calendar mr-2"></i>
          { this.getSelectedDateJump() }
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={ () => this.updateDateJump('year') }>Yearly</DropdownItem>
          <DropdownItem onClick={ () => this.updateDateJump('month') }>Monthly</DropdownItem>
          <DropdownItem onClick={ () => this.updateDateJump('week') }>Weekly</DropdownItem>
          <DropdownItem onClick={ () => this.updateDateJump('day') }>Daily</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

DateJumpFilter.propTypes = {
  updateDateJump: PropTypes.func.isRequired,
  selectedDateJump: PropTypes.string
};

export default DateJumpFilter;
