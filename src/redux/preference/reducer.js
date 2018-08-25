import { RESET_OPTIONS, UPDATE_DATE_TYPE, UPDATE_LANGUAGE, UPDATE_OPTIONS, UPDATE_VIEW_TYPE } from './types';

const initialState = {
  viewType: 'grid',
  dateType: 'weekly',
  language: '',
  options: {
    token: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_OPTIONS:
      return {
        ...state,
        options: action.payload
      };
    case RESET_OPTIONS:
      return {
        ...state,
        options: initialState.options
      };
    case UPDATE_DATE_TYPE:
      return {
        ...state,
        dateType: action.payload
      };
    case UPDATE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload
      };
    case UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
}
