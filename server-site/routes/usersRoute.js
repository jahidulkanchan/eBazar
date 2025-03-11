const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Post new user ========================
router.post('/', usersController.createUser);

// Get All users ========================
router.get('/', usersController.getAllUsers);

module.exports = router;
