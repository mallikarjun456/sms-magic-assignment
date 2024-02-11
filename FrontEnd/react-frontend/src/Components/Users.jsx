// src/components/Users.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make an API call to fetch users from the backend
    axios.get('http://localhost:3001/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;