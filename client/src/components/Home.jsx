import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'

export default function Home() {
    return (
        
        
            <div className="nav">
                <h1 className="logo">WotNot Media</h1>
                <ul className="nav-items">
                    
                    <li><Link to="/projects" className="hov">Projects</Link></li> 
                    <li><Link to="/services" className="hov">Services</Link></li>
                    <li><Link to="/faq" className="hov">FAQ</Link></li>
                    <li><Link to="/contact" className="hov">Contact</Link></li>
                </ul>

                
            </div>   
           
    )
}
