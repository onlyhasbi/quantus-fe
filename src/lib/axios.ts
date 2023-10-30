import axios from 'axios';
import { url } from '@/config/url';

axios.create();
axios.defaults.baseURL = url.base;
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwZjQ3N2FmLTJkODAtNDBjZi05MTBlLTQ1Y2FjZDRlMWQ4OSIsInVzZXJuYW1lIjoiaGFzYmlAcXRpLmNvLmlkIiwiZW1haWwiOiJoYXNiaUBxdGkuY28uaWQiLCJleHAiOjE2OTg2NDA2MjF9.MQQCz186b3XriFofOCP5Q8qcr4CGFh9o7BfPz_SdYK8';


export function setAuthentication(token: string) {
  axios.defaults.headers.common['Authorization'] = token;
}

export default axios;
