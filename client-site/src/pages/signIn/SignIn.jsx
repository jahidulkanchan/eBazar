import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SignIn = () => {
  const navigate = useNavigate()
  const {singInUser} = useAuth()
  const handleSignIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value 
    const password = e.target.password.value
    singInUser(email, password)
    .then(()=> {
      console.log('user Logged in successfully')
      e.target.reset()
      navigate('/')
    })
    .catch((err)=> console.log(err))
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-3 text-center">
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
