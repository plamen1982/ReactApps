import React from 'react';
import { Constants } from 'expo';
import { 
        StyleSheet, 
        Platform,
        NetInfo,
        Text,
        View,
        StatusBar, 
    } from 'react-native';

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight: 0;

export default class Status extends React.Component {
    state = {
        info: null,
    }

    render() {
        const { info } = state;
        const isConnected = info !== 'none';
        const backgroundColor = isConnected ? 'white' : 'red';

        if(Platform.OS === 'ios') {
            return <View style={[styles.status, { backgroundColor }]}></View>;
        }

        return null;
    }
}

const styles = StyleSheet.create({
    status: {
        zIndex: 1,
        height: statusHeight,
    }
});