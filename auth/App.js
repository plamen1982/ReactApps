import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common'

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Header  headerText = "Authentication"/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}


