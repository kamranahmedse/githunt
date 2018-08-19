import { combineReducers } from 'redux';

import preference from './preference/reducer';
import github from './github/reducer';

export default combineReducers({
  github,
  preference,
});
