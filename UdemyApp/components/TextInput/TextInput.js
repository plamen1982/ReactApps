import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import styles from './styles'

const CustomTextInput = ({ props })=> {
    return (
        <View style={ styles.container }>
            <TextInput
                autoCorrect={ false }
                autoCapitalize='none'
                style={ styles.input }
                { ...props }
            ></TextInput>
        </View>
    )
}

export default CustomTextInput