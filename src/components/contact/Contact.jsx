import React from 'react'
import "./contact.css"

function Contact() {
  return (
   <section className="contact container section" id='contact'>
    <h2 className="section__title">Get In Touch</h2>

    <div className="contact__container grid">
      <div className="contact__iinfo">
        <h3 className="contact__title">Let's Talk</h3>
        <p className="contact__details">Dont like forms? Send me an email</p>
      </div>
<form action="" className="contact__form">
  <div className="contact__form-group">
    <div className="contact__form-div">
      <input type="text" className="contact__form-input" placeholder='Insert your name' />
    </div>

    <div className="contact__form-div">
      <input type="email" className="contact__form-input" placeholder='Insert your email' />
    </div>

    <div className="contact__form-div">
      <input type="text" className="contact__form-input" placeholder='Insert your subject' />
    </div>


    <div className="contact__form-div conact__form-area">
      <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
    </div>
<button className='btn'>Send Message</button>

  </div>
</form>
    </div>
   </section>
  )
}

export default Contact