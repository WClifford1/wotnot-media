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
}

export default App;
