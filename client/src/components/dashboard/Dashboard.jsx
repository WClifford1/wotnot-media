import React, { Component } from 'react'
import api from '../../utils/api'
export default class Dashboard extends Component {
    state = {
        bookings: []
    }
    componentDidMount(){
        api.get('/bookings')
        .then(res => {
            this.setState({ bookings: res.data})
        })
    }

    render(){
        return (
            <div>
                <table style="width: 100%">
                    <tr>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Phone Number:</th>
                        <th>Time of Booking:</th>
                    </tr>
                    <tr>
                        <td>{this.state.bookings.map(booking => {booking.name})}</td>
                        <td>{this.state.bookings.map(booking => {booking.email})}</td>
                        <td>{this.state.bookings.map(booking => {booking.phoneNumber})}</td>
                        <td>{this.state.bookings.map(booking => {booking.timOfBooking})}</td>
                    </tr>
                </table>
                
            </div>
        )
    }
}