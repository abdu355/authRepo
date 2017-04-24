import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    //initialize firebase on root
    firebase.initializeApp({
    apiKey: 'AIzaSyAlXDsbDWw7FdswC2VlduS30ffXign7CoE',
    authDomain: 'auth-95aa2.firebaseapp.com',
    databaseURL: 'https://auth-95aa2.firebaseio.com',
    projectId: 'auth-95aa2',
    storageBucket: 'auth-95aa2.appspot.com',
    messagingSenderId: '521270367050'
  });
}
render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
export default App;
