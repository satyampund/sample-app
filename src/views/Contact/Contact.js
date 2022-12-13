import React from 'react';
import './Contact.css';

// Routes will be http://localhost:3000/contact/LPTOP/123

import { useParams } from 'react-router-dom';

function Contact() {
  const { title, price } = useParams();
  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
}

export default Contact;
