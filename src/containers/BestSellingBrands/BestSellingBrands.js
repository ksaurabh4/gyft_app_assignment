import React from 'react'

export default function BestSellingBrands() {
    const bestSellingBrands = [{ logo: 1 }, { logo: 2 }, { logo: 3 }, { logo: 4 }, { logo: 5 }, { logo: 6 }]
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="h4 fw-700 text-uppercase">best selling brands</h3>
                </div>
                <div className="col-12 px-4">
                    <div className="row destSealingGread">
                        {bestSellingBrands.map(e => (<div className="col-6 col-md-4 col-lg-2 p-2 text-center" key={`bestSellingBrand${e.logo}`}>
                            <div className="border">
                                <figure className="m-0">
                                    <img src={`images/logos/${e.logo}.png`} alt={`logo-${e.logo}`} />
                                    <figcaption className="m-0 mt-3 p-3 border-top">
                                        <div className="offDiv">Upto 5% off</div>
                                        <div><a href="brand.html" className="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>))}

                    </div>
                </div>
            </div>
        </div>

    )
}
