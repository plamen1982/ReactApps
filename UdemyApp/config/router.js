import { StackNavigator, TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Contacts from '../screens/Contacts'
import Details from '../screens/Details'
import NewContact from '../screens/NewContact'
import Me from '../screens/Me'

import { capitalizeFirstLetter } from '../helpers/strings'


export const ContactsStack = StackNavigator({
    Contacts: { 
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts'
        } 
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

const MeStack = StackNavigator({
    Me: {
        screen: Me,
        navigationOptions: {
            headerTitle: 'Me'
        }
    }
  })

const NewContactStack = StackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: {
            headerTitle: 'New Contact'
        }
    }
  })

export const Tabs = TabNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon : ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor}/>
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'New Contact',
            tabBarIcon : ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor}/>
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon : ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor}/>
        }
    }
})

