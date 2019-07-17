import React from 'react';
import Service1 from './components/Service1';
import Home from './components/Home';
// import HeroImage from './components/HeroImage';
import Guarantee from './components/Guarantee';
import EnquiryForm from './components/EnquiryForm';
import BookingForm from './components/BookingForm';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import { expect } from 'chai'

import { shallow, mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

// Service 1 
describe('<Service1 />', () => {
  it('Has a services heading', () => {
    const wrapper = mount(<Service1 />);
    const welcome = <h1>Services</h1>
    expect(wrapper.contains(welcome)).to.equal(true);
  });
  
  it('Has a service offered title', () => {
    const wrapper = mount(<Service1 />);
    const welcome1 = <h2>Photography</h2>
    expect(wrapper.contains(welcome1)).to.equal(true);
  });

  it('Has a list of services', () => {
    const wrapper = mount(<Service1 />);
    const welcome2 = <li><i className="fas fa-check"></i>Lorem ipsum dolor sit.</li>
    expect(wrapper.contains(welcome2)).to.equal(true);
  });

  // it('renders children when passed in', () => {
  //   const wrapper = mount((
  //     <Service1>
  //       <div className="serv-cont" />
  //     </Service1>
  //   ));
  //   expect(wrapper.contains(<div className="serv-cont" />)).to.equal(true);
  // });
});

// Home 
describe('<Home />', () => {
  it('Has a Home heading', () => {
    const wrapper = mount(<Home />);
    const welcome = <h1 className="logo">WotNot Media</h1>
    expect(wrapper.contains(welcome)).to.equal(true);
  });

  it('renders a ul', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.nav-items')).to.have.lengthOf(1);
  });

  it('Has a Home heading', () => {
    const wrapper = mount(<Home />);
    const navbar = <li><a className="hov" href="default.asp">Projects</a></li>
    expect(wrapper.contains(navbar)).to.equal(true);
  });

  // it('Has a Home heading', () => {
  //   const wrapper = mount(<Home />);
  //   const navbar = <ul className="nav-items">
  //   expect(wrapper.contains(navbar)).to.equal(true);
  // });

 
});

// HeroImage 
// describe('<HeroImage />', () => {
//   it('Has a HeroImage heading', () => {
//     const wrapper = mount(<HeroImage />);
//     const welcome = <h1 className="catch-phrase">Lucrative, Innovative, Design Solutions</h1>
//     expect(wrapper.contains(welcome)).toEqual(true);
//   });
  
//   it('renders a `.hero-pos`', () => {
//     const wrapper = shallow(<HeroImage />);
//     expect(wrapper.find('.hero-pos')).to.have.lengthOf(1);
//   });

//   it('renders children when passed in', () => {
//     const wrapper = shallow((
//       <HeroImage>
//         <div className="hero-banner" />
//       </HeroImage>
//     ));
//     expect(wrapper.contains(<div className="hero-banner" />)).to.equal(true);
//   });
// });


// Guarantee  
describe('<Guarantee />', () => {
  it('Has a Guarantee heading', () => {
    const wrapper = shallow(<Guarantee />);
    const welcome = <h2>Delivering tailor made, custom design oriented graphics to your liking</h2>
    expect(wrapper.contains(welcome)).to.equal(true);
  });
  
  it('renders a `.guar-icons`', () => {
    const wrapper = shallow(<Guarantee />);
    expect(wrapper.find('.guar-icons')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Guarantee>
        <div className="guar-container" />
      </Guarantee>
    ));
    expect(wrapper.contains(<div className="guar-container" />)).to.equal(true);
  });
});

// Enquiry  
describe('<EnquiryForm />', () => {
  it('Has a EnquiryForm heading', () => {
    const wrapper = shallow(<EnquiryForm />);
    const welcome = <h3>Enquiry Form</h3>
    expect(wrapper.contains(welcome)).to.equal(true);
  });
  
  it('renders a `.form-text`', () => {
    const wrapper = shallow(<EnquiryForm />);
    expect(wrapper.find('.form-text')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <EnquiryForm>
        <div className="enq-cont" />
      </EnquiryForm>
    ));
    expect(wrapper.contains(<div className="enq-cont" />)).to.equal(true);
  });
});

// BookingForm  
describe('<BookingForm />', () => {
  it('Has a BookingForm heading', () => {
    const wrapper = shallow(<BookingForm />);
    const welcome = <h3>Booking Form</h3>
    expect(wrapper.contains(welcome)).to.equal(true);
  });
  
  it('renders a `.book-form`', () => {
    const wrapper = shallow(<BookingForm />);
    expect(wrapper.find('.book-form')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <BookingForm>
        <div className="book-cont" />
      </BookingForm>
    ));
    expect(wrapper.contains(<div className="book-cont" />)).to.equal(true);
  });
});




// it('renders without crashing', () => {
//   const wrapper = shallow(<App />);
  
// });


// function Button(props) {
//   return <button>Nothing to do for now</button>;
// }
// describe("Button component", () => {
//   test("Matches the snapshot", () => {
//     const button = create(<Button />);
//     expect(button.toJSON()).toMatchSnapshot();
//   });
// });