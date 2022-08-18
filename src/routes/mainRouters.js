// requiere 
const express =('express');
const router = express.Router();

// controller require
const mainController = require('../controllers/mainController');

/* route for Get home page */
router.get('/', mainController.home); // '/' = ruta Raíz
router.get('/contact', mainController.contact);

module.exports = router;
