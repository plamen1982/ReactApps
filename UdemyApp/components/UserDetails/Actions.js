import React from 'react'
import { Text, View, Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Row from './Row'
import Info from './Info'

import styles from './styles'

const Actions = ({ email, cell, phone, city, registered, username, birthdate }) => {
    return(
        <View style = {styles.actionContainer} >
            <Row 
                label = "email"
                body = {email}
                actions = {[
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-mail', 
                        androidIcon:'md-mail'
                },
            ]}
            
            />
            <Row 
                label = "cell"
                body = {cell}
                actions = {[
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-call', 
                        androidIcon:'md-call'
                    }, 
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-text', 
                        androidIcon:'md-text'
                    }
            ]}
            
            />
            <Row 
                label = "home"
                body = {phone}
                actions = {[
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-call', 
                        androidIcon:'md-call'
                    },
            ]}     
            />

        </View>
    )
}

export default Actions;