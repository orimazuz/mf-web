import React from 'react';
import '../../App.css';
import emailjs from "emailjs-com";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ret: false,
      message: false,
    };
  }


  sendEmail(e) {
    e.preventDefault();
    if (e.target['name'].value && 
        e.target['email'].value && 
        e.target['subject'].value &&
        e.target['message'].value) {
          emailjs.sendForm('service_dn7uzst', 'template_qu461dk', e.target, 'user_iO3UvjXob3X1Wk4PtklFF')
          .then((result) => {
            this.setState({message: true});
            this.setState({ret: true});
          }, (error) => {
            this.setState({message: true});
            this.setState({ret: false});
          });
          e.target.reset()
    } else {
      this.setState({message: true});
      this.setState({ret: false});
    }
  }

  render() {
    this.props.cs();
    const messageContent = this.state.ret ? 'Your message is sent!':
                                            'Please fill all input fields before sending the message.';

    return (
      <div className='info-page'>
      <div className='info-body'>
      <div className="form-container">
        <div className="paragraph">
        <p>We'd love to hear from you!</p>&nbsp;<i className="fa fa-music"></i>
        </div>
        <div className='paragraph'>
        <p className={this.state.message ? 'message-display' : 'message-none'}>{messageContent}</p>
        </div>
          <form className="form" onSubmit={(e) => {this.sendEmail(e)}}>
            <input type="text" className="form-control" placeholder="Name" name="name"/>
            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            <input type="submit" className="btn" value="Send Message"></input>
          </form>
              </div>
      </div>
      </div>
  );
  }
}

export default Contact;