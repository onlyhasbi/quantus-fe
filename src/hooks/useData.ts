import axios from '@/lib/axios';
import { keys } from '@/utils/keys';
import { url } from '@/config/url';
import { useQuery, useQueries, useMutation } from '@tanstack/react-query';

export function useProfile() {
  return useQuery({
    queryKey: keys(url.auth.me),
    queryFn: () => axios.get(url.auth.me).then(({ data }) => data),
  });
}

export function useLogout(){
  return useMutation({
    mutationKey: keys(url.auth.logout),
    mutationFn: () => axios.post(url.auth.logout).then(({ data }) => data),
  });
}

export function useAssets() {
  return useQueries({
    queries: [url.asset.status, url.asset.location].map((item) => ({
      queryKey: keys(item),
      queryFn: () => axios.get(item).then(({ data }) => data),
    })),
  });
}
