import React, { useState } from 'react';
import '../../App.css';
import emailjs from "emailjs-com";

export default function Contact() {
  const [ret, setRet] = useState(false);
  const [message, setMessage] = useState(false);
  var messageContent = ret ? 'Your message is sent!':
                             'Please fill all input fields before sending the message.';

  function sendEmail(e) {
    e.preventDefault();
    if (e.target['name'].value && 
        e.target['email'].value && 
        e.target['subject'].value &&
        e.target['message'].value) {
          emailjs.sendForm('service_dn7uzst', 'template_qu461dk', e.target, 'user_iO3UvjXob3X1Wk4PtklFF')
          .then((result) => {
            setRet(true);
            setMessage(true);
          }, (error) => {
            setMessage(true);
            setRet(false);
          });
          e.target.reset()
    } else {
      setMessage(true);
      setRet(false);
    }
  }

  return (
    <div className='page-wrap'>
    <div className='info-page'>
    <div className='info-header'>
    <h1>CONTACT</h1>
    </div>
    <div className='info-body'>
    <div className="form-container">
      <div className="paragraph">
      <p>We'd love to hear from you!</p>&nbsp;<i className="fa fa-music"></i>
      </div>
      <div className='paragraph'>
      <p className={message ? 'message-display' : 'message-none'}>{messageContent}</p>
      </div>
        <form className="form" onSubmit={sendEmail}>
          <input type="text" className="form-control" placeholder="Name" name="name"/>
          <input type="email" className="form-control" placeholder="Email Address" name="email"/>
          <input type="text" className="form-control" placeholder="Subject" name="subject"/>
          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
          <input type="submit" className="btn" value="Send Message"></input>
        </form>
            </div>
    </div>
    </div>
    </div>
);
}
