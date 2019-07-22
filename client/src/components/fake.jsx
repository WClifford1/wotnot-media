import React from 'react'
import BookingForm from './BookingForm';

export default function Contact() {
    return (
        <div>
            <div className="contact-title">
                <h1>Contact Us</h1>
                <h2>We'd love to hear from you!</h2>
            </div>
            <div className="contact-form">
                <BookingForm />
            </div>
            <div className="contact-details">
                <div className="cont-name">
                    <h3>Name: Steve Worby</h3>
                </div>
                <div className="cont-email">
                    <h3>Email: wotnotmedia@gmail.com</h3>
                </div>
                <div className="cont-work">
                    <h3>Work Num: 1300 393 851</h3>
                </div>
                <div className="cont-mobil">
                    <h3>Mobile: +61 404 698 115 </h3>
                </div>
            </div>
        </div>
    )
}
