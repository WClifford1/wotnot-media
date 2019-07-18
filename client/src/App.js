import React from 'react';
import './App.css';
import EnquiryForm from './components/EnquiryForm';
import ShowEnquiries from './components/ShowEnquiries';
import ShowBooking from './components/ShowBooking'
import BookingForm from './components/BookingForm'

function App() {
  return (
    <React.Fragment>
      {/* <EnquiryForm /> */}
      {/* <ShowEnquiries /> */}
      <BookingForm />
      <ShowBooking />
    </React.Fragment>
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
