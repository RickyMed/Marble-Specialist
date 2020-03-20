import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {

  scrollToTop() {
    scroll.scrollToTop(); 
  };

  render() {

    window.addEventListener('scroll', function() {
      if (window.scrollY > 150) {
        document.querySelector('#main-header').style.opacity = 0.9;
      } else {
        document.querySelector('#main-header').style.opacity = 1;
      }
    });

  return (
    <header id="main-header" className=" py-1">
      <nav role="navigation">
        <h1 className="logo" onClick={this.scrollToTop}>Marble Specialist</h1>
        <div id="menuToggle">
          <ul id="menu">
            <li><Link to="services" smooth={true} offset={-150} delay={250} >Services</Link></li>
            <li><Link to="gallery" smooth={true} offset={-90} delay={250} >Gallery</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-150} delay={250} >Testimonials</Link></li>
            <li><Link to="contact-us" smooth={true} delay={250}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )};
}

export default Header
