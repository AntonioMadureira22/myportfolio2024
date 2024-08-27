import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import your styling here

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Generate a five-digit number for the contact_number variable
    form.current.contact_number.value = Math.random() * 100000 | 0;

    // Send form using EmailJS
    emailjs.sendForm(
      'service_j6ji8pb', // EmailJS service ID
      'template_rvx4vot',    // EmailJS template ID
      form.current,
      'EaTT2vXb6XP68bm5w'  // EmailJS public key
    ).then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
