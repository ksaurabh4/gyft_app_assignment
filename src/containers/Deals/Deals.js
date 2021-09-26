import React from 'react'

export default function Deals() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3 p-3 pr-md-0">
                    <div className="p-3 shadow-sm border rounded">
                        <div>
                            <h3 className="h4 fw-700 text-uppercase m-0">Deal of the day</h3>
                            <p className="fs-12 mb-2">Amazing Deals from choicest brands!</p>
                        </div>
                        <div className="shadow-sm mb-3">
                            <a href="NoPage">
                                <img src="images/deals.jpg" alt="deals" className="w-100" />
                            </a>
                        </div>
                        <div className="text-right">
                            <a href="NoPage" className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <div className="p-3 shadow-sm border rounded">
                        <div>
                            <h3 className="h4 fw-700 text-uppercase m-0">Offers</h3>
                            <p className="fs-14 mb-2">Top discounts &amp; deals on leading brands!</p>
                        </div>
                        <div className="shadow-sm mb-3">
                            <a href="NoPage">
                                <img src="images/offers-1.jpg" alt="offers-1" className="w-100" />
                            </a>
                        </div>
                        <div className="shadow-sm mb-3">
                            <a href="NoPage">
                                <img src="images/offers-2.jpg" alt="offers-1" className="w-100" />
                            </a>
                        </div>
                        <div className="text-right">
                            <a href="NoPage" className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 p-3 pl-md-0">
                    <div className="p-3 shadow-sm border rounded">
                        <div>
                            <h3 className="h4 fw-700 text-uppercase m-0">discounts</h3>
                            <p className="fs-12 mb-2">Buy fast moving brands just for you</p>
                        </div>
                        <div className="shadow-sm mb-3">
                            <a href="NoPage">
                                <img src="images/discount.jpg" alt="dicount" className="w-100" />
                            </a>
                        </div>
                        <div className="text-right">
                            <a href="NoPage" className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
