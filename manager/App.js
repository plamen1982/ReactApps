import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

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
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm>
          </LoginForm>
      </Provider>
    );
  }
}

export default App;

