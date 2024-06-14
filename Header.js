import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
    return (
        <div className="page-wraper">
            <header className="site-header header header-style-6 style-1 mo-left">
                <div className="extra-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content blinkmsg">
                                    <div className="section-title">
                                        <h2 className="blink">Bring your car's showroom shine back starting at ₹ 99 /- </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid top-header-lg" style={{ backgroundColor: '#000000' }}>
                    <div className="d-flex bd-highlight">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <a href="#"><img src="./image/headerlogo-removebg-preview.png" alt="" className="img-fluid" /></a>
                        </div>
                        <div className="p-2 bd-highlight">
                            <h6><i className="fa fa-envelope ficon" aria-hidden="true"></i> Send us a Mail</h6>
                            <span>classicalmotors21@gmail.com</span>
                        </div>
                        <div className="p-2 bd-highlight">
                            <h6><i className="fa fa-mobile ficon" aria-hidden="true"></i> Call Us</h6>
                            <span>+91 90111 21111</span>
                        </div>
                        <div className="p-2 bd-highlight">
                            <h6><i className="fa fa-clock-o ficon" aria-hidden="true"></i> OPENING TIME</h6>
                            <span>09:00 AM - 06:00 PM</span>
                        </div>
                    </div>
                </div>

                <div className="container-fluid top-header-sm">
                    <div className="w-100 py-2">
                        <div className="w-100">
                            <div className="w-auto float-start">
                                <i className="fa fa-mobile ficon fs-5" aria-hidden="true"></i>+91 90111 21111
                            </div>
                            <div className="w-auto float-end">
                                <a href="#bookappointment" className="book-now-mob btn btn-outline-primary">Appointment</a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid logo-header" style={{ backgroundColor: '#191f23' }}>
                    <nav className="navbar navbar-expand-lg w-100 navbar-light">
                        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="https://ClassicalMotors.in/#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://ClassicalMotors.in/#aboutus">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://ClassicalMotors.in/#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://ClassicalMotors.in/#gallery">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://ClassicalMotors.in/#blog">Testimonial</a>
                                </li>
                            </ul>
                        </div>
                        <a href="https://ClassicalMotors.in/#bookappointment" className="book-now btn btn-outline-danger">Book Appointment</a>
                    </nav>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./image/car-banner-new-1.jpg" className="d-block w-100" alt="car-detailing" />
                            <div className="carousel-caption text-left">
                                <p className="banner-heading">Quality car care at your doorstep!</p>
                                <a href="#services" className="btn-menu btn btn-outline-danger">Our Services</a>
                                <a href="#bookappointment" className="btn-menu btn btn-outline-danger">Book Appointment</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
