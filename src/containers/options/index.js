import React from 'react';

import './styles.css';
import Logo from '../../components/icons/logo';
import { Link } from 'react-router-dom';
import OptionsForm from '../../components/options-form';

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
          <OptionsForm/>
        </div>
      </div>
    );
  }
}

export default OptionsContainer;
