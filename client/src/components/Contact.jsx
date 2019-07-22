import React, { Component } from 'react'
import axios from 'axios'
import map from '../images/map.jpg'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.onCancel = this.onCancel.bind(this)


        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        console.log(`Booking submitted: `)
        console.log(`Name: ${this.state.name}`)
        console.log(`Email: ${this.state.email}`)
        console.log(`Phone: ${this.state.phone}`)
        console.log(`Time: ${this.state.time}`)

        const newBooking = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }
        axios.post('http://localhost:4000/api/bookings', newBooking)
            .then(res => console.log(res.data))

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    render() {
        return (
            <div className="contact-cont">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <h2>We'd love to hear from you!</h2>
                </div>
              

                <div className="contact-page">
                <div className="contact-form">
                <div className="contact-title">
                    <h2>Contact Form</h2>
                </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="contact-text">
                            <label><strong>Name :</strong></label>
                        </div>
                        <div className="contact-input">
                            <input type="text" className="contact-control"
                                value={this.state.name}
                                onChange={this.onChangeName} />
                        </div>


                        <div className="contact-text">
                            <label><strong>Email :</strong></label>
                        </div>
                        <div className="contact-input">
                            <input type="text" className="contact-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail} />
                        </div>

                        <div className="contact-text">
                            <label><strong>Phone :</strong></label>
                        </div>
                        <div className="contact-input">
                            <input type="text" className="contact-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone} />
                        </div>

                        <div className="contact-btn">
                            <input type="submit"
                                value="Confirm Booking"
                                className="contact-sub" />
                        </div>
                    </form>
                </div>

            <div className="contact-details">
                <div className="contact-card">
                <img src={map} alt="Map location"/>
                <div className="admin-details">
                <div className="cont-name">
                    <h5>Name: Steve Worby</h5>
                </div>
                <div className="cont-email">
                    <h5>Email: wotnotmedia@gmail.com</h5>
                </div>
                <div className="cont-work">
                    <h5>Work Num: 1300 393 851</h5>
                </div>
                <div className="cont-mobil">
                    <h5>Mobile: +61 404 698 115 </h5>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}