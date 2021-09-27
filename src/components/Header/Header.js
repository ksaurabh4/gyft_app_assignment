import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="row border-bottom">
            <div className="col-12 px-0 top-gry">
                <div className="container">
                    <div className="row">
                        <div className="text-right col-12">
                            <ul className="list-inline top-links">
                                <li className="list-inline-item"><a href="NoPage" data-toggle="modal" data-target="#login">Login/Register</a></li>
                                <li className="list-inline-item dropdown">
                                    <a className="dropdown-toggle" href="NoPage" id="ProfileMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hi Amitabh Kumar!</a>
                                    <div className="dropdown-menu dropdown-menu-right shadow rounded-0 fs-14 border-0 mt-1" aria-labelledby="ProfileMenu">
                                        <a className="d-block p-2 lh-1" href="NoPage">
                                            <span className="pr-2"><img src="/images/profile-icon.png" /></span> My Profile
                                        </a>
                                        <a className="d-block p-2 lh-1" href="NoPage">
                                            <span className="pr-2"><img src="/images/tr-icon.png" /></span> My Transaction
                                        </a>
                                        <a className="d-block p-2 lh-1" href="NoPage">
                                            <span className="pr-2"><img src="/images/logout-icon.png" /></span> Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 px-0 bg-white py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5 col-md-4">
                            <ul className="list-inline m-0">
                                <li className="list-inline-item">
                                    <div className="hamburger-icon" id="desktop-hamburger">
                                        <div className="top" />
                                        <div className="middle" />
                                        <div className="bottom" />
                                    </div>
                                </li>
                                <li className="list-inline-item call nowrap">
                                    <span><a href="tel:18001033314"><img src="/images/call.png" alt="logo" /></a></span>
                                    <span className="pl-l fw-700 d-none d-md-inline-block">1800-103-3314</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <div className="classSearch">
                                <input type="text" name className="form-control" placeholder="Search by Brand / Product" />
                            </div>
                        </div>
                        <div className="col-7 col-md-4 text-right center-logo">
                            <Link to="/"><img src="/images/logo.png" className="img-fluid" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    )
}
