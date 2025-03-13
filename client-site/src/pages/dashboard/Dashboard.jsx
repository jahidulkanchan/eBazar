import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Changed from FaBarsStaggered to FaBars

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Grab input values from the form
    const form = e.target;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const productDescription = form.productDescription.value;
    const productImageUrl = form.productImageUrl.value;

    // Log the input values to the console
    console.log({
      productName,
      productPrice,
      productDescription,
      productImageUrl,
    });
    e.target.reset()
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-64 bg-gradient-to-r from-[#FEC013] to-amber-400 text-black p-6 fixed top-0 left-0 h-full md:relative md:flex md:flex-col md:items-start md:w-64 md:h-auto transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-xl rounded-full font-bold text-green-500 bg-white px-4 py-1.5">Admin Dashboard</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="text-lg hover:bg-amber-300 p-2 rounded">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/view-products" className="text-lg hover:bg-amber-300 p-2 rounded">View Products</Link>
          </li>
          <li className="mb-4">
            <Link to="/add-product" className="text-lg hover:bg-amber-300 p-2 rounded">Add Product</Link>
          </li>
          <li>
            <Link to="/logout" className="text-lg hover:bg-amber-300 p-2 rounded">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-slate-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-amber-400">Add New Product</h2>
          {/* Mobile Sidebar Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars /> {/* Changed to FaBars */}
          </button>
        </div>

        {/* Add Product Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            {/* Product Name & Price side by side */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                className="w-full p-3 border border-amber-400 rounded-lg outline-none"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="productPrice"
                className="w-full p-3 border border-amber-400 rounded-lg outline-none"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image URL</label>
            <input
              type="url"
              name="productImageUrl"
              className="w-full p-3 border border-amber-400 rounded-lg outline-none"
              placeholder="Enter product image URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Description</label>
            <textarea
              name="productDescription"
              className="w-full p-3 border border-amber-400 rounded-lg outline-none"
              placeholder="Enter product description"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 text-white py-3 rounded-lg hover:bg-amber-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
