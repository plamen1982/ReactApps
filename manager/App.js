import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm'

class App extends Component {

  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyDVLffdyGqlMeT1O-fAXXoPSWySowDRalo',
      authDomain: 'manager-140f5.firebaseapp.com',
      databaseURL: 'https://manager-140f5.firebaseio.com',
      projectId: 'manager-140f5',
      storageBucket: 'manager-140f5.appspot.com',
      messagingSenderId: '1024908524621'
    };

    firebase.initializeApp(config)
  }

  render() {
    //second argument is for any initial state and third argument 
    //is a store enhancer because we add more functionallity to our app. The dispach functionallity
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider  store={store}>
          <LoginForm>
          </LoginForm>
      </Provider>
    );
  }
}

export default App;

