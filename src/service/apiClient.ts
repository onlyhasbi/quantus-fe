import axios from '@/lib/axios';
import { AxiosRequestConfig } from 'axios';

type Put<T> = {
  data?: T;
  id: string;
};

class ApiClient<T extends any> {
  endpoint: string = '';

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axios.get(this.endpoint, { ...config }).then((res) => res.data);

  getById = (id: string) =>
    axios.get<T>(`${<string>this.endpoint}/${id}`).then((res) => res.data);

  get = () => axios.get(this.endpoint).then((res) => res.data);

  post = (data?: T) => axios.post(this.endpoint, data).then((res) => res.data);

  put = ({ data, id }: Put<T>) =>
    axios.put(`${<string>this.endpoint}/${id}`, data).then((res) => res.data);

  delete = (id: string) =>
    axios.delete(`${<string>this.endpoint}/${id}`).then((res) => res.data);
}

export default ApiClient;
