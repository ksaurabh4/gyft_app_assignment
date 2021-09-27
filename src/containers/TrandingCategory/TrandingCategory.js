import React from 'react'

export default function TrandingCategory() {
    const trendingCategory = [{ mainImage: 1, logo: 7 }, { mainImage: 2, logo: 8 }, { mainImage: 3, logo: 9 }, { mainImage: 4, logo: 10 }]
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="h4 fw-700 text-uppercase">TRENDING CATEGORY</h3>
                </div>
                <div className="col-12 px-4">
                    <div className="row">
                        {trendingCategory.map(e => (<div className="col-6 col-md-3 p-2">
                            <div className="productList border rounded-top">
                                <img src={`images/${e.mainImage}.jpg`} alt={`product-${e.mainImage}`} className="w-100 rounded-top" />
                                <div className="pr-det text-center">
                                    <div className="logoBox"><img src={`images/logos/${e.logo}.png`} alt={`logo-${e.logo}`} /></div>
                                    <div className="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                                    <a href="NoPage" className="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>

    )
}
