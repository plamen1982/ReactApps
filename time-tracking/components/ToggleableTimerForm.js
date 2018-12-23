import React from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';
//Stateful component:
//1.prop(isOpen) is defined here
//2.prop(isOpen) changes over time.
//3.prop(isOpen) cannot be computed from other state or props.

export default class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false,
    }

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    }

    render() {
        const { isOpen } = this.state; 
        
        return (
            <View style={[styles.container, !isOpen && (styles.buttonPadding)]}>
                { isOpen ? (
                    <TimerForm />
                ) : (
                    <TimerButton title="+" color="black" onPress={this.handleFormOpen}/>
                )} 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});