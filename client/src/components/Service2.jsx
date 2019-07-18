import React from 'react'

export default function Service2() {
    return (
        <React.Fragment>
        <h1 className="serves-title">Services</h1>

        <div className="serves-cont">
            <div className="serves1">
                <i className="fas fa-camera fa-5x" aria-hidden="true"></i>
                <div className="serves1-text">
                    <h3>Photography</h3>
                </div>
            </div>
            <div className="serves2">
                <i className="fas fa-video fa-5x" aria-hidden="true"></i>
                <div className="serves2-text">
                    <h3>Video Content</h3>
                </div>
            </div>
            <div className="serves3">
                <i className="fab fa-internet-explorer fa-5x" aria-hidden="true"></i>
                <div className="serves3-text">
                    <h3>Web Design</h3>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
