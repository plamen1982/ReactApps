import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function Avatar ({ size, backgroundColor, initials }) {
    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
    }
    return (
        <View style={style}/>
    )
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
} 