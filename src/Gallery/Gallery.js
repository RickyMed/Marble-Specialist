import React from 'react'

const Gallery = () => {
  return (
    <section id="gallery">
      <h2 className="m-heading is-center py-1">Gallery</h2>
      <div className="grid">
        <figure className="gallery-item gallery-item-1">
          <img src="https://images.pexels.com/photos/1020320/pexels-photo-1020320.jpeg?cs=srgb&dl=background-canvas-close-up-1020320.jpg&fm=jpg" alt="Stone-1" className="gallery-img"/>
        </figure>
        <figure className="gallery-item gallery-item-2">
          <img src="https://images.pexels.com/photos/1884303/pexels-photo-1884303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Stone-2" className="gallery-img"/>
        </figure>
        <figure className="gallery-item gallery-item-3">
          <img src="https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?cs=srgb&dl=concrete-floor-granite-2117937.jpg&fm=jpg" alt="Stone-3" className="gallery-img"/>
        </figure>
        <figure className="gallery-item gallery-item-4">
          <img src="https://images.pexels.com/photos/921776/pexels-photo-921776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Stone-4" className="gallery-img"/>
        </figure>
        <figure className="gallery-item gallery-item-5">
          <img src="https://images.pexels.com/photos/1985166/pexels-photo-1985166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Stone-5" className="gallery-img"/>
          </figure>
        <figure className="gallery-item gallery-item-6">
          <img src="https://images.pexels.com/photos/1451474/pexels-photo-1451474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Stone-6" className="gallery-img"/>
        </figure>
        <figure className="gallery-item gallery-item-7">
          <img src="https://images.pexels.com/photos/1573806/pexels-photo-1573806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Stone-7" className="gallery-img"/>
        </figure>
      </div>
    </section>
  )
}

export default Gallery