import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="l-heading is-subhead is-center m-2 pt-1">Contact</h2>
      <div className="content">
        <div className="contact-info mb-2">
          <h3 className="s-heading is-left is-uppercase is-bolder">Corporate</h3>
          <p className="is-left mr-2">2111 Atlanta Ave. Suite C102 Riverside, CA 92507</p>
          <div className="phone-number">
            <a className="is-link" href="tel: 951-222-2290">P. (951) 222-2290</a>
          </div>
          <div className="fax-number">
            <a className="is-link" href="tel: 951-222-2297">F. (951) 222-2297</a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input className="form-item" type="text" placeholder="Name"/>
            <input className="form-item" type="email" placeholder="Email"/>
            <input className="form-item" type="text" placeholder="Subject"/>
            <textarea className="form-item" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            <input className="form-item btn" type="submit" value="Send"></input>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
