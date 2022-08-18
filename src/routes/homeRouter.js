// requiere 
const express = require('express');
const router = express.Router();

// controller require
const homeController = require('../controllers/homeController');

/* route for Get home page */
router.get('/', homeController.home); // '/' = ruta Raíz
router.get('/contact', homeController.contact);

module.exports = router;
