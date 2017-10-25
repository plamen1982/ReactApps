import React, { Component } from 'react'
import { 
    View, 
    Text,
    FlatList,
 } from 'react-native'

import { contacts } from '../config/data'
import colors from '../config/colors'
import { ListItem } from '../components/ListItem'

class Contacts extends Component {
    hadlgeRowPress = (item) =>{
        
        this.props.navigation.navigate('Details', item)
    }
    render() {
        return(
                <FlatList
                    style = {{ backgroundColor: colors.background }}
                    data = { contacts }
                    renderItem = {({ item }) => 
                    <ListItem contact={ item } onPress={()=> this.hadlgeRowPress(item)}
                    keyExtractor = { (item)=> item.email }
                    />
                }
                />
            ) 
        }
    }
export default Contacts;