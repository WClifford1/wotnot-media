import React from 'react';
import Service1 from './components/Service1';
import Home from './components/Home';

import { shallow } from 'enzyme'


// Service 1 
describe('<Service1 />', () => {
  it('Has a services heading', () => {
    const wrapper = shallow(<Service1 />);
    const welcome = <h1>Services</h1>
    expect(wrapper.contains(welcome)).toEqual(true);
  });
  
  it('renders a `.serv-title`', () => {
    const wrapper = shallow(<Service1 />);
    expect(wrapper.find('.serv-title')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Service1>
        <div className="serv-cont" />
      </Service1>
    ));
    expect(wrapper.contains(<div className="serv-cont" />)).to.equal(true);
  });
});

// Home 
describe('<Home />', () => {
  it('Has a Home heading', () => {
    const wrapper = shallow(<Home />);
    const welcome = <h1 className="logo">WotNot Media</h1>
    expect(wrapper.contains(welcome)).toEqual(true);
  });
  
  it('renders a `.serv-title`', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.serv-title')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Home>
        <div className="serv-cont" />
      </Home>
    ));
    expect(wrapper.contains(<div className="serv-cont" />)).to.equal(true);
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