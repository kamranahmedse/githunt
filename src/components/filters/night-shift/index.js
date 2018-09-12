import React, { Fragment } from "react";
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
