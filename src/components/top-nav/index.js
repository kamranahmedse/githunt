import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../icons/logo';

class TopNav extends React.Component {
  updateDateJump = (dateJump) => {
    if (dateJump === this.props.selectedDateJump) {
      return;
    }

    this.props.updateDateJump(dateJump);
  };

  render() {
    return (
      <div className='top-nav'>
        <div className="container clearfix">
          <Link to="/" className="logo clearfix float-left">
            <Logo/>
            <div className="logo-text">
              <h4>GitHunt</h4>
              <p className="text-muted">Most starred projects on GitHub</p>
            </div>
          </Link>
          <div className="float-right duration-btns">
            <button onClick={ () => this.updateDateJump('year') }
                    className={
                      classNames('btn', {
                        'btn-primary': this.props.selectedDateJump === 'year',
                        'btn-light': this.props.selectedDateJump !== 'year',
                      })
                    }>
              Yearly
            </button>
            <button onClick={ () => this.updateDateJump('month') }
                    className={
                      classNames('btn', {
                        'btn-primary': this.props.selectedDateJump === 'month',
                        'btn-light': this.props.selectedDateJump !== 'month',
                      })
                    }>
              Monthly
            </button>
            <button onClick={ () => this.updateDateJump('week') }
                    className={
                      classNames('btn', {
                        'btn-primary': this.props.selectedDateJump === 'week',
                        'btn-light': this.props.selectedDateJump !== 'week',
                      })
                    }>
              Weekly
            </button>
            <button onClick={ () => this.updateDateJump('day') }
                    className={
                      classNames('btn', {
                        'btn-primary': this.props.selectedDateJump === 'day',
                        'btn-light': this.props.selectedDateJump !== 'day',
                      })
                    }>
              Daily
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TopNav.propTypes = {
  updateDateJump: PropTypes.func.isRequired,
  selectedDateJump: PropTypes.string
};

export default TopNav;
