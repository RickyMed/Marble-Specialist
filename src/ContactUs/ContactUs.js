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
    
    var styledMapType = new window.google.maps.StyledMapType(
      [
        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{color: '#c9b2a6'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{color: '#dcd2be'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ae9e90'}]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#93817c'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{color: '#a5b076'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#447530'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#f8c967'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#e9bc62'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{color: '#e98d58'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{color: '#db8555'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#806b63'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{color: '#8f7d77'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#ebe3cd'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#b9d3c2'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#92998d'}]
        }
      ],
      {name: 'Map'});

    const loc = { 
      lat: 33.786560,
      lng: -117.228203
    };
  
    const map = new window.google.maps.Map(document.querySelector('.map'),
    {
      zoom: 14,
      center: loc,
      mapTypeControlOptions: {
        mapTypeIds: ['map', 'roadmap', 'satellite', 'hybrid', 'terrain']
      }
    });

    map.mapTypes.set('map', styledMapType);
    map.setMapTypeId('map');
  
  }

  render () {
    return (
      <section id="contact-us">
        <div className="contact-form p-3">
          <h2 className="is-center m-heading">Contact Us</h2>
          <form action="https://formspree.io/meqzlydp" method="POST">
            <input className="form-item" type="text" name="Name" placeholder="Name"/>
            <input className="form-item" type="email" name="Email" placeholder="Email"/>
            <label className="form-item" htmlFor="subject">Subject</label>
            <select className="form-item dropdown" name="Subject" required>
              <option value="request-quote">Request Quote</option>
              <option value="other">Other</option>
            </select>
            <textarea className="form-item" name="Message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
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
