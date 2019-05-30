import React, { Component } from 'react'

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

class Locations extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBEfok_UDWzLuUfMpwusLQwxa7YSsDarX0&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    const loc = {
      lat: -117.271687,
      lng: 34.067435
    };
  
    const map = new window.google.maps.Map(document.querySelector('.map'),
    {
      zoom: 8,
      center: loc
    });

    const sanBernardino = new window.google.maps.Marker({
      position: {lat: -117.271687, lng: 34.067435},
      map: map,
      });
  
  }

  render() {
    const days = [
      "Monday",
      "Tuesday", 
      "Wednesday", 
      "Thrusday", 
      "Friday", 
      "Saturday", 
      "Sunday"
    ]
    
    const daysList = days.map(day => <li key={day}> {day} </li>)

    return (
      <section id="locations">
        <h2 className="l-heading is-subhead is-center m-2 pt-1">Locations</h2>
        <div className="sites">
          <div className="grid">
            <div className="site-1">
              <h3>San Bernardino - Food Truck</h3>
              <div className="address">
                <a className="is-link" href="maps://maps.google.com/maps?daddr=34.067435,-117.271687&amp;ll=">650 E. Hospitality Ln. Unit 10 San Bernardino, CA 92408</a>
              </div>
              <div className="phone-number">
                <a className="is-link" href="tel: 951-545-8572">(951) 545-8572</a>
              </div>
              <div>
                <h3 className="is-center">Hours</h3>
                <div className="schedule">
                  <ul>
                    <li>Tuesday</li>
                    <li>Thrusday</li>
                  </ul>
                  <ul>
                    <li>10:00 am - 2:00 pm</li>
                    <li>10:00 am - 2:00 pm</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="site-2">
              <h3>El Monte - Restaurant</h3>
              <div className="address">
                <a className="is-link" href="maps://maps.google.com/maps?daddr=34.092077,-118.027566&amp;ll=">
                  10990 Lower Azusa Rd. Ste 1 El Monte, CA 91731
                </a>
              </div>
              <div className="phone-number">
                <a className="is-link" href="tel: 626-575-7174">(626) 575-7174</a>
              </div>
              <div>
                <h3 className="is-center">Hours</h3>
                <div className="schedule">
                  <ul>
                    {daysList}
                  </ul>
                  <ul>
                    <li>9:00 am - 9:00 pm</li>
                    <li>9:00 am - 9:00 pm</li>
                    <li>9:00 am - 9:00 pm</li>
                    <li>9:00 am - 9:00 pm</li>
                    <li>9:00 am - 10:00 pm</li>
                    <li>9:00 am - 10:00 pm</li>
                    <li>9:00 am - 9:00 pm</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="site-3"></div>
            <div className="site-4"></div>
            <div className="site-5"></div>
            <div className="site-6"></div>
            <div className="site-7"></div>
            <div className="site-8"></div>
            <div className="site-9"></div>
            <div className="site-10"></div>
            <div className="site-11"></div>
            <div className="site-12"></div>
          </div>
        </div>
        <div className="map"></div>
      </section>
    )
  }

}

export default Locations
