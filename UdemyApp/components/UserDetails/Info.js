import React from 'react'
import { View } from 'react-native'


import styles from './styles'
import Row from './Row'
import { capitalizeFirstLetter } from '../../helpers/strings'


const Info = ({ login, dob, location, registered })=> {
    return (
    <View style={styles.infoContainer}>
        <Row
            label = 'city'
            body={capitalizeFirstLetter(location.city)}
        />
        <Row
            label="birthdate"
            body={dob}
        />
        <Row 
            label="registered"
            body = {registered}
        />
        <Row
            label="username"
            body = {login.username}
        />
    </View>
    )
}
export default Info;