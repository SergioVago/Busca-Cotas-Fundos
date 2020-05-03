import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:3001'
})

export default api