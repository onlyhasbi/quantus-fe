import axios from '@/lib/axios';
import { keys } from '@/utils/keys';
import { url } from '@/config/url';
import { useQuery, useQueries, useMutation } from '@tanstack/react-query';
import { AuthPayload } from '@/types';
import { AxiosRequestConfig } from 'axios';

export function useLogin() {
  return useMutation({
    mutationKey: keys(url.auth.login),
    mutationFn: (payload: AuthPayload) =>
      axios.post(url.auth.login, payload).then(({ data }) => data),
  });
}

export function useLogout() {
  return useMutation({
    mutationKey: keys(url.auth.logout),
    mutationFn: () => axios.post(url.auth.logout).then(({ data }) => data),
  });
}

export function usePost<T = any>(url: string) {
  return useMutation({
    mutationKey: keys(url),
    mutationFn: (payload: T) =>
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
    })),
  });
}

export function useGet(url: string, config?: AxiosRequestConfig) {
  return useQuery({
    queryKey: keys(url),
    queryFn: () =>
      axios({ method: 'get', url, ...config }).then(({ data }) => data),
  });
}
