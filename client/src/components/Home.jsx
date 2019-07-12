import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="nav">
                <h1 className="logo" style={{ color:"rgb(46, 45, 45)"}}>WotNot Media</h1>
                <ul className="nav-items">
                    <li><a className="hov" href="default.asp">Projects</a></li>
                    <li><a className="hov" href="news.asp">Services</a></li>
                    <li><a className="hov" href="about.asp">FAQ</a></li>
                    <li><a className="hov" href="contact.asp">Contact</a></li>
                </ul>
            </div>
            <hr/>
        </div>
    )
}
