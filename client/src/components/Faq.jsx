import React from 'react'

export default function Faq() {
    return (
        <div className="question-cont">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion">
                <button type="button" className="accordion__button">Expand Content</button>
                <div className="accordion__content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque, tempora totam obcaecati odit expedita vero sunt nobis placeat? Natus?
                    </p>
                </div>
            </div>
        </div>
    )
}
