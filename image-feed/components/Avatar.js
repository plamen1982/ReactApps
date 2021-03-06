import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Avatar ({ size, backgroundColor, initials }) {
    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{ initials }</Text>
        </View>
    )
}

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    }
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
} 