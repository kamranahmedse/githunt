import { combineReducers } from 'redux';

import preference from './preference/reducer';
import github from './github/reducer';
import nightShift from '../components/filters/night-shift/reducer';

export default combineReducers({
  github,
  preference,
  nightShift
});
