import axios from 'axios';
import { keys } from '@/utils/keys';
import { useQueries, useQuery, keepPreviousData } from '@tanstack/react-query';

export function useGets(urls: string[]) {
  return useQueries({
    queries: urls.map((url) => ({
      queryKey: keys(`get/${url}`),
      queryFn: () => axios.get(url).then(({ data }) => data),
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
