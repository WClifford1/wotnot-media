import React, { Component } from 'react'
import Home from './components/Home';
import Guarantee from './components/Guarantee';
import Card1 from './components/Card1'; 
import EnquiryForm from './components/EnquiryForm';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import { Switch, Route } from 'react-router-dom';
import Faq from './components/Faq';
import Contact from './components/Contact';
import ServicePage from './components/ServicePage';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import jwtDecode from 'jwt-decode'
import './/App.css'


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
      {/* <div> */}
      {/* <Home /> */}
      <Navbar1 />
      {/* <Home /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={ServicePage} />
        <Route path="/projects" component={Card1} />
        <Route path="/FAQ" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/enquiries" component={EnquiryForm} />
        <Route path="/bookings" component={BookingForm} />
        <Route path="/termsandconditions" component={Terms} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
      <Footer />
      {/* <EnquiryForm /> */}
      {/* {!this.state.user && 
      <Login user={this.state.user} />
      }
      {this.state.user &&
      <LogOut/>}

      </div> */}

      {/* <Guarantee /> */}
      {/* <Card1 /> */}
      {/* <Services /> */}

    </React.Fragment>
  );
}
}
