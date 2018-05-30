import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

// import components
import { Button, Card, CardSection, Input, Spinner } from './reusable';

export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    handleButtonPress(){
        const { email, password } = this.state;

        this.setState({ error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.handleLoginSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.handleLoginSuccess.bind(this))
                    .catch(this.handleLoginFail.bind(this));
            });
    }

    handleLoginSuccess(){
        this.setState({ 
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    handleLoginFail(){
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    renderButton(){
        if (this.state.loading)
            return <Spinner size='small' />

        return <Button onPress={this.handleButtonPress.bind(this)}>Log In</Button>
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        label='Email'
                        value={ this.state.email }
                        onChangeText={ email => this.setState({ email }) }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder='password'
                        label='Password'
                        value={ this.state.password }
                        onChangeText={ password => this.setState({ password })}
                        secureTextEntry
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{ this.state.error }</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}