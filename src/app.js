import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Launcher from './components/launcher';
import { persist, store } from './store';
import AppRoutes from './router';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <PersistGate loading={ <Launcher/> } persistor={ persist }>
          <AppRoutes/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
