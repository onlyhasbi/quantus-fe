import axios from 'axios';
import { url } from '@/config/url';

axios.create();
axios.defaults.baseURL = url.base;

export function setAuthentication(token: string) {
  axios.defaults.headers.common['Authorization'] = token;
}

export default axios;
