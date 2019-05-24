import React, { Component } from 'react'

class ContactUs extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCOo4zju6a0e8ZPUl8trnABWY_ztZ6pz1s&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {

    const loc = { 
      lat: 33.786560,
      lng: -117.228203
    };
  
    const map = new window.google.maps.Map(document.querySelector('.map'),
    {
      zoom: 14,
      center: loc
    });
  
  }

  render () {
    return (
      <section id="contact-us">
        <div className="contact-form p-3">
          <h2 className="is-center m-heading">Contact Us</h2>
          <form>
            <input className="form-item is-block" type="text" placeholder="Name"/>
            <input className="form-item is-block" type="email" placeholder="Email"/>
            <label className="form-item" htmlFor="subject">Subject</label>
            <select className="form-item dropdown" name="subject" required>
              <option value="request-quote">Request Quote</option>
              <option value="other">Other</option>
            </select>
            <textarea className="form-item is-block" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="submit" value="Send" className="btn"></input>
          </form>
        </div>
        <div className="map"></div>
      </section>
    );
  }
  
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default ContactUs;
