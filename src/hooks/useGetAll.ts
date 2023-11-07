import ApiClient from '@/service/apiClient';
import { keys } from '@/utils/keys';
import { keepPreviousData, useQueries } from '@tanstack/react-query';

export function useGetAll(urls: string[]) {
  return useQueries({
    queries: urls.map((url) => ({
      queryKey: keys(`get/${url}`),
      queryFn: () => {
        const apiClient = new ApiClient(url);
        return apiClient.get();
      },
      placeholderData: keepPreviousData,
    })),
  });
}
