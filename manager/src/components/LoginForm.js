import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onChangePassword(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
       
    }

    renderError(){
        console.log(`render error ${this.props.error}`)
        if(this.props.error){
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={ styles.textErrorStyle }>{ this.props.error }</Text>
                </View>
            )
        }
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label = "Email"
                        placeholder = "user@mail.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label = "password"
                        secureTextEntry
                        onChangeText = {this.onChangePassword.bind(this)}
                        value = {this.props.password}
                    />
                </CardSection>
                    {this.renderError()}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}

const styles = {
    textErrorStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}
// connect first argument mapStateToProps, second will be the reducers.
//Second execution of the connect function is the component that will apply updated state 
export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser })(LoginForm);