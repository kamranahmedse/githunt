import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../../components/icons/logo';
import OptionsForm from '../../components/options-form';
import { updateOptions } from '../../redux/preference/actions';

class OptionsContainer extends React.Component {
  render() {
    return (
      <div className="options-container">

        <div className="header">
          <Link className="logo clearfix" to='/'>
            <Logo/>
            <div className="logo-text">
              <h3>GitHunt</h3>
              <p className="text-muted">Configure githunt through the options below</p>
            </div>
          </Link>
        </div>

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
