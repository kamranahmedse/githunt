import React from 'react';

import LanguageFilter from './language-filter';
import ViewFilter from './view-filter';
import './styles.css';

const Filters = (props) => (
  <div className="filters-wrap">
    <div className="filter-item">
      <LanguageFilter/>
    </div>
    <div className="filter-item">
      <ViewFilter/>
    </div>
  </div>
);

export default Filters;
