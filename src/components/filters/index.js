import React from 'react';
import PropTypes from 'prop-types';

import LanguageFilter from './language-filter';
import ViewFilter from './view-filter';
import './styles.css';

const Filters = (props) => (
  <div className="filters-wrap">
    <div className="filter-item">
      <LanguageFilter
        selectedLanguage={ props.selectedLanguage }
        updateLanguage={ props.updateLanguage }
      />
    </div>
    <div className="filter-item">
      <ViewFilter
        selectedViewType={ props.selectedViewType }
        updateViewType={ props.updateViewType }
      />
    </div>
  </div>
);

Filters.propTypes = {
  updateLanguage: PropTypes.func.isRequired,
  updateViewType: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string,
  selectedViewType: PropTypes.string
};

export default Filters;
