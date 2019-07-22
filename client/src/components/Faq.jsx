import React, { Component } from 'react'

export default class Faq extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this);


        this.state = {
            toggle: false
        }
    }


    onClick(button) {
        // button.addEventListener('click', () => {
            this.setState( {
                toggle: !this.state.toggle
            })
            // classList.toggle('accordion__button--active')
        
    }

    render() {
        return (
            <div className="question-cont">
                <h1>Frequently Asked Questions</h1>
                <div className="accordion">
                    <button type="button" className={ this.state.toggle ? "accordion__button" : "accordion__button--active"} onClick={this.onClick}>Expand Content</button>
                    <div className="accordion__content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque, tempora totam obcaecati odit expedita vero sunt nobis placeat? Natus?
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}
