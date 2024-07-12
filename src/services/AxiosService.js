import axios from 'axios';

const BACKEND_URL = 'http://localhost:5173';

// Create an axios instance with custom configuration
const client = axios.create({
  baseURL: BACKEND_URL,
  timeout: 3600000, // 1 hour
});

const Service = { client };

export default Service;
