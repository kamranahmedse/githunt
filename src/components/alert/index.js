import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Alert = (props) => (
  <div className={ classnames('alert', `alert-${props.type}`) }>{ props.children }</div>
);

Alert.propTypes = {
  type: PropTypes.string.isRequired
};

export default Alert;
