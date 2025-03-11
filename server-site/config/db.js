const mongoose = require('mongoose'); 
// MongoDB connection
const connectDB = async () => {
  try {
    const uri = (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4xfij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`) || 'your_mongodb_connection_string_here';
    await mongoose.connect(uri); 
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

// Call the database connection function
module.exports = connectDB;