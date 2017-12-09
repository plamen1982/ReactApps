import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
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
        if(this.props.error){
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={ styles.textErrorStyle }>{ this.props.error }</Text>
                </View>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
            return(
                <Spinner size='large'/>
            )
        }
        return(
            
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
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
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

const styles = {
    textErrorStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}
// connect first argument mapStateToProps, second will be the action creator methods, they return plain object( the Action ) .
//With this Action, we will update the global state.
//Second execution of the connect function is the component that will apply updated state 
export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser })(LoginForm);