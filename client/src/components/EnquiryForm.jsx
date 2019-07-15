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
                    <div className="form-text">
                        <label><strong>Name <span style={{color:"red"}}>*</span> : </strong></label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Insert your name here"
                        value={this.state.name} 
                        onChange={this.onChangeName} />
                    </div>
                    
                    <div className="form-text">
                    <label><strong>Email <span style={{color: "red"}}>*</span> : </strong></label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Insert your email here"
                        value={this.state.email} 
                        onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-text">
                        <label><strong>Phone : </strong></label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Insert your phone number here"
                        value={this.state.phone} 
                        onChange={this.onChangePhone} />
                    </div>
                    <div className="form-text">
                        <label><strong>Enquiry <span style={{color:"red"}}>*</span> : </strong></label>
                    </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" placeholder="Insert your query here"
                        value={this.state.enquiry} 
                        onChange={this.onChangeEnquiry} />
                    </div>

                    <div className="form-btn">
                        <input type="submit" 
                        value="Send Enquiry" 
                        className="enq-btn" />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}


