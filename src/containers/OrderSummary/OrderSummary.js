import React from 'react'

export default function OrderSummary() {
    return (
        <div className="col-12 col-lg-4 topSticky"> <a href="NoPage" data-toggle="modal" data-target="#MobileSummaryPopup" className="MobileSummaryBtn"><span>Summary</span><span>₹ 800</span></a>
            <div className="DesktopSummary">
                <div className="SummaryRight shadow-none">
                    <div className="productPageBox px-3">
                        <div className="d-flex py-3 justify-content-between align-items-center">
                            <h3 className="fs-16 fw-700 m-0">SUMMARY</h3>
                        </div>
                        <div className="repaeatBox">
                            <div className="row py-2 border-bottom border-top">
                                <div className="col-12 text-uppercase fw-700 pt-1 text-muted">
                                    <div className="d-flex justify-content-between align-items-center"> <span>VERO MODA</span>
                                        <a href="NoPage" className="text-muted fs-12"><i className="fas fa-trash-alt m-0" /></a>
                                    </div>
                                </div>
                                <div className="col-8 py-1 fs-14">₹ 1000 <span className="text-success">(X 2)</span>
                                </div>
                                <div className="col-4 py-1 fs-14 text-right">₹ 2000</div>
                            </div>
                            <div className="row py-2 border-bottom border-dot">
                                <div className="col-8 fs-14">Cash Savigs (10%)</div>
                                <div className="col-4 fs-14 text-right">₹ 200</div>
                            </div>
                            <div className="row py-3 border-bottom border-dot">
                                <div className="col-8 fs-14 fw-700">Sub Total</div>
                                <div className="col-4 fs-14 text-right fw-700">₹ 1800</div>
                            </div>
                        </div>
                        <div className="repaeatBox">
                            <div className="row py-2 border-bottom border-top">
                                <div className="col-12 text-uppercase fw-700 pt-1 text-muted">
                                    <div className="d-flex justify-content-between align-items-center"> <span>BATA</span>
                                        <a href="NoPage" className="text-muted fs-12"><i className="fas fa-trash-alt m-0" /></a>
                                    </div>
                                </div>
                                <div className="col-8 py-1 fs-14">₹ 1000 <span className="text-success">(X 2)</span>
                                </div>
                                <div className="col-4 py-1 fs-14 text-right">₹ 2000</div>
                            </div>
                            <div className="row py-2 border-bottom border-dot">
                                <div className="col-8 fs-14">Cash Savigs (10%)</div>
                                <div className="col-4 fs-14 text-right">₹ 200</div>
                            </div>
                            <div className="row py-3 border-bottom border-dot">
                                <div className="col-8 fs-14 fw-700">Sub Total</div>
                                <div className="col-4 fs-14 text-right fw-700">₹ 1800</div>
                            </div>
                        </div>
                        <div className="row m-0 py-2 bg-dark text-white rounded my-3">
                            <div className="col-7 fs-18 fw-500">Net Payable</div>
                            <div className="col-5 fs-18 fw-500 text-right text-nowrap">₹ 3600</div>
                        </div>
                    </div>
                    <div className="productPageBox px-3 mt-3 mt-md-4">
                        <div className="pt-3">
                            <div className="custom-control custom-checkbox fs-14 py-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked />
                                <label className="custom-control-label" htmlFor="customCheck1">I agree to the <a href="NoPage" data-toggle="modal" data-target="#tc" className="text-danger">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div className="py-2">
                            <button type="button" className="btn btn-danger btn-block mb-2 fs-14" data-toggle="modal" data-target="#tcConfirmation">BUY NOW</button>
                            <button type="button" className="btn btn-outline-danger btn-block mb-2 fs-14" data-toggle="modal" data-target="#tcConfirmation">ADD TO CART</button>
                        </div>
                        <div className="pb-3 fs-12">We accept Credit Card, Debit Card, Netbanking, EMIs, Wallets</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
