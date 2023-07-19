import React, { useState } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {email}

    // Make a POST request to the backend server
    axios.post('http://localhost:5000/email/add', newUser)
      .then((response) => {
        console.log('Email subscribed successfully!');
      })
      .catch((error) => {
        console.error('Error subscribing to email:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input type="text" id="email" className="form-control" placeholder="Enter Your Email" required value={email} onChange={handleEmailChange}/>
        <button type="Submit" className="btn btn-danger mt-3">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
