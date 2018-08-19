import axios from 'axios';

import {
  FETCH_TRENDING_FAILED,
  FETCH_TRENDING_SUCCESS,
  PROCESS_FETCH_TRENDING
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
