import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedin: null }
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

  firebase.auth().onAuthStateChanged((user) => { //called on sign in and sign out
    if (user) { //user us true or false
      this.setState({ loggedin: true });
    } else {
      this.setState({ loggedin: false });
    }
  });
}
renderContent() {
  switch (this.state.loggedin) {
    case true: //logged in
      return (
        <View style={{ flexDirection: 'row' }}>
        <Button ifPressed={() => firebase.auth().signOut()}> Log out </Button>
        </View>
      );
    case false: //logged out
      return <LoginForm />;
    default: //dont know yet
      return (
      <CardSection>
        <Spinner size="large" />
      </CardSection>
    );
  }
}
render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
