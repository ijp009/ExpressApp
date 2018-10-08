const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controller/product');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

// CREATE Product
router.post('/create', product_controller.create);

// GET all Products
router.get('/', product_controller.getAllProducts);

// GET specific Product
router.get('/:id', product_controller.getProducytById);

// UPDATE Product
router.put('/update/:id', product_controller.updateProduct);

// DELETE Product
router.delete('/delete/:id', product_controller.deleteProduct);
module.exports = router;