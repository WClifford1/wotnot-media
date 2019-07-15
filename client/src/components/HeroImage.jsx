import React from 'react'
import heroimg from '../images/heroimg.svg'

export default function HeroImage() {
    return (
        <React.Fragment>
            <div className="hero-banner">
                <div className="hero-pos">
                <img src={heroimg} className="heroimg" alt="hoohaa" />
                </div>
                <div className="text">
                <h1 className="catch-phrase">Lucrative, Innovative, Design Solutions</h1>
                <p className="catch-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eos numquam cupiditate asperiores odio consequuntur amet explicabo animi ut inventore, distinctio itaque iure nostrum eius ipsam esse eveniet eum quod!</p>
                </div>
            </div>
        </React.Fragment>
    )
}
