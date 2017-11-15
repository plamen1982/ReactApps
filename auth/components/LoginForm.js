import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component{
    state = { email: '', password: '', error: '' }
    onButtonPress(){

        const { email, password, error } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        // if there no such user, create this user
        .catch(()=>{
          firebase.auth().createUserWithEmailAndPassword(email, password) 
        // if we are not able to create a user through an error 
        .catch(()=>{
            this.setState({error: 'Authentication failed.'})
        })
    })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="username@email.com"
                        label="Email"
                        value={this.state.email} 
                        onChangeText = {email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true} 
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}

                    />
                </CardSection>
                <CardSection>
                    <Text styles={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>

                    {/* connect the cb funct -> onButtonPress to the component  */}
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        colro: 'red'
    } 
}

export default LoginForm;