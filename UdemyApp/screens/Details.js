import React, { Component } from 'react'
import { View, Text } from 'react-native'

import  Header  from '../components/UserDetails/Header'
import  colors  from '../config/colors'

class Details extends Component {
    render() {
        const contact = this.props.navigation.state.params;

        return(
            <View >
                <Header {...contact}/>
            </View>

            )
        }
    }
export default Details;