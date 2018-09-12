import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { on, off }from './actions';
import BlubIcon from '../../icons/blub';
import "./style.css";

class NightShift extends React.Component {
  constructor() {
    super();
    this.toggleNightShift = this.toggleNightShift.bind(this);
  }
  toggleNightShift() {
    if (!this.props.nightShift) {
      return this.props.on();
    }
    return this.props.off();
  }
  render() {
    return (
      <div className="night__shift__box" onClick={this.toggleNightShift}>
        <BlubIcon />
      </div>
    )
  }
}

NightShift.propTypes = {
  on: PropTypes.func,
  off: PropTypes.func,
  nightShift: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    nightShift: state.nightShift
  }
}
const mapDispatchToProps = {
  on,
  off
};

export default connect(mapStateToProps, mapDispatchToProps)(NightShift);
