import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

// import components
import { Header, Button, Card, CardSection, Spinner } from './components/reusable';
import LoginForm from './components/LoginForm';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: null
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

  renderContent(){
    switch(this.state.loggedIn){
      case true: 
        return(   
          <Card>
            <CardSection>
              <Button onPress={()=>firebase.auth().signOut()}>Logout</Button>
            </CardSection>
          </Card>
        );
        
      case false:
        return <LoginForm />

      default:
        return(
          <View style={{ paddingTop: 10 }}>
            <Spinner />
          </View>
        );
    }
  }

  render(){
    return(
      <View>
        <Header headerText='Auth App' />
        { this.renderContent() }
      </View>
    );
  }
}