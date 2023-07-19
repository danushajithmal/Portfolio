
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };

    axios.post('http://localhost:5000/email/add', newUser)
      .then((response) => {
        console.log('User added:', response.data);
    
      })
      .catch((error) => {
        console.error('Error adding user:', error);
        // Handle errors, e.g., show an error message to the user.
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
