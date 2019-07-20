import React, { Component } from 'react';
import EnquiryForm from './components/EnquiryForm';
import ShowEnquiries from './components/ShowEnquiries';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import jwtDecode from 'jwt-decode'

export default class App extends Component {

  state = {}

  componentDidMount() {
      try {
      const jwt = localStorage.getItem("token")
      const user = jwtDecode(jwt)
      this.setState( { user })
      } catch(err) {}
  }


  render() {
  return (
    <React.Fragment>
      <EnquiryForm />
      <ShowEnquiries />
      <RegisterForm />
      <LoginForm />
      <div>{this.state.user ? <h1>Logged in as {this.state.user.name} </h1> : <h1>Not Logged In</h1>}</div>
    </React.Fragment>
  );
}
}
