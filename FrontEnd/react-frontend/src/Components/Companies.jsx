// src/components/Companies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Make an API call to fetch companies from the backend
    axios.get('http://localhost:3001/api/companies')
      .then(response => setCompanies(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Companies</h2>
      <ul>
        {companies.map(company => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;