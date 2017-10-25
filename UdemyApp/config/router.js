import {StackNavigator} from 'react-navigation'
import Contacts from '../screens/Contacts'
import Details from '../screens/Details'
import {capitalizeFirstLetter} from '../helpers/strings'


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

