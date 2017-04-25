import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  onButtonPress() {
    //log the user in using firebase api
    const { email, password } = this.state; //get email and pass from state
    this.setState({ error: '', loading: true }); //clear error message

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    //bind is used because context is unknown inside call listener
    .catch(() => {
      //checks for errors when signing in user
      //if error is caught then make new account
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
  }
  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }
  onLoginSuccess() { //clear any message on screen , reset spinner and clear form
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
       });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button ifPressed={this.onButtonPress.bind(this)}>
        Sign In
      </Button>
    );
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
};
export default LoginForm;
