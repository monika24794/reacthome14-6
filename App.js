import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import AboutUs from './Aboutus/About';
import TestimonialCarousel from './Testimonials/Testimonials';



function App() {
    return (
        <div className="App">
          <Header/>
      
         <AboutUs></AboutUs>
           
      <TestimonialCarousel></TestimonialCarousel>
            <Footer/>
        </div>
    );
}

export default App;
