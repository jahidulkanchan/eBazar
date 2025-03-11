const User = require('../models/usersSchema');

// নতুন ইউজার তৈরি
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create user', error: err });
  }
};

// সব ইউজার পাওয়া
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
