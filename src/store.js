import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './redux/reducers';

const persistedReducers = persistReducer(
  {
    key: 'githunt:root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
  },
  rootReducer,
);

export const store = createStore(
  persistedReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export const persist = persistStore(store);
