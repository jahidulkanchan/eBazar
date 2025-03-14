import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.price < 0 || formData.stock < 0) {
      alert('Price and stock must be non-negative values.');
      return;
    }

    try {
      await axios.post('https://ebazarreact.vercel.app/products', formData);
      
      toast.success('Product added successfully!');
      setFormData({ name: '', price: '', description: '', category: '', stock: '', imageUrl: '' });
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add product');
    }
  };

  return (
    <div className="flex">
      <div className={`w-64 bg-gradient-to-r from-[#FEC013] to-amber-400 text-black p-6 fixed top-0 left-0 h-full md:relative md:w-64 md:h-auto transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-xl font-bold text-green-500 bg-white px-4 py-1.5 rounded-full">Admin Dashboard</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-2xl"><FaTimes /></button>
        </div>
        <ul>
          <li className="mb-4"><Link to="/dashboard" className="text-lg hover:bg-amber-300 p-2 rounded">Dashboard</Link></li>
          <li className="mb-4"><Link to="/view-products" className="text-lg hover:bg-amber-300 p-2 rounded">View Products</Link></li>
          <li className="mb-4"><Link to="/add-product" className="text-lg hover:bg-amber-300 p-2 rounded">Add Product</Link></li>
          <li><Link to="/logout" className="text-lg hover:bg-amber-300 p-2 rounded">Logout</Link></li>
        </ul>
      </div>

      <div className="flex-1 p-6 bg-slate-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-amber-400">Add New Product</h2>
          <button className="md:hidden text-2xl" onClick={() => setIsSidebarOpen(true)}><FaBars /></button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-amber-400 rounded-lg" placeholder="Enter product name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-3 border border-amber-400 rounded-lg" placeholder="Enter product price" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full p-3 border border-amber-400 rounded-lg" placeholder="Enter category" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="w-full p-3 border border-amber-400 rounded-lg" placeholder="Enter stock quantity" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image URL</label>
            <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full p-3 border border-amber-400 rounded-lg" placeholder="Enter product image URL" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-3 border border-amber-400 rounded-lg" placeholder="Enter product description" required></textarea>
          </div>

          <button type="submit" className="w-full bg-amber-400 text-white py-3 rounded-lg hover:bg-amber-500">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;