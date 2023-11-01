import axios from 'axios';
import { url } from '@/config/url';

axios.create();
axios.defaults.baseURL = url.base;

export function setAuthorization(token: string) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axios;
