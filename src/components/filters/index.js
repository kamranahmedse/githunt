import React from 'react';

import './styles.css';

const Filters = (props) => (
  <div className="filters-wrap">
    <a href="#" className="btn btn-light language-filter">
      <i className="fa fa-filter mr-2"></i>
      All Languages
    </a>
    <div className="view-type btn">
      <a href="#" className="active">
        <i className="fa fa-list mr-2"></i>
        List
      </a>
      <a href="#">
        <i className="fa fa-table mr-2"></i>
        Grid
      </a>
    </div>
  </div>
);

export default Filters;
