import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  // adds error messages to the form
  function handleChange(x) {
    if (x.target.name === 'email') {
      const isValid = validateEmail(x.target.value);
      if (!isValid) {
          setFormMessage('Invalid email!');
        } else {
          setFormMessage('');
        }
    } else {
      if (!e.target.value.length) {
        const name =  e.target.name;
        setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
      } else {
        setFormMessage('');
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // sends the email or surfaces an error on submission
  function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_7pi3req', '#contactForm', 'user_2ClFT2CBVbPN3tPCiXsd0')
      .then(function(response) {
        console.log(response.text);
        setFormMessage("Message sent!");
      }, function(error) {
        console.log(error.text);
        setFormMessage("Sorry, the message couldn't be sent. Please send an email to alexandersegerev@gmail.com. Thanks.");
      });
  }

  return (
    <Form onSubmit={sendEmail} id="contactForm">
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control required name="name" placeholder="Monkey D. Luffy" onBlur={handleChange} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control required name="email" type="email" placeholder="mdluffy@gmail.com"  onBlur={handleChange} />
      </Form.Group>

      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control required name="subject" placeholder="The future Pirate King" onBlur={handleChange} />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control required name="message" as="textarea" rows="10" placeholder="I'm gonna be the King Of the Pirates!" onBlur={handleChange} />
      </Form.Group>

      {formMessage && <p className="form-message">{formMessage}</p>}

      <Button type="submit" className='btn'>Submit</Button>
    </Form>
  )
}

export default ContactForm;