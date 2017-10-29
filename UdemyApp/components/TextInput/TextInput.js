import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import styles from './styles'

class CustomTextInput extends Component {
    focus = ()=> {
        this._input.focus();
    }
    render() {
        return (
            <View style={ styles.container }>
                <TextInput
                    autoCorrect={ false }
                    autoCapitalize='none'
                    style={ styles.input }
                    ref={(input) => this._input = input}
                    { ...this.props }
                ></TextInput>
            </View>
        )
    }
}

export default CustomTextInput