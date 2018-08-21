import React from 'react';

import './styles.css';
import languages from './languages';

class LanguageFilter extends React.Component {

  state = {
    selected: ''
  };

  renderLanguages() {
    const availableLanguages = [
      {
        title: 'All Languages',
        value: ''
      },
      ...languages
    ];

    return availableLanguages.map((language, counter) => {
      return (
        <a className="select-menu-item" key={ counter }>
          <span className="select-menu-item-text js-select-button-text js-navigation-open">{ language.title }</span>
        </a>
      );
    });
  }

  render() {
    return (
      <div className='language-filter-wrap'>
        <a href="#" className="btn btn-light language-filter shadowed">
          <i className="fa fa-filter mr-2"></i>
          { this.state.selected || 'All Languages' }
        </a>
        <div className="language-select">
          <div className="select-menu-header">
            <span className="select-menu-title">Search Language</span>
          </div>
          <div className="select-menu-filters">
            <div className="select-menu-text-filter">
              <input type="text" id="text-filter-field" className="form-control js-filterable-field js-navigation-enable" placeholder="Filter Languages" aria-label="Type or choose a language"/>
            </div>
          </div>
          <div className="select-menu-list">{ this.renderLanguages() }</div>
        </div>
      </div>
    );
  }
}

export default LanguageFilter;
