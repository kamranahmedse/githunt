import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import languages from './languages';

class LanguageFilter extends React.Component {
  filterInputRef = React.createRef();

  state = {
    filterText: '',
    selectedIndex: 0,
    showDropdown: false
  };

  focusFilterInput = () => {
    this.filterInputRef.current.focus();
  };

  componentDidUpdate(prevProps, prevState) {
    // only scroll into view if the active item changed since last render
    if (prevState.selectedIndex !== this.state.selectedIndex) {
      this.ensureSelectedVisible();
    }

    // If the dropdown has just been made visible focus the input
    if (this.state.showDropdown && !prevState.showDropdown) {
      this.focusFilterInput();
    }
  }

  ensureSelectedVisible() {
    const itemComponent = this.refs.activeItem;
    if (!itemComponent) {
      return;
    }

    const domNode = ReactDOM.findDOMNode(itemComponent);
    if (!domNode) {
      return;
    }

    domNode.scrollIntoView({ block: 'end' });
  }

  getFilteredLanguages() {
    let availableLanguages = [...languages];

    if (this.state.filterText) {
      availableLanguages = availableLanguages.filter(language => {
        const languageText = language.title.toLowerCase();
        const selectedText = this.state.filterText.toLowerCase();

        return languageText.indexOf(selectedText) >= 0;
      });
    }

    return availableLanguages;
  }

  renderLanguages() {
    let availableLanguages = this.getFilteredLanguages();

    return availableLanguages.map((language, counter) => {
      const isSelectedIndex = counter === this.state.selectedIndex;

      // This will be used in making sure of the element visibility
      const refProp = isSelectedIndex ? { ref: 'activeItem' } : {};

      return (
        <a className={ classNames('select-menu-item', { 'active-item': isSelectedIndex }) }
           { ...refProp }
           onMouseDown={ () => this.selectLanguage(counter) }
           key={ counter }>
          <span className="select-menu-item-text">{ language.title }</span>
        </a>
      );
    });
  }

  onKeyDown = e => {
    const { selectedIndex } = this.state;

    const isEnterKey = e.keyCode === 13;
    const isUpKey = e.keyCode === 38;
    const isDownKey = e.keyCode === 40;

    if (!isUpKey && !isDownKey && !isEnterKey) {
      return;
    }

    const filteredLanguages = this.getFilteredLanguages();
    e.preventDefault();

    // arrow up/down button should select next/previous list element
    if (isUpKey && selectedIndex > 0) {
      this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex - 1
      }));
    } else if (isDownKey && selectedIndex < (filteredLanguages.length - 1)) {
      this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex + 1
      }));
    } else if (isEnterKey && filteredLanguages[selectedIndex]) {
      this.selectLanguage(selectedIndex);
    }
  };

  selectLanguage = (selectedIndex) => {
    const filteredLanguages = this.getFilteredLanguages();
    const selectedLanguage = filteredLanguages[selectedIndex];
    if (!selectedLanguage) {
      return;
    }

    this.setState({
      filterText: '',
      showDropdown: false
    });

    this.props.updateLanguage(selectedLanguage.value);
  };

  hideDropdown = () => {
    this.setState({
      showDropdown: false,
      filterText: ''
    });
  };

  filterLanguages = (e) => {
    this.setState({
      filterText: e.target.value,
      selectedIndex: 0      // Reset and select the first language
    });
  };

  getLanguageDropdown() {
    return (
      <div className="language-select">
        <div className="select-menu-header">
          <span className="select-menu-title">Search Language</span>
        </div>
        <div className="select-menu-filters">
          <div className="select-menu-text-filter">
            <input type="text"
                   className="form-control"
                   placeholder="Filter Languages"
                   ref={ this.filterInputRef }
                   onBlur={ this.hideDropdown }
                   onChange={ this.filterLanguages }
                   onKeyDown={ this.onKeyDown }
            />
          </div>
        </div>
        <div className="select-menu-list">
          { this.renderLanguages() }
        </div>
      </div>
    );
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown
    }));
  };

  render() {
    return (
      <div className='language-filter-wrap'>
        <button onClick={ this.toggleDropdown } className="btn btn-light language-filter shadowed">
          <i className="fa fa-filter mr-2"></i>
          { this.props.selectedLanguage || 'All Languages' }
        </button>
        { this.state.showDropdown && this.getLanguageDropdown() }
      </div>
    );
  }
}

LanguageFilter.propTypes = {
  updateLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string
};

export default LanguageFilter;
