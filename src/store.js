import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const persistedReducers = persistReducer(
  {
    key: 'githunt:root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
  },
  rootReducer,
);

export const store = createStore(persistedReducers, composeWithDevTools(
  applyMiddleware(
    thunk,
  ),
));

export const persist = persistStore(store);
