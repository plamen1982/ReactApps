import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Router from './src/Router';
import reducers from './src/reducers';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDVLffdyGqlMeT1O-fAXXoPSWySowDRalo',
      authDomain: 'manager-140f5.firebaseapp.com',
      databaseURL: 'https://manager-140f5.firebaseio.com',
      projectId: 'manager-140f5',
      storageBucket: 'manager-140f5.appspot.com',
      messagingSenderId: '1024908524621'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;

