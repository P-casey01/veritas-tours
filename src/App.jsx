import React from 'react';
import '/src/styles/Global.css'; // Importing Global.css
import Header from '/src/components/Header/Header';
import Backdrop from '/src/components/Backdrop/Backdrop';
import AboutDerry from '/src/components/AboutDerry/AboutDerry';
import AboutUs from '/src/components/AboutUs/AboutUs';
import Testimonial from '/src/components/Testimony/Testimony';
import Tours from '/src/components/Tours/Tours';
import Footer from '/src/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Backdrop/>
      <section id="about-derry">
    <AboutDerry/>
  </section>
  <section id="about-us">
    <AboutUs/>
  </section>
  <section id="testimonials">
    <Testimonial/>
  </section>
  <section id="tours">
    <Tours/>
  </section>
  <section id="Footer"></section>
  <Footer/>
</div>
)}

export default App;
