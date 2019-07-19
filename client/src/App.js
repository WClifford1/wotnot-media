import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

// import BookingForm from './components/BookingForm';
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
import BookingForm from './components/BookingForm';
import Service2 from './components/Service2';
import HowWeHelp from './components/HowWeHelp';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

// class App extends Component {
//   render() {
//     return(
//       <Router>
//         <div className="App">
//           <Navbar />
//           <Route exact path="/" component={Landing} />
//           <Route exact path="/register" component={Register} />
//           <Route exact path="/login" component={Login} />
//         </div>
//       </Router>
//     )
//   }
// }


function App() {
  return (
    <React.Fragment>
      <Home />
      <Service2 />
      <HowWeHelp />
      <WhyUs /> 
      <BookingForm />
      <Footer />

      {/* <HeroImage /> */}

      {/* <Router> */}
      {/* <Navbar /> */}
      {/* <Landing /> */}
      {/* </Router> */}
      {/* <Service1 /> */}
      {/* <Guarantee /> */}
      {/* <EnquiryForm /> */}
      {/* <Card1 /> */}
      {/* <Services /> */}

    </React.Fragment>
  );
}

export default App;
