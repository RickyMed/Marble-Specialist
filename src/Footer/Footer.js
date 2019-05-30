import React from 'react'

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-nav p-1">
        <nav role="navigation">
          <ul className="">
            <li><a href="#menu">Catering</a></li>
            <li><a href="#locations">Rewards</a></li>
            <li><a href="#about">Careers</a></li>
          </ul>
        </nav>
      </div>
      <hr/>
      <div className="footer-content is-center">
        <p className="s-lead">Copyright &copy; 2019, La Bufadora Baja Grill, All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
