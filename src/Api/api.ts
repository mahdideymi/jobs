import axios from 'axios';

export default axios.create({
  baseURL: `baseUrl`,
  responseType: 'json',
});
