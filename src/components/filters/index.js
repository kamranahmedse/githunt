import React from 'react';
import PropTypes from 'prop-types';

import LanguageFilter from './language-filter';
import ViewFilter from './view-filter';
import './styles.css';
import DateJumpFilter from './date-jump-filter';

const Filters = (props) => (
  <div className="filters-wrap mt-3 mt-sm-3 mt-md-0 mt-xl-0 mt-lg-0">
    <div className="filter-item">
      <LanguageFilter
        selectedLanguage={ props.selectedLanguage }
        updateLanguage={ props.updateLanguage }
      />
    </div>
    <div className="filter-item">
      <DateJumpFilter
        updateDateJump={ props.updateDateJump }
        selectedDateJump={ props.selectedDateJump }
      />
    </div>
    <div className="filter-item d-none d-sm-none d-md-none d-xl-block d-lg-block">
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
  updateDateJump: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string,
  selectedViewType: PropTypes.string,
  selectedDateJump: PropTypes.string
};

export default Filters;
