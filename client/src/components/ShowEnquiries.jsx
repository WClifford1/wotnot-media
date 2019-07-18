import React, { Component } from 'react'
import axios from 'axios'


export default class ShowEnquiries extends Component {

    state = {
        enquiries: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/enquiries')
        .then(res => {
            this.setState({ enquiries: res.data})
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.enquiries.map(enquiry => <li>{enquiry.name}</li>)}
                </ul>
            </div>
        )
    }
}
