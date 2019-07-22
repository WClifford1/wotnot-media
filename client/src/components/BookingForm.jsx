import React, { Component } from 'react'
import axios from 'axios'

export default class BookingForm extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangeTime = this.onChangeTime.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.onCancel = this.onCancel.bind(this)


        this.state = {
            name: '',
            email: '',
            phone: '',
            time: ''
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

    onChangeTime(e) {
        this.setState({
            time: e.target.value
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
            phone: this.state.phone,
            time: this.state.time

        }
        axios.post('http://localhost:4000/api/bookings', newBooking)
            .then(res => console.log(res.data))

        this.setState({
            name: '',
            email: '',
            phone: '',
            time: ''
        })
    }

    render() {
        return (
            <div className="book-cont">
                <div className="book-title">
                    <h3>Booking Form</h3>
                </div>

                <div className="book-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="book-text">
                            <label><strong>Name :</strong></label>
                        </div>
                        <div className="book-input">
                            <input type="text" className="book-control"
                                value={this.state.name}
                                onChange={this.onChangeName} />
                        </div>


                        <div className="book-text">
                            <label><strong>Email :</strong></label>
                        </div>
                        <div className="book-input">
                            <input type="text" className="book-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail} />
                        </div>

                        <div className="book-text">
                            <label><strong>Phone :</strong></label>
                        </div>
                        <div className="book-input">
                            <input type="text" className="book-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone} />
                        </div>

                        <div className="book-text">
                            <label><strong>Time :</strong></label>
                        </div>
                        <div className="book-select">
                            <select>
                                <option value="time" className="book-control"
                                    value={this.state.time}
                                    onChange={this.onChangeTime}>12:45</option>
                            </select>
                        </div>

                        <div className="book-btn">
                            <input type="submit"
                                value="Confirm Booking"
                                className="book-sub" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}