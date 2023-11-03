import axios from '@/lib/axios';
import { keys } from '@/utils/keys';
import {
  keepPreviousData,
  useMutation,
  useQueries,
  useQuery,
} from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

export function usePost<T = any>(url: string) {
  return useMutation({
    mutationKey: keys(url),
    mutationFn: (payload?: T) =>
      axios.post(url, payload).then(({ data }) => data),
  });
}

export function usePut<T = any>(url: string) {
  return useMutation({
    mutationKey: keys(url),
    mutationFn: (payload: T) =>
      axios.put(url, payload).then(({ data }) => data),
  });
}

export function useDel(url: string) {
  return useMutation({
    mutationKey: keys(url),
    mutationFn: () => axios.delete(url).then(({ data }) => data),
  });
}

export function useGets(url: string[], config?: AxiosRequestConfig) {
  return useQueries({
    queries: url.map((item) => ({
      queryKey: keys(item),
      queryFn: () =>
        axios({ method: 'get', url: item, ...config }).then(({ data }) => data),
      placeholderData: keepPreviousData,
    })),
  });
}

export function useGet(
  url: string,
  search: string = '',
  isKeep: boolean = false
) {
  return useQuery({
    queryKey: keys(url, search),
    queryFn: () =>
      axios({
        method: 'get',
        url,
        params: {
          search,
        },
      }).then(({ data }) => data),
    placeholderData: isKeep ? keepPreviousData : undefined,
  });
}
