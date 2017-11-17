import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import moment from 'moment';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {

  state = { loggedIn: null }

  componentWillMount(){
     firebase.initializeApp({
      apiKey: "AIzaSyCqOmf5OHuI7h9ZDmOniSmspqe7BSPFtOw",
      authDomain: "authentication-7c212.firebaseapp.com",
      databaseURL: "https://authentication-7c212.firebaseio.com",
      projectId: "authentication-7c212",
      storageBucket: "authentication-7c212.appspot.com",
      messagingSenderId: "183675921688"
    });
    // console.log('Firebase were mounted from App!')
    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({ loggedIn: true })
      }
      else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
      switch (this.state.loggedIn){
        case true:
          return <Button>Log out</Button>;
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
  }

  render() {
    return (
      <View >
        <Header  headerText = "Authentication"/>
        { this.renderContent() }
      </View>
    );
  }
}


