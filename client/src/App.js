import React from 'react';
import './App.css';
// import EnquiryForm from './components/EnquiryForm';
import Home from './components/Home';
import HeroImage from './components/HeroImage';
import Card from './components/Card';
import Guarantee from './components/Guarantee';

function App() {
  return (
    <React.Fragment>
      <Home />
      <HeroImage />
      <Guarantee />
      <Card />

    </React.Fragment>
  );
}

export default App;
