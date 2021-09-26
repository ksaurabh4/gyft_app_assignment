import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselHome" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carousel-item-left">
                    <img className="w-100 d-none d-md-block" src="images/banner.jpg" alt="First slide" />
                    <img className="w-100 d-block d-md-none " src="images/mobile-banner.jpg" alt="First slide" />
                </div>
                <div className="carousel-item carousel-item-next carousel-item-left">
                    <img className="w-100 d-none d-md-block" src="images/banner.jpg" alt="First slide" />
                    <img className="w-100 d-block d-md-none" src="images/mobile-banner.jpg" alt="First slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}
