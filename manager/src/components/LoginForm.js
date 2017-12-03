import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onChangePassword(text){
        this.props.passwordChanged(text)
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

                <CardSection>
                    <Button>
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
        password: state.auth.password
    }
}
// connect first argument mapStateToProps, second will be the reducers.
//Second execution of the connect function is the component that will apply updated state 
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);