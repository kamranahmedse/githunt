import { UPDATE_OPTIONS, UPDATE_VIEW_TYPE } from './types';

export const updateOptions = function (setting) {
  return dispatch => {
    dispatch({
      type: UPDATE_OPTIONS,
      payload: setting,
    });
  };
};

export const updateViewType = function (viewType = 'grid') {
  return dispatch => {
    dispatch({
      type: UPDATE_VIEW_TYPE,
      payload: viewType
    });
  };
};
