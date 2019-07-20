import React, { Component } from 'react';
import EnquiryForm from './components/EnquiryForm';
import ShowEnquiries from './components/ShowEnquiries';
import StaffPortal from './components/StaffPortal';
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
      <StaffPortal user={this.state.user} />
      <React.Fragment>
      </React.Fragment>
    </React.Fragment>
  );
}
}
