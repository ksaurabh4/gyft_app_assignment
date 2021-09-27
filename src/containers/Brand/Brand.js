import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import OrderSummary from '../OrderSummary/OrderSummary'
import TrandingBrands from '../TrandingBrands/TrandingBrands'


export default function Brand() {

    return (
        <div>
            <div className="off-canvas-nav">
                <div className="left-nav-toplink">
                    <div className="left-nav">
                        <ul className="list-unstyled m-0">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="NoPage">New Arrivals</a></li>
                            <li className="show-mobile parent"><a href="NoPage" data-related="title_1">Categories</a></li>
                            <li><a href="NoPage">Discounts</a></li>
                            <li><a href="NoPage">Bogo</a></li>
                            <li><a href="NoPage">Check My Voucher Status</a></li>
                            <li><a href="NoPage">Resend My Voucher</a></li>
                            <li><a href="NoPage">My Transactions</a></li>
                            <li><a href="NoPage">Customer Care</a></li>
                        </ul>
                        <div className="subMenu" id="categories">
                            <div className="text-right nav-back"><span>Categories</span></div>
                            <ul className="list-unstyled m-0">
                                <li><a href="category.html">Apparel &amp; Accessories</a></li>
                                <li><a href="category.html">Food &amp; Beverage</a></li>
                                <li><a href="category.html">Grocery &amp; Home Needs</a></li>
                                <li><a href="category.html">Mobile &amp; Electronics</a></li>
                                <li><a href="category.html">Health &amp; Wellness</a></li>
                                <li><a href="category.html">e-Com &amp; Online</a></li>
                                <li><a href="category.html">Entertainment &amp; Magazines</a></li>
                                <li><a href="category.html">Cabs &amp; Travel</a></li>
                                <li><a href="category.html">All Brands</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="off-canvas-main">
                <div className="container-fluid">
                    <Header />
                    <NavBar />
                    <section className="row">
                        <div className="col-12 px-0">
                            <img src="images/brand-banner.jpg" className="w-100 d-none d-md-block" />
                            <img src="images/brand-mobile-banner.jpg" className="w-100 d-block d-md-none" />
                        </div>
                    </section>
                    <section className="row brandPage pb-3 pb-md-4">
                        <div className="col-12 px-0">
                            <div className="container">
                                <div className="row">
                                    {/* <div class="col-12">

                                                                                                                                          </div> */}
                                    <div className="col-12 col-lg-8">
                                        <div className="bg-white px-3 border">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb bg-transparent px-0 m-0 fs-14 fw-600 justify-content-end pb-md-0">
                                                    <li className="breadcrumb-item text-uppercase"><a href="index.html">HOME</a>
                                                    </li>
                                                    <li className="breadcrumb-item text-uppercase"><a href="index.html">Grocery &amp; Home Needs</a>
                                                    </li>
                                                    <li className="breadcrumb-item text-uppercase active" aria-current="page">More</li>
                                                </ol>
                                            </nav>
                                            <div>
                                                <div className="pb-3">
                                                    <img src="images/more.png" />
                                                </div>
                                                <h2 className="h6">Buy/Redeem MORE Gift Vouchers &amp; Gift Card</h2>
                                                <p className="fs-14 m-0">Owned by More Retail Limited, More stores are hypermarkets for every home need. Customers find groceries, home essentials, cosmetics, fashion essentials, etc under one roof. Choose More Gift Cards and Gift Vouchers for cashless shopping.</p>
                                            </div>
                                            <div className="productPageCoupon p-3 my-3">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label className="fs-14 fw-700">Your Promo Code</label>
                                                        <div className="row align-items-end pb-1 promoFild">
                                                            <div className="col-7 col-md-9 pr-0">
                                                                <input type="text" className="form-control text-success" name defaultValue="SBNPZ" /> <a href="NoPage" className="editPromo" title="Edit Promocode"><i className="far fa-edit" /></a>
                                                            </div>
                                                            <div className="col-5 col-md-3 pl-0">
                                                                <button className="btn btn-outline-success btn-block fs-14 rounded-0">APPLIED</button>
                                                            </div>
                                                            {/*  <div class="col-5 col-md-3 pl-0"><button class="btn btn-outline-success btn-block fs-14 rounded-0">APPLY</button></div> */}</div>
                                                        <p className="fs-14 m-0 pb-1"><i className="fas fa-check-circle text-success" /> Promo applied successfully.</p>
                                                        <p className="fs-14 m-0 pb-1"><i className="fas fa-times-circle text-danger" /> Invalid Promo Code.</p>
                                                        <p className="fs-14 m-0 pb-1">You got a discount of ₹ 515</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="productPageCoupon OrangeBox px-3 py-1 my-3 GreenBox">
                                                <div className="row align-items-center">
                                                    <div className="col-auto border-right">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="SBNPZ" name="customRadio" className="custom-control-input" defaultChecked />
                                                            <label className="custom-control-label fs-16 fw-600" htmlFor="SBNPZ">SBNPZ</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-0 fs-14">Save ₹ 500 (₹250 instant OFF + ₹250 cashback in PayZapp wallet on applying the code on PayZapp payment page).
                                                            <br /> <a href="NoPage" className="text-danger">Terms &amp; Conditions</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="productPageCoupon OrangeBox px-3 py-1 my-3">
                                                <div className="row align-items-center">
                                                    <div className="col-auto border-right">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="SBAMZ" name="customRadio" className="custom-control-input" />
                                                            <label className="custom-control-label fs-16 fw-600" htmlFor="SBAMZ">SBAMZ</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-0 fs-14">Save ₹ 500 (₹250 instant OFF + ₹250 cashback in PayZapp wallet on applying the code on PayZapp payment page).
                                                            <br /> <a href="NoPage" className="text-danger">Terms &amp; Conditions</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <h5 className="text-uppercase text-muted pb-2">Select Voucher Value (₹)</h5>
                                                <table className="table cart-table brand-2 m-0 fs-14">
                                                    <thead>
                                                        <tr className="thead">
                                                            <th className="description">Value(₹)</th>
                                                            <th className="pa hideOnMobile">Offer</th>
                                                            <th className="quantity">Qty</th>
                                                            <th className="price">Total(₹)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="description"><span>100</span>
                                                            </td>
                                                            <td className="pa hideOnMobile">
                                                                <div>
                                                                    <p>Free Promocode</p>
                                                                </div>
                                                            </td>
                                                            <td className="qty-td">
                                                                <div className="define-quantity">
                                                                    <input type="text" name="quantity" defaultValue={1} className="qty" /> <span className="inc button">+</span><span className="dec button">-</span>
                                                                </div>
                                                                <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                            </td>
                                                            <td className="description">
                                                                <div><span>90</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="description"><span>250</span>
                                                            </td>
                                                            <td className="pa hideOnMobile">
                                                                <div>
                                                                    <p>Free ₹100 Bata Gift Voucher</p>
                                                                </div>
                                                            </td>
                                                            <td className="qty-td">
                                                                <div className="define-quantity">
                                                                    <input type="text" name="quantity" defaultValue={1} className="qty" /> <span className="inc button">+</span><span className="dec button">-</span>
                                                                </div>
                                                                <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                            </td>
                                                            <td className="description">
                                                                <div><span>225</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3} className="pa hideOnDesktop border-0 mobile-offer">
                                                                <div>
                                                                    <p><span className="text-secondary">Offes:</span> Free ₹100 Bata Gift Voucher</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="description"><span>500</span>
                                                            </td>
                                                            <td className="pa hideOnMobile">
                                                                <div>
                                                                    <p>10% Off</p>
                                                                </div>
                                                            </td>
                                                            <td className="qty-td">
                                                                <div className="define-quantity">
                                                                    <input type="text" name="quantity" defaultValue={1} className="qty" /> <span className="inc button">+</span><span className="dec button">-</span>
                                                                </div>
                                                                <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                            </td>
                                                            <td className="description">
                                                                <div><span>450</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="description"><span>1000</span>
                                                            </td>
                                                            <td className="pa hideOnMobile">
                                                                <div>
                                                                    <p>10% Off</p>
                                                                </div>
                                                            </td>
                                                            <td className="qty-td">
                                                                <div className="define-quantity">
                                                                    <input type="text" name="quantity" defaultValue={1} className="qty" /> <span className="inc button">+</span><span className="dec button">-</span>
                                                                </div>
                                                                <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                            </td>
                                                            <td className="description">
                                                                <div><span>900</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="description"><span>2000</span>
                                                            </td>
                                                            <td className="pa hideOnMobile">
                                                                <div>
                                                                    <p>10% Off</p>
                                                                </div>
                                                            </td>
                                                            <td className="qty-td">
                                                                <div className="define-quantity">
                                                                    <input type="text" name="quantity" defaultValue={1} className="qty" /> <span className="inc button">+</span><span className="dec button">-</span>
                                                                </div>
                                                                <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                            </td>
                                                            <td className="description">
                                                                <div><span>1800</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <OrderSummary />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row impIns pb-3 pb-md-4">
                        <div className="container">
                            <div className="bg-white border">
                                <div className="row m-0 bg-white ImportantInstructions align-items-center">
                                    <div className="col-md-6 col-12 py-3 py-md-4 bg-light">
                                        <h3 className="fs-16 text-uppercase">Important Instructions</h3>
                                        <ul className="fs-14 m-0 ImportantInstructionsList">
                                            <li>Multiple Gift Vouchers <span>CAN</span> be used in one bill.</li>
                                            <li>Gift Vouchers <span>CAN</span> be used during Sale.</li>
                                            <li>Gift Vouchers <span>ACCEPTED</span> at all Listed Outlets.</li>
                                            <li className="dont">Gift Vouchers <span>CANNOT</span> be used Online.</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-5 px-md-4 px-lg-5 col-12 py-3">
                                        <div className="pb-3">
                                            <div className="d-flex w-100 storeFinder align-items-center">
                                                <div className="form-group w-100 m-0">
                                                    <input type="text" className="form-control" name placeholder="Store Locator" />
                                                </div>
                                                <button type="button" className="btn rounded-0 border-bottom fs-14 py-1 sls" data-toggle="modal" data-target="#StoreLocator"><i className="fas fa-search" />
                                                </button>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-outline-secondary text-uppercase rounded-0 btn-block" data-toggle="modal" data-target="#tc">Terms &amp; Conditions</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row howTo pb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="h4 text-uppercase fw-700 text-muted"><span>How to Redeem</span></h3>
                                </div>
                                <div className="col-12">
                                    <div className="how-to-Redeem-carousel owl-carousel stepsBox fs-12">
                                        <div className="item m-1">
                                            <figure>
                                                <img src="images/step_1.png" />
                                                <figcaption>
                                                    <p>Use the outlet locator to locate the nearest outlet that accepts this Gift Voucher.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item m-1">
                                            <figure>
                                                <img src="images/step_2.png" />
                                                <figcaption>
                                                    <p>Select your choice of product.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item m-1">
                                            <figure>
                                                <img src="images/step_3.png" />
                                                <figcaption>
                                                    <p>Share your Gift Voucher with the cashier at the time of billing &amp; pay the remaining amount by cash or card if required.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row TrendingBrands py-3 py-md-4">
                        <TrandingBrands /> </section>
                    <Footer />
                </div>
            </div>
            {/* login */}
            <div className="modal customModal" tabIndex={-1} role="dialog" id="login" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"> <a className="close-btn" data-dismiss="modal">close</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span>
                                    </div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Mobile Number</div>
                                            </div>
                                            <div className="d-block">
                                                <button type="button" className="btn btn-danger px-4 rounded-0 text-uppercase" data-dismiss="modal" data-toggle="modal" data-target="#PasswordMod">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PasswordMod */}
            <div className="modal customModal" tabIndex={-1} role="dialog" id="PasswordMod" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"> <a className="close-btn" data-dismiss="modal">PasswordMod Password</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span>
                                    </div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" defaultValue={9910448494} />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Mobile Number</div>
                                            </div>
                                            <div className="form-group m-0">
                                                <input type="text" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterMobileN" placeholder="Enter Password" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Password</div>
                                            </div>
                                            <div className="form-group text-right"> <a className="font-italic fs-12 text-danger" href="NoPage">Forgot Password</a>
                                            </div>
                                            <div className="d-block">
                                                <button type="button" className="btn btn-danger px-4 rounded-0 text-uppercase">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* OTP */}
            <div className="modal customModal" tabIndex={-1} role="dialog" id="Forgot" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"> <a className="close-btn" data-dismiss="modal">Forgot Password</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span>
                                    </div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Mobile Number</div>
                                            </div>
                                            <div className="form-group m-0">
                                                <input type="text" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterMobileN" placeholder="Enter OTP" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Valid OTP</div>
                                            </div>
                                            <div className="form-group text-right"> <a className="font-italic fs-12 text-danger" href="NoPage">Resend OTP</a>
                                            </div>
                                            <div className="d-block">
                                                <button type="button" className="btn btn-danger px-4 fw-600 btn-lg rounded-0 text-uppercase">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Signup */}
            <div className="modal customModal" tabIndex={-1} role="dialog" id="login" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"> <a className="close-btn" data-dismiss="modal">close</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span>
                                    </div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Mobile Number</div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Name" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Valid Name</div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Email" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>Please Enter Valid Email</div>
                                            </div>
                                            <div className="d-block">
                                                <button type="button" className="btn btn-danger px-4 rounded-0 text-uppercase">Signup</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Summary Modal */}
            <div className="modal" id="MobileSummaryPopup" tabIndex={-1} role="dialog" aria-labelledby="tcModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content rounded-0">
                        <div className="modal-body p-0">
                            <div>
                                <button type="button" className="close position-absolute" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="MobileSummaryHere" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Terms & Conditions Modal */}
            <div className="modal" id="tc" tabIndex={-1} role="dialog" aria-labelledby="tcModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content rounded-0">
                        <div className="modal-header py-2 bg-light border-0">
                            <h5 className="modal-title fs-18 fw-600 text-uppercase" id="tcModalCenterTitle">Terms &amp; Conditions</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body fs-14">
                            <ol className="pl-3">
                                <li className="pb-1">This is a Woodland Instant Gift Voucher / Card (GV) and would be accepted at listed outlets ( for outlet list visit www.gyftr.com/woodland)</li>
                                <li className="pb-1">The person who has the Woodland GV Code is deemed to be the beneficiary.</li>
                                <li className="pb-1">Do inform the cashier that you plan using the GV for making payments before billing.</li>
                                <li className="pb-1">Only the listed Woodland outlets at its sole discretion accept the GV. Woodland may add or remove an outlet without giving any prior notice.</li>
                                <li className="pb-1">More than one GV can be used in one bill.</li>
                                <li className="pb-1">The is a ONE time use GV.</li>
                                <li className="pb-1">No Credit note / Refund for the unused amount of the GV will be given.</li>
                                <li className="pb-1">Woodland Insta Gift Voucher (GV) / Gift Card CANNOT be revalidated once expired.</li>
                                <li className="pb-1">Woodland Insta Gift Voucher (GV) / Gift Card can be used during sale.</li>
                                <li className="pb-1">Any dispute related to the Insta Gift Voucher (GV) should be referred to the issuing company and the decision of the issuing company shall be final.</li>
                                <li className="pb-1">Woodland makes full efforts to accept Instant Gift Voucher (GV) / Gift Card, but on account of any technical / administrative reasons an outlet may refuse to accept the same.</li>
                                <li className="pb-1">If an Instant Gift Voucher (GV) / Gift Card gets blocked on account of technical issue, it would get enabled in 72 hours.</li>
                                <li className="pb-1">Please contact Woodland Shop manager for any acceptance issue and if issue is still not resolved, you can write in to help@gyftr.com or call 18001033314 for immediate help</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/*Store Locator Modal */}
            <div className="modal fade" id="StoreLocator" tabIndex={-1} role="dialog" aria-labelledby="StoreLocatorModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content rounded-0">
                        <div className="modal-header py-2 bg-light border-0">
                            <h5 className="modal-title fs-18 fw-600 text-uppercase" id="StoreLocatorModalCenterTitle">Store Locator</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row fs-14">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="box"> <address>
                                        <h5 className="fs-16 pt-2 fw-600">Aldo MAHIPALPUR Mall</h5>
                                        <p>
                                            Select City Walk Mall,<br />
                                            G-16 (B),<br />
                                            District Centre Saket,<br />
                                            New Delhi:-110017
                                        </p>
                                    </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
    )
}
