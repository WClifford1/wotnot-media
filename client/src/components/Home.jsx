import React from 'react'
import heroimg from '../images/blob-shape.svg'


export default function Home() {
    return (
        <div className="nav-cont">
            <div className="nav">
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
                    <h2>Lucrative, Innovative, Design Solutions</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores sit voluptates optio odit nihil iusto est sint qui! Exercitationem delectus nihil alias praesentium iste maiores officiis quisquam repellat. Voluptates.</p>
                </div>
                <img src={heroimg} className="blob" alt="hoohaa" />
            </div>


        </div>
    )
}
