import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import BestSellingBrands from '../BestSellingBrands/BestSellingBrands'
import Deals from '../Deals/Deals'
import TrandingBrands from '../TrandingBrands/TrandingBrands'
import TrandingCategory from '../TrandingCategory/TrandingCategory'
import DiscountOffersRecent from '../DiscountOffersRecent/DiscountOffersRecent'


export default function Home() {
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
                        <div className="col-12 p-0">
                            <Carousel />
                        </div>
                    </section>
                    <section className="row py-2">
                        <div className="col-12 p-0">
                            <Deals /></div>
                    </section>
                    <section className="row py-3 py-md-4">
                        <div className="col-12 p-0">
                            <BestSellingBrands />
                        </div>
                    </section>
                    <section className="row py-3 py-md-4">
                        <div className="col-12 p-0">
                            <TrandingCategory />
                        </div>
                    </section>
                    <section className="row DiscountsOffersRecent">
                        <DiscountOffersRecent />
                    </section>
                    <section className="row TrendingBrands py-3 py-md-4">
                        <TrandingBrands />
                    </section>
                    <Footer />
                </div>
            </div>
            {/* login */}
            <div className="modal customModal" tabIndex={-1} role="dialog" id="login" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <a className="close-btn" data-dismiss="modal">close</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span></div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Mobile Number
                                                </div>
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
                    <div className="modal-content">
                        <a className="close-btn" data-dismiss="modal">PasswordMod Password</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span></div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" defaultValue={9910448494} />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Mobile Number
                                                </div>
                                            </div>
                                            <div className="form-group m-0">
                                                <input type="text" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterMobileN" placeholder="Enter Password" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Password
                                                </div>
                                            </div>
                                            <div className="form-group text-right">
                                                <a className="font-italic fs-12 text-danger" href="NoPage">Forgot Password</a>
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
                    <div className="modal-content">
                        <a className="close-btn" data-dismiss="modal">Forgot Password</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span></div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Mobile Number
                                                </div>
                                            </div>
                                            <div className="form-group m-0">
                                                <input type="text" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterMobileN" placeholder="Enter OTP" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Valid OTP
                                                </div>
                                            </div>
                                            <div className="form-group text-right">
                                                <a className="font-italic fs-12 text-danger" href="NoPage">Resend OTP</a>
                                            </div>
                                            <div className="d-block">
                                                <button type="button" className="btn btn-primary px-4 fw-600 btn-lg rounded-0 text-uppercase">Login</button>
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
                    <div className="modal-content">
                        <a className="close-btn" data-dismiss="modal">close</a>
                        <div className="modal-body">
                            <div>
                                <div className="row">
                                    <div className="col-12 fs-24 text-danger" style={{ marginTop: '-18px' }}><span className="d-inline-block px-1 bg-white">Login/Signup</span></div>
                                    <div className="col-12 py-4">
                                        <form style={{}} id="form2">
                                            <div className="form-group">
                                                <input type="number" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Mobile" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Mobile Number
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Name" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Valid Name
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-lg rounded-0 fs-18" name id="DeliveryEnterName" placeholder="Enter Email" />
                                                <div className="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style={{ display: 'none' }}>
                                                    Please Enter Valid Email
                                                </div>
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
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>

    )
}
