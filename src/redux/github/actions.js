import axios from 'axios';

import {
  FETCH_TRENDING_FAILED,
  FETCH_TRENDING_SUCCESS,
  PROCESS_FETCH_TRENDING,
  UPDATE_FILTERS
} from './types';

const API_URL = 'https://api.github.com/search/repositories';

/**
 * @param {object} filters
 * @returns {Function}
 */
export const fetchTrending = function (filters) {
  return dispatch => {
    dispatch({ type: PROCESS_FETCH_TRENDING });

    axios.get(API_URL, {
      params: filters
    }).then(response => {
      dispatch({
        type: FETCH_TRENDING_SUCCESS,
        payload: response.data
      });
    }).catch(error => {
      dispatch({
        type: FETCH_TRENDING_FAILED,
        payload: error
      });
    });
  };
};

/**
 * Updates the filters used in queries
 * @param filters
 * @return {Function}
 */
export const updateFilters = function (filters) {
  return dispatch => {
    dispatch({
      type: UPDATE_FILTERS,
      payload: filters
    });
  };
};
