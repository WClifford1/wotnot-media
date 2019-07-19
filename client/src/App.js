import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import EnquiryForm from './components/EnquiryForm';
import ShowEnquiries from './components/ShowEnquiries';
import ShowBooking from './components/ShowBooking'
import BookingForm from './components/BookingForm'
import Home from './components/Home'

function App() {
  return (
    <Router>
  {/* <p>foo</p>       */}
      {/* <EnquiryForm /> */}
      {/* <ShowEnquiries /> */}
      {/* <BookingForm />
      <ShowBooking /> */}
      <Route path="/" component={Home} />
    
    </Router>
  );
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
