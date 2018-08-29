import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './styles.css';

class GroupHeading extends React.Component {
  getTitle() {
    const startMoment = moment(this.props.start);
    const currentMoment = moment();
    const yesterdayMoment = moment().subtract(1, 'day');

    // For "day" jumps return the day name
    if (this.props.dateJump === 'day') {
      if (startMoment.isSame(currentMoment, 'day')) {
        return 'Today';
      } else if (startMoment.isSame(yesterdayMoment, 'day')) {
        return 'Yesterday';
      }

      return startMoment.format('dddd');
    }

    // Return the relative date
    const formattedDate = startMoment.fromNow();
    if (formattedDate === 'a year ago') {
      return 'Last year';
    } else if (formattedDate === '7 days ago') {
      return 'This week';
    } else if (formattedDate === '14 days ago') {
      return 'Last week';
    }

    return formattedDate;
  }

  getSubtitle() {
    const startMoment = moment(this.props.start);
    const endMoment = moment(this.props.end);

    if (startMoment.isSame(endMoment, 'day') || this.props.dateJump === 'day') {
      return startMoment.format('MMMM D, YYYY');
    }

    return startMoment.format('MMMM D, YYYY') + ' – ' + endMoment.format('MMMM D, YYYY');
  }

  render() {
    return (
      <div className="group-heading">
        <h4>
          <span className="text-capitalizes">{ this.getTitle() }</span>
          <span className="small text-muted ml-2">
            { this.getSubtitle() }
          </span>
        </h4>
      </div>
    );
  }
}

GroupHeading.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  dateJump: PropTypes.oneOf(['week', 'month', 'year', 'day'])
};

export default GroupHeading;
