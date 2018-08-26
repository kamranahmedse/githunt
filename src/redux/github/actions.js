import axios from 'axios';

import {
  FETCH_TRENDING_FAILED,
  FETCH_TRENDING_SUCCESS,
  PROCESS_FETCH_TRENDING,
  UPDATE_FILTERS
} from './types';

const API_URL = 'https://api.github.com/search/repositories';

const transformFilters = (filters) => {
  const transformedFilters = {};

  const reposDate = `created:${filters.dateRange.start.format('YYYY-MM-DD')}..${filters.dateRange.end.format('YYYY-MM-DD')}`;
  const reposLanguage = filters.language ? `language:${filters.language} ` : '';

  if (filters.token) {
    transformedFilters.access_token = filters.token;
  }

  transformedFilters.q = reposLanguage + reposDate;
  transformedFilters.sort = 'stars';
  transformedFilters.order = 'desc';

  return transformedFilters;
};

/**
 * @param {object} filters
 * @returns {Function}
 */
export const fetchTrending = function (filters) {
  return dispatch => {
    dispatch({ type: PROCESS_FETCH_TRENDING });

    axios.get(API_URL, {
      params: transformFilters(filters)
    }).then(response => {
      dispatch({
        type: FETCH_TRENDING_SUCCESS,
        payload: {
          start: filters.dateRange.start,
          end: filters.dateRange.end,
          data: response.data
        }
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
