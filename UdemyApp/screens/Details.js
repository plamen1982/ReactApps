import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import  Header  from '../components/UserDetails/Header'
import  Actions from '../components/UserDetails/Actions'
import Info from '../components/UserDetails/Info'


import  colors  from '../config/colors'

class Details extends Component {
    render() {
        const contact = this.props.navigation.state.params;

        return(
            <ScrollView style = {{backgroundColor: colors.background}}>
                <Header {...contact}/>
                <Actions {...contact}/>
                <Info {...contact}/>
            </ScrollView>

            )
        }
    }
export default Details;