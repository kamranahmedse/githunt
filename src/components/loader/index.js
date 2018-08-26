import React from 'react';

import './styles.css';

const Loader = () => (
  <div className="loading-indicator">
    <img src="/img/galaxy.svg" className='fa-spin' alt=".."/>
  </div>
);

export default Loader;
