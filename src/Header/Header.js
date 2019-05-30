import React from 'react'

const Header = () => {
  return (
    <header id="main-header">
      <div className="header-nav p-2">
        <nav role="navigation">
          <h1><a href="home">La Bufadora</a></h1>
          <div className="burger-menu is-right">
            <label htmlFor="toggle">&#x2630;</label>
            <input id="toggle" type="checkbox"/>
            <ul className="is-center px-2">
              <li><a href="#menu">Menu</a></li>
              <li><a href="#locations">Locations</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#order-online">Order Online</a></li>
            </ul>
          </div>
        </nav>
        <div className="header-content is-center">
          <h2 className="m-heading">WELCOME TO LA BUFADORA BAJA GRILL</h2>
          <p className="lead">Authentic Baja Taste</p>
        </div>
      </div>
    </header>
  )
}

export default Header
