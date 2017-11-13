import React from 'react';
import { View } from 'react-native';
// import firebase from 'react-native-firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {
  
  // componentWillMount(){
  //    firebase.initializeApp({
  //     apiKey: 'AIzaSyCqOmf5OHuI7h9ZDmOniSmspqe7BSPFtOw',
  //     authDomain: 'authentication-7c212.firebaseapp.com',
  //     databaseURL: 'https://authentication-7c212.firebaseio.com',
  //     projectId: 'authentication-7c212',
  //     storageBucket: 'authentication-7c212.appspot.com',
  //     messagingSenderId: '183675921688'
  //   });
  // }

  render() {
    return (
      <View >
        <Header  headerText = "Authentication"/>
        <LoginForm />
      </View>
    );
  }
}


