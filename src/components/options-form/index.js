import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const OptionsForm = () => (
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
      <input type="text" className="form-control"/>
    </div>
    <button className="btn btn-dark btn-lg btn-save shadow">
      <i className="fa fa-cog mr-2"></i>
      Save Settings
    </button>
    <Link className='btn btn-primary shadow btn-block btn-lg' to='/'><i className="fa fa-arrow-left"></i> Go Home</Link>
  </div>
);

export default OptionsForm;
