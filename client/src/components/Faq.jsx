import React, { Component } from 'react'

export default class Faq extends Component {
       

    onClick (button) {
        document.querySelector('accordion__button').forEach(button => {
            button.classList.toggle('accordion__button--active')    
        })
    }


    render() {
    return (
        <div className="question-cont">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion">
                <button type="button" className="accordion__button" onClick={this.onClick}>Expand Content</button>
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
