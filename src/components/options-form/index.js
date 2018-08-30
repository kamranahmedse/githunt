import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';
import Alert from '../alert';

class OptionsForm extends React.Component {

  state = {
    token: this.props.options.token,
    success: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.options.token !== prevProps.options.token) {
      this.setState({
        success: true
      });
    }
  }

  saveOptions = () => {
    this.props.updateOptions({
      token: this.state.token
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      success: false
    });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.saveOptions();
    }
  };

  render() {
    return (
      <div className="options-form">
        <div className="form-field">
          <h2>Add the Token</h2>
          <p className="text-muted">Generate a token and add it below to avoid hitting the rate limit.</p>
          <hr/>
          <ul>
            <li>
              Go to the <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link mr-1"></i> Settings <i className="fa fa-angle-right"></i> Personal Access Tokens</a> of your github profile
            </li>
            <li>Click <span>Generate New Token</span>. Enter the description and select the <span>scope</span> called <span>public_repo</span> under repo and click <span>Generate Token</span>.</li>
            <li>You will be presented with the generated token. Copy the token and add it below</li>
          </ul>
          <input type="text"
                 name='token'
                 onChange={ this.onChange }
                 onKeyDown={ this.onKeyDown }
                 className="form-control"
                 value={ this.state.token }/>
        </div>
        <button className="btn btn-dark btn-lg btn-save shadow" onClick={ this.saveOptions }>
          <i className="fa fa-cog mr-2"></i>
          Save Token
        </button>
        <Link className='btn btn-primary shadow btn-block btn-lg' to='/'>
          <i className="fa fa-arrow-left mr-2"></i> Go Home
        </Link>

        {
          this.state.success && (
            <div className="mt-4">
              <Alert type='warning'>Successfully updated</Alert>
            </div>
          )
        }
      </div>
    );
  }
}

OptionsForm.propTypes = {
  updateOptions: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};

export default OptionsForm;
