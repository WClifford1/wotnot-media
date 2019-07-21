import React, { Component } from 'react';
import EnquiryForm from './components/EnquiryForm';
import ShowEnquiries from './components/ShowEnquiries';
import Login from './components/Login';
import jwtDecode from 'jwt-decode'
import LogOut from './components/LogOut';

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
      {!this.state.user && 
      <Login user={this.state.user} />
      }
      {this.state.user &&
      <LogOut/>}
    </React.Fragment>
  );
}
}
