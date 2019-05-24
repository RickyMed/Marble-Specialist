import React from 'react'

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2 className="m-heading is-center">Our Services</h2>
        <div className="items">
          <div className="item">
            <img src="https://static.thenounproject.com/png/1561043-200.png" alt="Cleaning Icon"/>
            <h3>Cleaning</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="item">
            <img src="https://static.thenounproject.com/png/2159955-200.png" alt="Repair Icon"/>
            <h3>Restoration</h3>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="item">
            <img src="https://static.thenounproject.com/png/154469-200.png" alt="Sparkle Icon"/>
            <h3>Enhancement</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
