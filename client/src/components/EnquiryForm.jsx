import React, { Component } from 'react'
import axios from 'axios'

export default class EnquiryForm extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangeEnquiry = this.onChangeEnquiry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        
        this.state = {
            name: '',
            email: '',
            phone: '',
            enquiry: ''
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

    onChangeEnquiry(e) {
        this.setState({
            enquiry: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        console.log(`Form submitted:`)
        console.log(`Name: ${this.state.name}`)
        console.log(`Email: ${this.state.email}`)
        console.log(`Phone: ${this.state.phone}`)
        console.log(`Enquiry: ${this.state.enquiry}`)

        const newEnquiry = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            enquiry: this.state.enquiry
        }
        
        axios.post('http://localhost:4000/api/enquiries', newEnquiry)
            .then(res => console.log(res.data))

        this.setState({
            name: '',
            email: '',
            phone: '',
            enquiry: ''
        })
    }

    render() {
        return (
            <div className="enq-cont">
                <div className="enq-title">
                <h3>Enquiry Form</h3>
                </div>
                
                <div className="enq-form">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
<<<<<<< HEAD
                        {/* <label><strong>Name: </strong></label> */}
                        <input type="text" className="form-control" placeholder="Name"
                        value={this.state.name} 
=======
                        <label>Name</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.name}
>>>>>>> 6b71172813f36b841f05bf4098b2fa87a550402c
                        onChange={this.onChangeName} />
                    </div>

                    <div className="form-group">
<<<<<<< HEAD
                        {/* <label><strong>Email: </strong></label> */}
                        <input type="text" className="form-control" placeholder="Email"
                        value={this.state.email} 
=======
                        <label>Email</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.email}
>>>>>>> 6b71172813f36b841f05bf4098b2fa87a550402c
                        onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
<<<<<<< HEAD
                        {/* <label><strong>Phone: </strong></label> */}
                        <input type="text" className="form-control" placeholder="Phone"
                        value={this.state.phone} 
=======
                        <label>Phone</label>
                        <input type="text"
                        value={this.state.phone}
                        className="form-control"
>>>>>>> 6b71172813f36b841f05bf4098b2fa87a550402c
                        onChange={this.onChangePhone} />
                    </div>

                    <div className="form-group">
<<<<<<< HEAD
                        {/* <label><strong>Enquiry: </strong></label> */}
                        <textarea type="text" className="form-control" placeholder="Enquiry"
                        value={this.state.enquiry} 
=======
                        <label>Enquiry</label>
                        <textarea type="text"
                        className="form-control"
                        value={this.state.enquiry}
>>>>>>> 6b71172813f36b841f05bf4098b2fa87a550402c
                        onChange={this.onChangeEnquiry} />
                    </div>

                    <div className="form-group">
                        <input type="submit" 
                        value="Send Enquiry" 
                        className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}


