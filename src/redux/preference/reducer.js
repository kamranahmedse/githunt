import { RESET_OPTIONS, UPDATE_OPTIONS, UPDATE_VIEW_TYPE } from './types';

const initialState = {
  view: 'grid',
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
    case UPDATE_VIEW_TYPE:
      return {
        ...state,
        view: action.payload
      };
    default:
      return state;
  }
}
