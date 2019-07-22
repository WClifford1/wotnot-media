import React from 'react'
import brochure from '../images/brochure.svg'


export default function Card1() {
    return (
        <div className="card-container">
            <h2 className="card-title">Services</h2>
        <div className="card-cont">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={brochure} alt="Avatar" style={{backgroundColor:"rgb(247, 199, 88)", width: "300px", height: "300px" }} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={brochure} alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={brochure} alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
