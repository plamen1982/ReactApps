import React from 'react'
import { Button, Platform } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Contacts from '../screens/Contacts'
import Details from '../screens/Details'
import NewContact from '../screens/NewContact'
import Me from '../screens/Me'

import { capitalizeFirstLetter } from '../helpers/strings'
import { DrawerButton } from '../components/Header'

export const LeftDrawerButton = ({ navigation }) => {
    if (Platform.OS === 'android'){
        return <DrawerButton onPress={()=>navigation.navigate('DrawerOpen')} />
    }
    return null;
}

export const ContactsStack = StackNavigator({
    Contacts: { 
        screen: Contacts,
        navigationOptions: (props) => ({
            title: 'Contacts',
            headerLeft: <LeftDrawerButton {...props}/>
        }) 
    },
    Details: {
        screen: Details,
        // navigationOptions: {
        //     title: 'Details'
        // }
        navigationOptions:({ navigation }) => ({
            title:`${
                capitalizeFirstLetter(navigation.state.params.name.first)
            } ${
                capitalizeFirstLetter(navigation.state.params.name.last)
            }`
        })
    }
})

export const MeStack = StackNavigator({
    Me: {
        screen: Me,
        navigationOptions: (props)=> ({
            title: 'Me',
            headerLeft: <LeftDrawerButton {...props}/>
        }) 
    }
  })

export const NewContactStack = StackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: (props)=> ({
            title: 'New Contact',
            headerLeft: <LeftDrawerButton {...props}/>
        }) 
    }
  })

export const Drawer = DrawerNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            drawerLabel: 'Contacts',
            drawerIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor}/>   
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            drawerLabel: 'Me',
            drawerIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor}/>
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            drawerLabel: 'New contact',
            drawerIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor}/>
        }
    }
})

// export const Tabs = TabNavigator({
//     Contacts: {
//         screen: ContactsStack,
//         navigationOptions: {
//             tabBarLabel: 'Contact',
//             tabBarIcon : ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor}/>
//         }
//     },
//     NewContact: {
//         screen: NewContactStack,
//         navigationOptions: {
//             tabBarLabel: 'New Contact',
//             tabBarIcon : ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor}/>
//         }
//     },
//     Me: {
//         screen: MeStack,
//         navigationOptions: {
//             tabBarLabel: 'Me',
//             tabBarIcon : ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor}/>
//         }
//     }
// })
