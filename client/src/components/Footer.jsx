import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className="footer-cont">
                <div className="footer-logo">
                <h2>Wotnot-Media</h2>
                </div>
                <div className="footer-res1">
                    <div className="footer-title1">
                        <h3>Services</h3>
                    </div>
                    <div className="footer-links1">
                        <li>Video Content</li>
                        <li>Web Design</li>
                        <li>Photography</li>
                    </div>
                </div>

                <div className="footer-res2">
                    <div className="footer-title2">
                        <h3>Information</h3>
                    </div>
                    <div className="footer-links2">
                        <li><Link to="/Faq">FAQ</Link></li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li><Link to="/contact">Contact Information</Link></li>
                    </div>
                </div>

                <div className="footer-res3">
                    <div className="footer-title3">
                        <h3>Get Started</h3>
                    </div>
                    <div className="footer-links3">
                        <li><Link to="/enquiry">Enquiry</Link></li>
                        <li>Booking</li>
                    </div>
                </div>


            </div>
        </div>
    )
}
