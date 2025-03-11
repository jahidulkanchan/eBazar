const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// পণ্য তালিকা দেখানোর রুট
router.get('/', productController.getAllProducts);

// একক পণ্য দেখানোর রুট
router.get('/:id', productController.getProductById);

// পণ্য তৈরি করার রুট
router.post('/', productController.createProduct);

// পণ্য আপডেট করার রুট
router.put('/:id', productController.updateProduct);

// পণ্য মুছার রুট
router.delete('/:id', productController.deleteProduct);

module.exports = router;
