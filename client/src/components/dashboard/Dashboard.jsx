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
                <table>
                    <tr>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Phone Number:</th>
                        <th>Time of Booking:</th>
                    </tr>
                    <tr>
                        {this.state.bookings.map(booking => <td>{booking.name}</td>)}
                        {this.state.bookings.map(booking => <td>{booking.email}</td>)}
                        {this.state.bookings.map(booking => <td>{booking.phoneNumber}</td>)}
                        {this.state.bookings.map(booking => <td>{booking.timeOfBooking}</td>)}
                    </tr>
                </table>
                
            </div>
        )
    }
}