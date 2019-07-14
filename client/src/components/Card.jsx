import React from 'react'
import brochure from '../images/brochure.png'

export default function Card() {
    return (
        <React.Fragment>
            <div className="card-header">
                <h1>Services</h1>
            </div>
            <div id="card-services">
                <div class="card1">
                    <img src={brochure} alt="" />
                    <div class="card-cont1">
                        <h4>Flyers</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio architecto fugit! Consectetur, modi impedit corporis et doloribus sit excepturi ab tempora, cupiditate, cumque reprehenderit? Totam voluptate ab a at soluta voluptatem excepturi aliquid eos laudantium voluptas. Vitae, nostrum nobis.</p>
                        <div className="card-button">
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    <div class="card-cont2">
                        <h4>Brochures</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio architecto fugit! Consectetur, modi impedit corporis et doloribus sit excepturi ab tempora, cupiditate, cumque reprehenderit? Totam voluptate ab a at soluta voluptatem excepturi aliquid eos laudantium voluptas. Vitae, nostrum nobis.</p>
                        <div className="card-button">
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
                <div class="card3">
                    <div class="card-cont3">

                        <h4>Pamplets</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio architecto fugit! Consectetur, modi impedit corporis et doloribus sit excepturi ab tempora, cupiditate, cumque reprehenderit? Totam voluptate ab a at soluta voluptatem excepturi aliquid eos laudantium voluptas. Vitae, nostrum nobis.</p>
                        <div className="card-button">
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
