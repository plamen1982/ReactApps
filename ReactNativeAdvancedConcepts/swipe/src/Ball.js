import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
    componentWillMount() {
//1. Where the item is right now? -> Animated.ValueXY(0, 0) - the initial position is x: 0, y: 0
        this.position = new Animated.ValueXY(0, 0)
        Animated.spring(this.position, {
//2. Where we moving elment to? Animated.spring: change this.position to values x: 200, y: 500
            toValue: { x: 200, y: 500 }
        }).start();
    }

    render() {
        return(
//3. Which element are we moving? Animated.View style={this.position.getLayout()}, 
//Animated.View inspect the style and with this.position properties extracting the information to create the animation
            
        <Animated.View style={this.position.getLayout()}>
            <View style={styles.ball} />
        </Animated.View>
        );
    }
}

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'   
    }
}

export default Ball;