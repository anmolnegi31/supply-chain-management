const express = require('express');
const app = express();
const manufacturerRoute = require('./routes/manufacturer');

app.use(express.json());
app.use('/api/manufacturer', manufacturerRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Create a new manufacturer
app.post('/api/manufacturer', (req, res) => {
    const { name, address } = req.body;
    const manufacturer = { name, address };
    // For now, we'll just log the manufacturer to the console
    console.log(`Created manufacturer: ${manufacturer.name}`);
    res.send(`Manufacturer created successfully!`);
  });

  // Retrieve a list of manufacturers
app.get('/api/manufacturers', (req, res) => {
    const manufacturers = [
      { id: 1, name: 'Manufacturer 1', address: 'Address 1' },
      { id: 2, name: 'Manufacturer 2', address: 'Address 2' },
      { id: 3, name: 'Manufacturer 3', address: 'Address 3' },
    ];
    res.json(manufacturers);
  });

  // Retrieve a single manufacturer
app.get('/api/manufacturers/:id', (req, res) => {
    const id = req.params.id;
    const manufacturers = [
      { id: 1, name: 'Manufacturer 1', address: 'Address 1' },
      { id: 2, name: 'Manufacturer 2', address: 'Address 2' },
      { id: 3, name: 'Manufacturer 3', address: 'Address 3' },
    ];
    const manufacturer = manufacturers.find((m) => m.id === parseInt(id));
    if (!manufacturer) {
      res.status(404).send(`Manufacturer not found with id ${id}`);
    } else {
      res.json(manufacturer);
    }
  });

  // Update a manufacturer
app.put('/api/manufacturers/:id', (req, res) => {
    const id = req.params.id;
    const { name, address } = req.body;
    const manufacturers = [
      { id: 1, name: 'Manufacturer 1', address: 'Address 1' },
      { id: 2, name: 'Manufacturer 2', address: 'Address 2' },
      { id: 3, name: 'Manufacturer 3', address: 'Address 3' },
    ];
    const manufacturer = manufacturers.find((m) => m.id === parseInt(id));
    if (!manufacturer) {
      res.status(404).send(`Manufacturer not found with id ${id}`);
    } else {
      manufacturer.name = name;
      manufacturer.address = address;
      res.send(`Manufacturer updated successfully!`);
    }
  });