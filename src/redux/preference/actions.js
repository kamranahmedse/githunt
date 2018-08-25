import { UPDATE_DATE_TYPE, UPDATE_LANGUAGE, UPDATE_OPTIONS, UPDATE_VIEW_TYPE } from './types';

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

export const updateLanguage = function (language) {
  return dispatch => {
    dispatch({
      type: UPDATE_LANGUAGE,
      payload: language
    });
  };
};

export const updateDateType = function (dateType) {
  return dispatch => {
    dispatch({
      type: UPDATE_DATE_TYPE,
      payload: dateType
    });
  };
};
