import React from 'react'
import heroimg from '../images/blob-shape.svg'
import test from '../images/test.png'

export default function Home() {
    return (
        <div className="nav-cont">
            <div className="nav">
                {/* <div className="back-img">
                <img src={test} alt=""/>
                </div> */}
                <h2 className="logo">WotNot Media</h2>
                <ul className="nav-items">
                    <li><a className="hov" href="default.asp">Projects</a></li>
                    <li><a className="hov" href="#serv-comp">Services</a></li>
                    <li><a className="hov" href="about.asp">FAQ</a></li>
                    <li><a className="hov" href="contact.asp">Contact</a></li>
                </ul>
            </div>

            <div className="hero-image">
                <div className="hero-text">
                    <h1>Lucrative, Innovative, Design Solutions</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores sit voluptates optio odit nihil iusto est sint qui! Exercitationem delectus nihil alias praesentium iste maiores officiis quisquam repellat. Voluptates.</p>
                    <div className="hbtn-cont">
                        <button type="button" class="hero-btn">Enquire Today!</button>
                    </div>
                </div>
                <img src={heroimg} className="blob" alt="hoohaa" />
            </div>


        </div>
    )
}
