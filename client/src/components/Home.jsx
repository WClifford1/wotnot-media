<<<<<<< HEAD
import React from 'react';
import heroimg from '../images/blob-shape.svg';
import test from '../images/test.png';
import { Link } from 'react-router-dom';
import Service2 from './Service2';
import HowWeHelp from './HowWeHelp';
import WhyUs from './WhyUs';
import BookingForm from './BookingForm';

export default function Home() {
    return (
        <div className="nav-cont">
            {/* <div className="nav"> */}
                {/* <div className="back-img">
                <img src={test} alt=""/>
                </div> */}


                {/* <h2 className="logo">WotNot Media</h2>
                <ul className="nav-items">
                    <Link to="/services">
                    <li>Projects</li>
                    </Link>
                    <li><a className="hov" href="#serv-comp">Services</a></li>
                    <li><a className="hov" href="about.asp">FAQ</a></li>
                    <li><a className="hov" href="contact.asp">Contact</a></li>
                </ul>
            </div> */}

=======
import React from 'react'
import heroimg from '../images/blob-shape.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom'


export default function Home() {
    return (
        <Router>
        <div className="nav-cont">
            <div className="nav">
                <h2 className="logo">WotNot Media</h2>
                <ul className="nav-items">

                    <li><Link to="/" className="hov">Projects</Link></li>
                    <li><Link to="/service2" className="hov">Services</Link></li>
                    <li><a className="hov" href="about.asp">FAQ</a></li>
                    <li><a className="hov" href="contact.asp">Contact</a></li>
                </ul>
            </div>

            <div className="hero-image">
                <div className="hero-text">
                    <h1>Lucrative, Innovative, Design Solutions</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores sit voluptates optio odit nihil iusto est sint qui! Exercitationem delectus nihil alias praesentium iste maiores officiis quisquam repellat. Voluptates.</p>
                    <div className="hbtn-cont">
                        
                        <button Link to="/enquiryform" type="button" class="hero-btn">Enquire Today!</button> 
                    </div>
                </div>
                <img src={heroimg} className="blob" alt="hoohaa" />
            </div>
>>>>>>> dashboard

            <div className="hero-image">
                <div className="hero-text">
                    <h1>Lucrative, Innovative, Design Solutions</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores sit voluptates optio odit nihil iusto est sint qui! Exercitationem delectus nihil alias praesentium iste maiores officiis quisquam repellat. Voluptates.</p>
                    <div className="hbtn-cont">
                        <button type="button" class="hero-btn">Enquire Today!</button>
                    </div>
                </div>
                <img src={heroimg} className="blob" alt="hoohaa" />
            </div>

<<<<<<< HEAD
            <Service2 />
            <HowWeHelp />
            <WhyUs />
            {/* <BookingForm /> */}
        </div>
=======
        </div>
        </Router>
>>>>>>> dashboard
    )
}
