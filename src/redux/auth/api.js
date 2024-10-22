import axios from 'axios';
import Cookies from 'js-cookie'; // To handle cookies


const api = axios.create({
  // baseURL: 'http://13.126.98.206:3000', 
  baseURL: 'https://api.eeveegoldsavings.com:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor (for error handling, logging, etc.)
api.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.log('Unauthorized, logging out...');
      // Example: Clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// {{baseUrl}}/user/payment

export default api;
