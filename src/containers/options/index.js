import React from 'react';

import './styles.css';
import Logo from '../../components/icons/logo';
import { Link } from 'react-router-dom';

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
          <div className="form-field">
            <h2>Add the Token</h2>
            <p className="text-muted">Generate a token and add it below to avoid hitting the rate limit.</p>
            <hr/>
            <p className="text-muted">Follow the steps listed below to generate the token</p>
            <ul>
              <li>
                Go to the <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">Settings <i className="fa fa-angle-right"></i> Personal Access Tokens</a> of your github profile
              </li>
              <li>Click <span>Generate New Token</span>. Enter the description and select the <span>scope</span> called <span>public_repo</span> under repo and click <span>Generate Token</span>.</li>
              <li>You will be presented with the generated token. Copy the token and add it below</li>
            </ul>
            <input type="text" className="form-control"/>
          </div>
          <button className="btn btn-dark btn-lg btn-save shadow">
            <i className="fa fa-cog mr-2"></i>
            Save Settings
          </button>
        </div>
      </div>
    );
  }
}

export default OptionsContainer;
