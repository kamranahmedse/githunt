import { FETCH_TRENDING_FAILED, FETCH_TRENDING_SUCCESS, PROCESS_FETCH_TRENDING } from './types';

export const initialState = {
  processing: false,
  error: null,
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROCESS_FETCH_TRENDING:
      return {
        ...state,
        processing: true,
        error: null
      };
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        data: action.payload,
        processing: false,
        error: null
      };
    case FETCH_TRENDING_FAILED:
      return {
        ...state,
        process: false,
        error: action.payload
      };
    default:
      return state;
  }
}
