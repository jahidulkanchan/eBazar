const mongoose = require('mongoose');

// Define the schema for a product
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Trims extra spaces
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Ensure price is not negative
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0, // Ensure stock is not negative
    },
    imageUrl: {
      type: String,
      required: false,
      default: '', // Default to empty string if not provided
    },
  }
);

// Create and export the Product model based on the schema
module.exports = mongoose.model('Product', productSchema);
