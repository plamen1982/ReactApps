import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AlbumList extends Component {
    //Class level property state, when update access the state with this.setState
    state = { albums: [] };

    //Lyfecycle hook - execute when component is rendered to the screen
    //componentDidMount() - good for data loading 
    componentDidMount() {
        console.log('componentsWillMount in AlbumList');

        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(respose => respose.json())
            .then(response => this.setState({ albums: response }));
    }
    renderAlbums() {
        return this.state.albums.map((album) => 
              <Text key={album.title} > { album.title }</Text>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
               { this.renderAlbums() } 
            </View>
        );
    }
}

export default AlbumList;
