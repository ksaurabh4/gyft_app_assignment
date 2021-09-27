import React from 'react'

export default function TrandingBrands() {
    const brandList = [{ brand: 1 }, { brand: 2 }, { brand: 3 }, { brand: 4 }, { brand: 5 }, { brand: 6 }]

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="fs-22 text-uppercase fw-700 text-muted"><span>Trending Brands</span></h3>
                </div>
                <div className="col-12">
                    <div className="TrendingBrands-owl-carousel owl-carousel">
                        {brandList.map(e => (<div className="item" key={e.brand.toString()}>
                            <div className="productList border rounded p-0">
                                <img src={`images/tranding-brand/${e.brand}.jpg`} alt="product" className="w-100 rounded" />
                                <div className="pr-det text-center">
                                    <div className="logoBox"><img src={`images/tranding-brand/${e.brand}.png`} alt='logo' /></div>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>

    )
}
