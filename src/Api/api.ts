import axios from 'axios';

export default axios.create({
  baseURL: `https://jobs.profile-digital.com/`,
  responseType: 'json',
});
