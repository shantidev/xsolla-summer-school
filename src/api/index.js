import Axios from 'axios';

export const apiStatic = Axios.create({
  baseURL: './static',
  withCredentials: true,
});