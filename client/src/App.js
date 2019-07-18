<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser} from './actions/authActions'
import { Provider } from "react-redux";
import store from "./store";
import './App.css'

import BookingForm from './components/BookingForm';
// import EnquiryForm from './components/EnquiryForm';
import Home from './components/Home';
import HeroImage from './components/HeroImage';
import Guarantee from './components/Guarantee';
import Services from './components/Services';
import Service1 from './components/Service1';
import Card1 from './components/Card1'; 
import EnquiryForm from './components/EnquiryForm';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PrivateRoute from './components/private-route/PrivateRoute'
import Dashboard from './components/dashboard/Dashboard'

//check for token to keep user logged in
if(localStorage.jwtToken){
  //set auth token header auth
  const token = localStorage.jwtToken
  setAuthToken(token)
  //Decode token and get user info and exp
  const decoded = jwt_decode(token)
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  //check for expired token
  const currentTime = Date.now() / 1000 //to get in miliseconds
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser())

    //redirect to login
    window.location.href = "./login"
  }
}


class App extends Component {
  render() {
    return(
      <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <BookingForm />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component=
            {Dashboard} />
          </Switch>
        </div>
      </Router>
      </Provider>
    )
  }
=======
import React from 'react';
import './App.css';
import EnquiryForm from './components/EnquiryForm';
import ShowEnquiries from './components/ShowEnquiries';

function App() {
  return (
    <React.Fragment>
      <EnquiryForm />
      <ShowEnquiries />
    </React.Fragment>
  );
>>>>>>> 6b71172813f36b841f05bf4098b2fa87a550402c
}


// function App() {
//   return (
//     <React.Fragment>
//       <Router>
//       <Navbar />
//       <Landing />
//       </Router>
//       <BookingForm />

//       <Home />
//       <HeroImage />
//       <Service1 />

//       <Guarantee />
//       <EnquiryForm />
//       {/* <Card1 /> */}
//       {/* <Services /> */}

//     </React.Fragment>
//   );
// }

export default App;
