import React from 'react';

import './styles.css';

const ViewFilter = (props) => (
  <div className="view-type-wrap">
    <div className="view-type btn shadowed cursor-default">
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

export default ViewFilter;
