import React from 'react';
import axios from 'axios';
import {Input, Container} from 'semantic-ui-react';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var poolData = {
  UserPoolId : 'us-east-1_B8LlfTU7W', // Your user pool id here
  ClientId : '76jcq337aei27va9q9gtaep0dh' // Your client id here
};
 var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

class SignUpForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleFirstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleConfirmPasswordChange = (e) => {
    this.setState({confirmPassword: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVICE_HOST + "/sign_up"

    axios.post(url, {
      first_name: this.state.firstName.trim(),
      last_name: this.state.lastName.trim(),
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      password_confirmation: this.state.confirmPassword.trim(),
    }).then(() => {
      console.log('Success!');
    }).catch((e) => {
      console.log('Failure!', e);
    });
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Input type="text"
                 value={this.state.firstName}
                 placeholder="First Name"
                 onChange={this.handleFirstNameChange.bind(this)}/> <br />
          <Input type="text"
                 value={this.state.lastName}
                 placeholder="Last Name"
                 onChange={this.handleLastNameChange.bind(this)}/> <br />
          <Input type="text"
                 value={this.state.email}
                 placeholder="Email"
                 onChange={this.handleEmailChange.bind(this)}/> <br />
          <Input type="password"
                 value={this.state.password}
                 placeholder="Password"
                 onChange={this.handlePasswordChange.bind(this)}/><br />
          <Input type="password"
                 value={this.state.confirmPassword}
                 placeholder="Confirm Password"
                 onChange={this.handleConfirmPasswordChange.bind(this)}/><br />
          <Input type="submit"/>
        </form>
      </Container>
      
    );
  }
}

export default SignUpForm;