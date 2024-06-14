import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ServicesCarousel = () => {
    const options = {
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
    };

    return (
        <section>
            <div className="container-fluid">
                <div className="row headings">
                    <div className="section-title" style={{ backgroundColor: '#191f23' }}>
                        <h2 className="mt-3" style={{ color: '#ee1f23' }}>Services</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/Antibacterial 2-Step Cleaning.png" alt="Antibacterial 2 step cleaning" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Antibacterial 2 step cleaning</h4>
                                    <p className="m-b0 text-center">
                                        In this service all the points which come in the deep cleaning are covered as
                                        well as in the second step we use a special 3M car Interior foam
                                        for antibacterial cleaning 2 step deep cleaning done.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/Car Dry Cleaning.jpg" alt="Car Dry Cleaning" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Car Dry Cleaning</h4>
                                    <p className="m-b0 text-center">
                                        With our complete car dry cleaning Services, we're all about making your life easier. As the leading 360 car care service provider. we, bring our expertise and advanced machines straight to your doorstep.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/Car Odour Removal.jpg" alt="Car Odour Removal" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Car Odour Removal</h4>
                                    <p className="m-b0 text-center">
                                        It's deadly to deal with some unpleasant smells in a car. Especially the smell of smoke and any kind of food. At FixiGo, we have got expertise in car odour removal services using ozone treatment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/Car Polishing.jfif" alt="Car Polishing" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Car Polishing</h4>
                                    <p className="m-b0 text-center">
                                        We have best in class and latest technology of paint booth system. Our experienced and well-trained team will complete the work perfectly. We provide a guarantee of the paint job done by us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/Complete Car Body Polish and Wax.jpg" alt="Complete Car Body Polish and Wax" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Complete Car Body Polish and Wax</h4>
                                    <p className="m-b0 text-center">
                                        Who doesn't want to make their car look like it just rolled off the showroom floor? To give your car that showroom shine, book FixiGo's complete car body polish and wax services from the convenience of your doorstep.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/Exterior Car Cleaning & Washing.webp" alt="Exterior Car Cleaning & Washing" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Exterior Car Cleaning & Washing</h4>
                                    <p className="m-b0 text-center">
                                        Who likes seeing their car look dull and dirty? No one, right? Also, who wouldn't like the convenience of washing and cleaning their car at their fingertips? Make your car look like new with our services at Classical Motors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/Interior Car Cleaning.jpg" alt="Interior Car Cleaning" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Interior Car Cleaning</h4>
                                    <p className="m-b0 text-center">
                                        In the Interior deep cleaning service we use car cleaners which are specially made for the interior. With the help of these cleaners, we clean each and every corner of your car interior. This gives the best services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item mb-4">
                            <div className="card border-0 shadow">
                                <img src="./image/services/paint-protection-film.jpeg" alt="Paint Protection Film" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="text-center">Paint Protection Film</h4>
                                    <p className="m-b0 text-center">
                                        Our paint protection film service ensures your car's exterior remains pristine. We use high-quality films to protect against scratches and other damage, keeping your car looking new.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};
export default ServicesCarousel;
