// ManufacturerDetail.js
import React from 'react';

function ManufacturerDetail({ match }) {
  const id = match.params.id;
  const [manufacturer, setManufacturer] = useState({});

  useEffect(() => {
    fetch(`/api/manufacturers/${id}`)
     .then(response => response.json())
     .then(data => setManufacturer(data));
  }, [id]);

  return (
    <div>
      <h1>Manufacturer Detail</h1>
      <p>ID: {manufacturer.id}</p>
      <p>Name: {manufacturer.name}</p>
      <p>Address: {manufacturer.address}</p>
    </div>
  );
}

export default ManufacturerDetail;