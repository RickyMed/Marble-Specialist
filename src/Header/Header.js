import React from 'react'

const Header = () => {
  return (
    <header id="main-header" className="py-1">
      <nav role="navigation">
        <h1><a href="home">Marble Specialist</a></h1>
        <div id="menuToggle">
          {/* <input type="checkbox" /> */}
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header