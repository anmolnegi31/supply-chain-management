const express = require('express');
const router = express.Router();
const Manufacturer = require('../models/manufacturer');

router.get('/', (req, res) => {
  res.send('Manufacturer API');
});

module.exports = router;