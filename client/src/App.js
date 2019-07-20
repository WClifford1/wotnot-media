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
import HowWeHelp from './components/HowWeHelp';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import { Switch, Route } from 'react-router-dom';
import Faq from './components/Faq';
import Contact from './components/Contact';

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
      {/* <div> */}
      {/* <Home /> */}
      <Navbar1 />
      {/* <Home /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Service1} />
        <Route path="/projects" component={Card1} />
        <Route path="/FAQ" component={Faq} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />

      {/* </div> */}

  

    </React.Fragment>
  );
}

export default App;
