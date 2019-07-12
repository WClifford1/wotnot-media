import React from 'react';
import './App.css';
import Index from './components/Index';
// import Nav from './components/Not';
import Not from './components/Not';
import Hero from './components/Hero'

function App() {
  return (
    <React.Fragment>
      <Not />
      <Hero />
    </React.Fragment>
  );
}

export default App;
