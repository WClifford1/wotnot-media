import React, { Component } from 'react'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'

export default class EnquiryForm extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangeEnquiry = this.onChangeEnquiry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            enquiry: '',
            errors : '',
            isVerified: false
        }
    }



    validate = () => {
        const errors = {}

        if (this.state.name.trim() === "")
        errors.name = "Name is required"

        return Object.keys(errors).length === 0 ? null : errors
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

    onChangeEnquiry(e) {
        this.setState({
            enquiry: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        if (this.state.isVerified) {
            alert('You have sent your enquiry')
        } else {
            alert('Please verify that you are human')
        }

        const errors = this.validate()
        console.log(errors)
        this.setState( { errors })
        if (errors) return

        console.log(`Form submitted:`)
        console.log(`Name: ${this.state.name}`)
        console.log(`Email: ${this.state.email}`)
        console.log(`Phone: ${this.state.phoneNumber}`)
        console.log(`Enquiry: ${this.state.enquiry}`)

        const newEnquiry = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            enquiry: this.state.enquiry
        }
        
        axios.post('http://localhost:4000/api/enquiries', newEnquiry)
            .then(res => console.log(res.data))

        this.setState({
            name: '',
            email: '',
            phoneNumber: '',
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
                        {/* <label><strong>Name: </strong></label> */}
                        <input type="text" className="form-control" placeholder="Name"
                        value={this.state.name} 
                        onChange={this.onChangeName} />
                    </div>

                    <div className="form-group">
                        {/* <label><strong>Email: </strong></label> */}
                        <input type="text" className="form-control" placeholder="Email"
                        value={this.state.email} 
                        onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
                        {/* <label><strong>Phone: </strong></label> */}
                        <input type="text" className="form-control" placeholder="Phone"
                        value={this.state.phone} 
                        onChange={this.onChangePhone} />
                    </div>

                    <div className="form-group">
                        {/* <label><strong>Enquiry: </strong></label> */}
                        <textarea type="text" className="form-control" placeholder="Enquiry"
                        value={this.state.enquiry} 
                        onChange={this.onChangeEnquiry} />
                    </div>

                    <div className="form-group">
                        <input type="submit" 
                        value="Send Enquiry" 
                        className="btn btn-primary" />
                    </div>
                    {/* <Recaptcha
                        sitekey="xxxxxxxxxxxxxxxxxxxx"
                        render="explicit"
                        onloadCallback={callback}
                    /> */}
                </form>
                </div>
            </div>
        )
    }
}

