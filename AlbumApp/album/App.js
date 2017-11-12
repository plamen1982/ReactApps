//Import a library to help create a component

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//Create a component
 const App = () => ( 
       //when we use ScrollView(in AlbumList), alaways use style={{ flex: 1 }} into the parent
      <View style={{ flex: 1 }} >
            <Header headerText={'Albums'} />
            <AlbumList />
      </View>
);
 
export default App; 
