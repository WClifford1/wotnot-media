import React from 'react';
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


function App() {
  return (
    <React.Fragment>

      <BookingForm />

      <Home />
      <HeroImage />
      <Service1 />

      <Guarantee />
      <EnquiryForm />
      {/* <Card1 /> */}
      {/* <Services /> */}

    </React.Fragment>
  );
}

export default App;
