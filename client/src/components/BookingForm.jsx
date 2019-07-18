import React, { Component } from 'react'
import api from '../utils/api'

export default class BookingForm extends Component {
    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangetimeOfBooking = this.onChangetimeOfBooking.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.onCancel = this.onCancel.bind(this)


        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            timeOfBooking: ''
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

    onChangePhoneNumber(e) {
        if (!isNaN(e.target.value)){
        this.setState({

            phoneNumber: e.target.value
        })
    }
    }

    onChangetimeOfBooking(e) {
        this.setState({
            timeOfBooking: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        console.log(`Booking submitted: `)
        console.log(`Name: ${this.state.name}`)
        console.log(`Email: ${this.state.email}`)
        console.log(`Phone: ${this.state.phoneNumber}`)
        console.log(`timeOfBooking: ${this.state.timeOfBooking}`)

        const newBooking = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            timeOfBooking: this.state.timeOfBooking

        }
        api
        .post('/bookings', newBooking)
        .then(res => console.log(res.data))

        this.setState({
            name: '',
            email: '',
            phoneNumber: '',
            timeOfBooking:''
        })
    }

    render(){
        return (
            <div style={{marginTop: 20}} >
                <h3>Booking Form</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control"
                        value={this.state.phoneNumber}
                        onChange={this.onChangePhoneNumber} />
                    </div>

                    <div className="form-group">
                        <label>timeOfBooking</label>
                        
                        <input type="text" className="form-control"
                         
                            value={this.state.timeOfBooking}
                            onChange={this.onChangetimeOfBooking}
                            
                             />
                             
                            
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit"
                        value="Send Booking"
                        className="btn btn-primary" />
                    </div>

                </form>

            </div>
        )
    }
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// export default function DateAndtimeOfBookingPickers() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="datetimeOfBooking-local"
//         label="Next appointment"
//         type="datetimeOfBooking-local"
//         defaultValue="2017-05-24T10:30"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }
