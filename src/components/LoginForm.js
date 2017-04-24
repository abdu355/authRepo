import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };
  onButtonPress() {
    //log the user in using firebase api
    const { email, password } = this.state; //get email and pass from state
    this.setState({ error: '' }); //clear error message

    firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
      //checks for errors when signing in user
      //if error is caught then make new account
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
        //show error to user on screen
        this.setState({ error: 'Authentication Failed !' });
      });
    });
  }

  render() {
    return (
      <Card>
      <CardSection >
      <Input
      placeholder="example@gmail.com"
      label="Email"
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      />
      </CardSection>

      <CardSection>
      <Input
      secureTextEntry
      placeholder="password"
      label="Password"
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      />
      </CardSection>

      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>

      <CardSection>
      <Button ifPressed={this.onButtonPress.bind(this)}>
        Sign In
      </Button>
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
};
export default LoginForm;
