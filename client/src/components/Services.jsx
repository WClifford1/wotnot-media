import React from 'react'

export default function Services() {
    return (
        <React.Fragment>
        <div className="service-title">
            <h1>Services</h1>
        </div>
        <div className="services-cont">
            <div className="service">
            <h2>Brochures</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam necessitatibus, qui nemo molestias iste fuga dolores aperiam odio. Exercitationem.</p>
            <a href="#"><strong>More about brochures    </strong><i class="fas fa-long-arrow-alt-right fa-lg"></i></a>
            </div>
            {/* <i class="fas fa-grip-lines-vertical fa-5x"></i> */}
            <div className="service">
            <h2>Flyers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum corporis perspiciatis ipsam doloribus iusto omnis earum, recusandae dolor debitis.</p>
            <a href="#"><strong>Mores about flyers    </strong><i class="fas fa-long-arrow-alt-right fa-lg"></i></a>
            </div>
            {/* <i class="fas fa-grip-lines-vertical fa-5x"></i> */}
            <div className="service">
            <h2>Pamplets</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus qui sed velit eius corrupti perspiciatis excepturi? Mollitia, esse ?</p>
            <a href="#"><strong>More about pamplets    </strong><i class="fas fa-long-arrow-alt-right fa-lg"></i></a>
            </div>
        </div>
        </React.Fragment>
    )
}
