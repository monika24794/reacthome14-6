import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel2';
import './Gallery.css';
import $ from 'jquery';

const Gallery = () => {

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js').then(() => {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        });
    }, []);

    return (
        <section>
            <div className="row headings">
                <div className="section-title" style={{ backgroundColor: '#191f23' }}>
                    <h2 className="mt-3" style={{ color: '#ee1f23' }}>Gallery</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-5">
                    <OwlCarousel className="owl-theme" options={{ loop: true, margin: 10, nav: true }}>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/pic5.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4>Car Cleaning</h4>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/pic5.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4>Car Cleaning</h4>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/pic5.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4>Car Cleaning</h4>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/pic5.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4>Car Cleaning</h4>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/pic5.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4>Car Cleaning</h4>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/pic5.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4>Car Cleaning</h4>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
