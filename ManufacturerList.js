// ManufacturerList.js
import React, { useState, useEffect } from 'eact';

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetch('/api/manufacturers')
     .then(response => response.json())
     .then(data => setManufacturers(data));
  }, []);

  return (
    <div>
      <h1>Manufacturer List</h1>
      <ul>
        {manufacturers.map(manufacturer => (
          <li key={manufacturer.id}>{manufacturer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ManufacturerList;