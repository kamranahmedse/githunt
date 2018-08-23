import React from 'react';

import './styles.css';

class ListItem extends React.Component {
  render() {
    return (
      <div className="col-12">
        <h3><a href="#"><span className="text-normal">ValveSoftware / </span>Proton</a></h3>
        <p className="text-muted">Compatibility tool for Steam Play based on Wine and additional components</p>

        <div className='list-item-footer'>
          <a href="#">
            <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
              <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
            </svg>
            3,087
          </a>

          <a href="#">
            <svg aria-label="fork" className="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
              <path fillRule="evenodd"
                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
            </svg>
            65
          </a>

          <span>
            Built by
            <a href="/nanonyme"><img src="https://avatars0.githubusercontent.com/u/4921183?s=460&v=4" width="20" height="20"/></a>
          </span>
        </div>
      </div>
    );
  }
}

export default ListItem;
