import React from 'react'
import map from '../images/map.jpg'

export default function ServicePage() {
    return (
        <div>
            <div className="servp-title">
            <h1>Services</h1>
            </div>
            <div className="serv-offered">
          
            <div className="serv-1">
                <div className="serv1-img">
                <img src={map} alt=""/>
                </div>
                <div className="serv1-text">
                    <h5>Photography</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corporis.</p>
                </div>
            </div>

            <div className="serv-2">
                <div className="serv2-img">
                <img src={map} alt=""/>
                </div>
                <div className="serv2-text">
                    <h5>Photography</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corporis.</p>
                </div>
            </div>

            <div className="serv-3">
                <div className="serv3-img">
                <img src={map} alt=""/>
                </div>
                <div className="serv3-text">
                    <h5>Photography</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corporis.</p>
                </div>
            </div>

            </div>
        </div>
    )
}
