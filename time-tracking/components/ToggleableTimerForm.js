import React from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';
//Stateful component:
//1.props(isOpen) are defined here
//2.props changes over time.
//3.cannot be computed from other state or props.
export default function ToggleableTimerForm({ isOpen }) {
    return (
        <View style={[styles.container, !isOpen && (styles.buttonPadding)]}>
        { isOpen ? <TimerForm /> : <TimerButton title="+" color="black"/> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
})