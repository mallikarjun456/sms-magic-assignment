// src/components/Clients.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Make an API call to fetch clients from the backend
    axios.get('http://localhost:3001/api/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;