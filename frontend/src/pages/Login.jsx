import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/auth/login', formData);
      login(response.data);
      navigate('/parcels');
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
      <div className="w-full max-w-5xl mx-4 flex items-center justify-between">
        {/* Left - Title */}
        <div className="flex-1">
          <h1 className="text-7xl font-bold text-gray-500/70 leading-tight tracking-wide">
            Courier<br />Management<br />System
          </h1>
        </div>

        {/* Right - Login Form */}
        <div className="flex-1 flex flex-col items-end">
          <form onSubmit={handleSubmit} className="w-80 space-y-4">
            <input
              type="email"
              placeholder="Username"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 bg-white text-gray-700 placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 border border-gray-300 bg-white text-gray-700 placeholder-gray-400"
            />
            <div className="flex gap-4 pt-2">
              <Link
                to="/register"
                className="flex-1 text-center py-2 border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                SignUp
              </Link>
              <button
                type="submit"
                className="flex-1 py-2 border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-16 text-gray-600 cursor-pointer hover:underline">
            I am admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
