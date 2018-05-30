import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

// import components
import { Header } from './components/reusable';
import LoginForm from './components/LoginForm';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDayPHvafmf8EYLsBJuyxtGg67HblMRrzI",
      authDomain: "reactnative-authenticati-42183.firebaseapp.com",
      databaseURL: "https://reactnative-authenticati-42183.firebaseio.com",
      projectId: "reactnative-authenticati-42183",
      storageBucket: "reactnative-authenticati-42183.appspot.com",
      messagingSenderId: "53112751865"
    });
    
    firebase.auth().onAuthStateChanged( user => {
      if (user)
        this.setState({ loggedIn: true});
      else
        this.setState({ loggedIn: false});
    });

  }

  render(){
    return(
      <View>
        <Header headerText='Auth App' />
        { this.state.loggedIn ? <LogoutForm /> : <LoginForm /> }
      </View>
    );
  }
}