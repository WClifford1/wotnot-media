import React, { Component } from 'react'
import api from '../utils/api'

export default class ShowBooking extends Component {
    state = {
        bookings: []
    }

    componentDidMount() {
        api.get('/bookings')
        .then(res => {
            
            this.setState({ bookings: res.data})
        })
       
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.bookings.map(booking => <li key={booking._id}>{booking.name}</li>)} 
                </ul>
                    <ul>
                        {this.state.bookings.map(booking => <li key={booking._id}>{booking.email}</li>)}
                    </ul>
                    <ul>
                        {this.state.bookings.map(booking => <li key={booking._id}>{booking.phoneNumber}</li>)}
                    </ul>
                    <ul>
                        {this.state.bookings.map(booking => <li key={booking._id}>{booking.timeOfBooking}</li>)}
                    </ul>
            </div>
        )
    }
}