import Axios from 'axios';

export const apiStatic = Axios.create({
  baseURL: './static/json',
  withCredentials: true,
});