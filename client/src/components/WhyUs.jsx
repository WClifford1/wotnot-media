import React from 'react'
import prog from '../images/prog.svg'
import revision from '../images/revisions.svg'
import color from '../images/color.svg'

export default function WhyUs() {
    return (
        <div className="wu">
        <div className="whyus-outer">
            <div className="whyus-cont">
                <div className="wu-icons">
                    <img src={prog} className="blob" alt="hoohaa" />                    
                    <div className="wu-text">
                        <h3>Dedicated Graphics Application</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatum?</p>
                    </div>
                </div>

                <div className="wu-icons">
                    {/* <i className="fas fa-video fa-3x" aria-hidden="true"></i> */}
                    <img src={revision} className="blob" alt="hoohaa" />                    
                    <div className="wu-text">
                        <h3>Unlimited Revisions</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatum?</p>
                    </div>
                </div>

                <div className="wu-icons">
                    {/* <i className="fas fa-video fa-3x" aria-hidden="true"></i> */}
                    <img src={color} className="blob" alt="hoohaa" />                    
                    <div className="wu-text">
                        <h3>Color Theory</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptatum?</p>
                    </div>
                </div>
            </div>
        </div>
        </div>  
    )
}
