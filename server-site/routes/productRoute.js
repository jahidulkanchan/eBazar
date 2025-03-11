const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get All Products ============================
router.get('/', productController.getAllProducts);

// Get Single Product ==========================
router.get('/:id', productController.getProductById);

// Post Single Product =========================
router.post('/', productController.createProduct);

// Update Single Product =======================
router.put('/:id', productController.updateProduct);

// Delete Single Product =======================
router.delete('/:id', productController.deleteProduct);

module.exports = router;
