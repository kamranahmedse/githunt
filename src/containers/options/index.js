import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import OptionsForm from '../../components/options-form';
import { updateOptions } from '../../redux/preference/actions';

class OptionsContainer extends React.Component {
  render() {
    return (
      <div className="options-container">
        <div className="container shadow">
          <OptionsForm
            updateOptions={ this.props.updateOptions }
            options={ this.props.preference.options }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    preference: store.preference
  };
};

const mapDispatchToProps = {
  updateOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
