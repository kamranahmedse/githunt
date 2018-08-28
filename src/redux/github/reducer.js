import { FETCH_TRENDING_FAILED, FETCH_TRENDING_SUCCESS, PROCESS_FETCH_TRENDING } from './types';
import { UPDATE_DATE_TYPE, UPDATE_LANGUAGE } from '../preference/types';

export const initialState = {
  processing: false,
  // Array of objects with the below format
  // [
  //    { start: '', end: '', data: [] },
  //    { start: '', end: '', data: [] }
  // ]
  repositories: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROCESS_FETCH_TRENDING:
      return {
        ...state,
        processing: true,
        error: null
      };
    case UPDATE_DATE_TYPE:
    case UPDATE_LANGUAGE:
      return {
        ...state,
        ...initialState
      };
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        // Append the fetched repositories to existing list
        repositories: [
          ...state.repositories,
          action.payload
        ],
        processing: false,
        error: null
      };
    case FETCH_TRENDING_FAILED:
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
}
