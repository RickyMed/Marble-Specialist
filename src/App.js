import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Showcase from './Showcase/Showcase';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Testimonials from './Testimonials/Testimonials';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Showcase></Showcase>
      <Services></Services>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
