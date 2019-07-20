import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar1() {
    return (
        <div className="nav-cont">
            <div className="nav">
                {/* <div className="back-img">
                <img src={test} alt=""/>
                </div> */}
                
                <h2 className="logo"><Link to="/">WotNot Media</Link></h2>
                <ul className="nav-items">
                    <li><Link to="/services">
                    Projects
                    </Link></li>
                    <li><a className="hov" href="#serv-comp"><Link to="">Services</Link></a></li>
                    <li><a className="hov" href="about.asp">FAQ</a></li>
                    <li><a className="hov" href="contact.asp">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}