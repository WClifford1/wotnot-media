// import React, { Component } from 'react'
// import axios from 'axios'

// export default class BookingForm extends Component {
//     constructor(props){
//         super(props)

//         this.onChangeName = this.onChangeName.bind(this)
//         this.onChangeEmail = this.onChangeEmail.bind(this)
//         this.onChangePhone = this.onChangePhone.bind(this)
//         this.onChangeTime = this.onChangeTime.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
//         // this.onCancel = this.onCancel.bind(this)


//         this.state = {
//             name: '',
//             email: '',
//             phone: '',
//             time: ''
//         }
//     }

//     onChangeName(e) {
        
//         this.setState({
//             name: e.target.value
//         })
//     }

//     onChangeEmail(e) {
//         this.setState({
//             email: e.target.value
//         })
//     }

//     onChangePhone(e) {
//         this.setState({
//             phone: e.target.value
//         })
//     }

//     onChangeTime(e) {
//         this.setState({
//             time: e.target.value
//         })
//     }

//     onSubmit(e) {
//         e.preventDefault()

//         console.log(`Booking submitted: `)
//         console.log(`Name: ${this.state.name}`)
//         console.log(`Email: ${this.state.email}`)
//         console.log(`Phone: ${this.state.phone}`)
//         console.log(`Time: ${this.state.time}`)

//         const newBooking = {
//             name: this.state.name,
//             email: this.state.email,
//             phone: this.state.phone,
//             time: this.state.time

//         }
//         axios.post('http://localhost:4000/api/bookings', newBooking)
//         .then(res => console.log(res.data))

//         this.setState({
//             name: '',
//             email: '',
//             phone: '',
//             time:''
//         })
//     }

//     render(){
//         return (
//             <div style={{marginTop: 20}} >
//                 <h3>Booking Form</h3>

//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control"
//                         value={this.state.name}
//                         onChange={this.onChangeName} />
//                     </div>

//                     <div className="form-group">
//                         <label>Email</label>
//                         <input type="text" className="form-control"
//                         value={this.state.email}
//                         onChange={this.onChangeEmail} />
//                     </div>

//                     <div className="form-group">
//                         <label>Phone</label>
//                         <input type="text" className="form-control"
//                         value={this.state.phone}
//                         onChange={this.onChangePhone} />
//                     </div>

//                     <div className="form-group">
//                         <label>Time</label>
//                         <select>
//                             <option value="time" className="form-control"
//                             value={this.state.time}
//                             onChange={this.onChangeTime}>12:45</option>
//                         </select>
//                     </div>

//                     <div className="form-group">
//                         <input type="submit"
//                         value="Send Booking"
//                         ClassName="btn btn-primary" />
//                     </div>

//                 </form>

//             </div>
//         )
//     }
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
