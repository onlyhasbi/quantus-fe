import axios from '@/lib/axios';

type Put<T> = {
  data?: T;
  id: string;
};

class ApiClient<T> {
  endpoint: string = '';

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  addEndpointId = (id: string) => `${this.endpoint}/${id}`;
  get = () => axios.get(this.endpoint).then((res) => res.data);
  post = (data?: T) => axios.post(this.endpoint, data).then((res) => res.data);
  put = ({ data, id }: Put<T>) =>
    axios.put(`${<string>this.endpoint}/${id}`, data).then((res) => res.data);
  delete = (id: string) =>
    axios.delete(`${<string>this.endpoint}/${id}`).then((res) => res.data);
}

export default ApiClient;
