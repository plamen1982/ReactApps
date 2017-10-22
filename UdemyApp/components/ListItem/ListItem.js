import React from 'react'
import {
    Text, 
    View, 
    TouchableHighlight, 
    Platform, 
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles, { CHEVRON_SIZE } from './styles'
import { capitalizeFirstLetter } from '../../helpers/strings'
import  colors  from '../../config/colors'

const ListItem = ({ contact, onPress }) => {
    const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`
    const iconName = Platform.OS==='ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
    return(
    <TouchableHighlight
        onPress={onPress}
        uderlayColor={colors.rowUnderlay}
    >

        <View style = {styles.row}>
            <Image
                source = {{ uri: contact.picture.thumbnail }}
                style = {styles.avatar}
            />
            <View>
                <Text style={styles.name}>{name}</Text>                
                <Text style={styles.email}>{contact.email}</Text>
            </View>
            <View style={styles.chevronContainer} >
                <Icon
                    name={iconName}
                    size={CHEVRON_SIZE}
                    style={styles.chevron}
                    color={colors.subtleText}
                />
            </View>
        </View>
        
    </TouchableHighlight>
    )
} 

export default ListItem;